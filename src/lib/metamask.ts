// Metamask & Web3 EIP-747 Token Registration Utility for WRISTORY ($WR)

export const WR_TOKEN_CONFIG = {
  address: '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7',
  symbol: 'WR',
  decimals: 18,
  image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibiohfmkqcslplibgrn4giwrhuw4r4jqkhhdm7ozj4ufk7ch46fxe',
  fallbackImage: 'https://ipfs.io/ipfs/bafybeibiohfmkqcslplibgrn4giwrhuw4r4jqkhhdm7ozj4ufk7ch46fxe'
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

export async function addWRTokenToMetaMask(): Promise<{ success: boolean; message: string }> {
  if (typeof window === 'undefined') {
    return { success: false, message: 'Browser window not found.' };
  }

  const ethereum = (window as any).ethereum;

  if (!ethereum) {
    return {
      success: false,
      message: '메타마스크 지갑 확장이 감지되지 않았습니다. 메타마스크 앱 브라우저를 이용해 주세요.'
    };
  }

  try {
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

    const wasAdded = await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: WR_TOKEN_CONFIG.address,
          symbol: WR_TOKEN_CONFIG.symbol,
          decimals: WR_TOKEN_CONFIG.decimals,
          image: WR_TOKEN_CONFIG.image
        }
      }
    });

    if (wasAdded) {
      return { 
        success: true, 
        message: '✅ 메타마스크에 $WR 토큰 및 공식 로고가 성공적으로 등록되었습니다!' 
      };
    } else {
      return { 
        success: false, 
        message: '메타마스크에서 토큰 추가가 취소되었습니다.' 
      };
    }
  } catch (error: any) {
    console.error('Error adding WR token to MetaMask:', error);
    return {
      success: false,
      message: error?.message || '토큰 등록 중 오류가 발생했습니다.'
    };
  }
}
