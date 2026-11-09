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
  fallbackImage: 'https://ipfs.io/ipfs/bafybeibiohfmkqcslplibgrn4giwrhuw4r4jqkhhdm7ozj4ufk7ch46fxe'
};

export const BRAHMS_TOKEN_CONFIG: TokenWatchConfig = {
  address: '0xE790C3D5e3381926c66416638Fd3e955e748Bb89',
  symbol: 'BRAHMS',
  decimals: 18,
  image: 'https://raw.githubusercontent.com/yesoklab/assets/master/blockchains/base/assets/0xE790C3D5e3381926c66416638Fd3e955e748Bb89/logo.png',
  fallbackImage: 'https://wristory-portal-v2.vercel.app/assets/tokens/brahms_logo_256.png'
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
 * Adds an ERC-20 token with its official logo to MetaMask via EIP-747 wallet_watchAsset.
 * Automatically handles network switching to Base Mainnet if necessary.
 */
export async function addCustomTokenToMetaMask(config: TokenWatchConfig): Promise<{ success: boolean; message: string }> {
  if (typeof window === 'undefined') {
    return { success: false, message: 'Browser window not found.' };
  }

  const ethereum = (window as any).ethereum;

  if (!ethereum) {
    return {
      success: false,
      message: '메타마스크 지갑 확장이 감지되지 않았습니다. 메타마스크 앱 내 브라우저에서 열거나 브라우저 확장 프로그램을 설치해 주세요.'
    };
  }

  try {
    // 1. Ensure user is on Base Mainnet (Chain ID 8453 / 0x2105)
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: BASE_CHAIN_CONFIG.chainId }]
      });
    } catch (switchError: any) {
      if (switchError.code === 4902 || switchError.data?.originalError?.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [BASE_CHAIN_CONFIG]
          });
        } catch (addError) {
          console.warn('Failed to add Base network:', addError);
        }
      }
    }

    // 2. Request MetaMask to watch and register the asset with official logo
    const wasAdded = await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: config.address,
          symbol: config.symbol,
          decimals: config.decimals,
          image: config.image
        }
      }
    });

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
    return {
      success: false,
      message: error?.message || '토큰 등록 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
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

