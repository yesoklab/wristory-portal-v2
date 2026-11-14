// Metamask & Web3 EIP-747 Token Registration Utility for WRISTORY ($WR) and BRAHMS ($BRAHMS)

export interface TokenWatchConfig {
  address: string;
  symbol: string;
  decimals: number;
  image: string;
  fallbackImage: string;
}

export const WR_TOKEN_CONFIG: TokenWatchConfig = {
  address: '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7',
  symbol: 'WR',
  decimals: 18,
  image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibiohfmkqcslplibgrn4giwrhuw4r4jqkhhdm7ozj4ufk7ch46fxe',
  fallbackImage: '/assets/tokens/wr_logo_256.png'
};

export const BRAHMS_TOKEN_CONFIG: TokenWatchConfig = {
  address: '0xE790C3D5e3381926c66416638Fd3e955e748Bb89',
  symbol: 'BRAHMS',
  decimals: 18,
  image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiejr426cgatoqimlyposwzrvwm2kqoc6t3a6buq2jm24fgkslvujm',
  fallbackImage: '/assets/tokens/brahms_logo_256.png'
};

export const BASE_CHAIN_CONFIG = {
  chainId: '0x2105', // 8453 in hex
  chainName: 'Base',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: ['https://mainnet.base.org'],
  blockExplorerUrls: ['https://basescan.org']
};

/**
 * Resolves the active MetaMask provider, handling multi-wallet extensions (e.g. Coinbase Wallet + MetaMask)
 */
function getEthereumProvider(): any {
  if (typeof window === 'undefined') return null;
  const anyWindow = window as any;
  if (!anyWindow.ethereum) return null;

  if (anyWindow.ethereum.providers && Array.isArray(anyWindow.ethereum.providers)) {
    const mm = anyWindow.ethereum.providers.find((p: any) => p.isMetaMask && !p.isCoinbaseWallet);
    if (mm) return mm;
  }

  return anyWindow.ethereum;
}

/**
 * Generates official MetaMask Mobile App deep link for the current or specified URL
 */
export function getMetaMaskDeepLink(): string {
  if (typeof window === 'undefined') return 'https://metamask.app.link';
  const cleanHost = window.location.host;
  const cleanPath = window.location.pathname + window.location.search;
  return `https://metamask.app.link/dapp/${cleanHost}${cleanPath}`;
}

/**
 * Adds an ERC-20 token with its official logo to MetaMask via EIP-747 wallet_watchAsset.
 * Automatically handles account connection, mobile deep linking, and network switching to Base Mainnet.
 */
export async function addCustomTokenToMetaMask(config: TokenWatchConfig): Promise<{ success: boolean; message: string }> {
  const provider = getEthereumProvider();
  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (!provider) {
    if (isMobile) {
      const deepLink = getMetaMaskDeepLink();
      try {
        window.location.href = deepLink;
      } catch (e) {
        console.warn('Deep link navigation failed:', e);
      }
      return {
        success: false,
        message: '📱 메타마스크 모바일 앱을 실행합니다. 앱 내 브라우저에서 사이트가 열리면 [토큰 추가]를 눌러주세요!'
      };
    }

    return {
      success: false,
      message: '메타마스크 지갑 확장이 감지되지 않았습니다. 메타마스크 앱 내 브라우저에서 열거나 브라우저 확장 프로그램을 설치해 주세요.'
    };
  }

  try {
    // 1. Authorize DApp connection first (resolves 'DApp not found' errors)
    try {
      await provider.request({ method: 'eth_requestAccounts' });
    } catch (authError: any) {
      if (authError?.code === 4001) {
        return { success: false, message: '메타마스크 연결 승인이 취소되었습니다.' };
      }
      console.warn('Account request warning:', authError);
    }

    // 2. Ensure user is on Base Mainnet (Chain ID 8453 / 0x2105)
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: BASE_CHAIN_CONFIG.chainId }]
      });
    } catch (switchError: any) {
      if (switchError.code === 4902 || switchError.data?.originalError?.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [BASE_CHAIN_CONFIG]
          });
        } catch (addError) {
          console.warn('Failed to add Base network:', addError);
        }
      }
    }

    // 3. Request MetaMask to watch and register the asset with official logo
    // Try with exact address first, then fallback to lowercase if 'Invalid address' occurs
    const fullImageUrl = config.image.startsWith('http')
      ? config.image
      : `${typeof window !== 'undefined' ? window.location.origin : ''}${config.image}`;

    let wasAdded = false;
    try {
      wasAdded = await provider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: config.address,
            symbol: config.symbol,
            decimals: config.decimals,
            image: fullImageUrl
          }
        }
      });
    } catch (firstErr: any) {
      console.warn('First wallet_watchAsset attempt failed, retrying with lowercase address:', firstErr);
      wasAdded = await provider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: config.address.toLowerCase(),
            symbol: config.symbol,
            decimals: config.decimals,
            image: fullImageUrl
          }
        }
      });
    }

    if (wasAdded) {
      return { 
        success: true, 
        message: `✅ 메타마스크에 $${config.symbol} 토큰 및 공식 로고가 성공적으로 등록되었습니다!` 
      };
    } else {
      return { 
        success: false, 
        message: `메타마스크에서 $${config.symbol} 토큰 추가가 취소되었습니다.` 
      };
    }
  } catch (error: any) {
    console.error(`Error adding ${config.symbol} token to MetaMask:`, error);
    const msg = error?.message || '';
    if (msg.includes('DApp not found') || msg.includes('Invalid address')) {
      return {
        success: false,
        message: `지갑에서 [토큰 가져오기]에 컨트랙트 주소(${config.address.slice(0, 8)}...)를 직접 등록하거나, 메타마스크 상단에서 Base 네트워크가 맞는지 확인해 주세요.`
      };
    }
    return {
      success: false,
      message: msg || '토큰 등록 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
    };
  }
}

/**
 * Adds WRISTORY ($WR) token with official IPFS logo to MetaMask
 */
export async function addWRTokenToMetaMask(): Promise<{ success: boolean; message: string }> {
  return addCustomTokenToMetaMask(WR_TOKEN_CONFIG);
}

/**
 * Adds BRAHMS ($BRAHMS) token with official logo to MetaMask
 */
export async function addBRAHMSTokenToMetaMask(): Promise<{ success: boolean; message: string }> {
  return addCustomTokenToMetaMask(BRAHMS_TOKEN_CONFIG);
}

