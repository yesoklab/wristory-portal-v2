export type Lang = 'ko' | 'en';

export interface TranslationDictionary {
  nav: {
    home: string;
    gallery: string;
    migration: string;
    whitepaper: string;
    research: string;
    wallet: string;
    guide: string;
    admin: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    exploreMasterpieces: string;
    viewOpenSea: string;
    swapUniswap: string;
  };
  metrics: {
    chains: string;
    chainsVal: string;
    masterpieces: string;
    masterpiecesVal: string;
    curation: string;
    curationVal: string;
    storage: string;
    storageVal: string;
  };
  dualSection: {
    badge: string;
    title: string;
    subtitle: string;
    baseChain: string;
    tezosChain: string;
  };
  artworks: {
    buckwheat: {
      title: string;
      subtitle: string;
      chainBadge: string;
      quote: string;
      desc: string;
      detail1: string;
      detail2: string;
      mintBtn: string;
      openseaBtn: string;
      zoraBtn: string;
      ipfsBtn: string;
    };
    pizza: {
      title: string;
      subtitle: string;
      chainBadge: string;
      quote: string;
      desc: string;
      detail1: string;
      detail2: string;
      objktBtn: string;
      ipfsBtn: string;
    };
  };
  modal: {
    hdView: string;
    interactive: string;
    staticView: string;
    zoomIn: string;
    zoomOut: string;
    close: string;
    ipfsLink: string;
  };
  footer: {
    mission: string;
    copyright: string;
    channels: string;
  };
}

export const translations: Record<Lang, TranslationDictionary> = {
  ko: {
    nav: {
      home: '홈',
      gallery: '대표 명작 (Dual Masterpieces)',
      migration: 'Base 마이그레이션',
      whitepaper: '백서',
      research: '규제 리서치',
      wallet: '지갑',
      guide: '가이드',
      admin: '관리자'
    },
    hero: {
      tagline: '역사적 가치의 온체인 영구 보존 프로젝트',
      title: 'THE BRIDGE OF TIME & HERITAGE',
      subtitle: '역사는 블록체인 위에서 영원히 살아 숨 쉽니다.',
      description: 'WRISTORY는 시대를 관통하는 인류의 문학·역사적 유산을 이더리움 Layer-2(Base)와 테조스(Tezos) 온체인 제너러티브 파인아트로 아카이빙합니다.',
      exploreMasterpieces: '대표 명작 감상하기',
      viewOpenSea: 'OpenSea 공식 컬렉션',
      swapUniswap: 'Uniswap v4 풀 확인'
    },
    metrics: {
      chains: '듀얼 메인넷',
      chainsVal: 'Base L2 × Tezos',
      masterpieces: '엄선된 대표작',
      masterpiecesVal: '2대 헤리티지',
      curation: '큐레이션 방식',
      curationVal: '자율 제너러티브 아트',
      storage: '분산 스토리지',
      storageVal: 'IPFS 영구 아카이브'
    },
    dualSection: {
      badge: 'WRISTORY CURATED DUAL MASTERPIECES',
      title: '2대 메인넷 대표 마스터피스',
      subtitle: 'Base 체인의 문학적 정취와 Tezos 체인의 블록체인 역사를 대표하는 두 작품을 감상하세요.',
      baseChain: 'BASE MAINNET',
      tezosChain: 'TEZOS MAINNET'
    },
    artworks: {
      buckwheat: {
        title: '이효석 — 메밀꽃 필 무렵',
        subtitle: 'When Buckwheat Flowers Bloom',
        chainBadge: 'Base L2 • Highlight & OpenSea',
        quote: '"산허리는 온통 메밀밭이어서 피기 시작한 꽃이 소금을 뿌린 듯이 흐뭇한 달빛에 숨이 막힐 지경이다."',
        desc: '한국 근대 서정문학의 정점인 가산(可山) 이효석 선생의 1936년 불멸의 단편소설을 온체인 자율 생성 예술(Generative Art)로 구현한 신작입니다. 결정론적 난수와 펄린 노이즈(Perlin Noise) 알고리즘을 통해 봉평 밤하늘의 흐뭇한 달빛과 소금을 뿌린 듯 하얗게 일렁이는 메밀꽃밭을 디지털 헤리티지로 영구 보존합니다.',
        detail1: '알고리즘: Autonomous Deterministic PRNG / Canvas Flow Fields',
        detail2: '아카이브: Highlight 공식 민팅 • OpenSea 정식 등재 • Zora 온체인 연동',
        mintBtn: 'Highlight 공식 신작 민팅',
        openseaBtn: 'OpenSea 컬렉션',
        zoraBtn: 'Zora 코인',
        ipfsBtn: 'IPFS 원본 보기'
      },
      pizza: {
        title: '비트코인 피자 — Bitcoin Pizza Day',
        subtitle: '10,000 BTC Transaction Heritage',
        chainBadge: 'Tezos FA2 • OBJKT 대표작',
        quote: '"I\'ll pay 10,000 bitcoins for a couple of pizzas.. like maybe 2 large ones so I have some left over for the next day." — Laszlo Hanyecz (2010.05.18)',
        desc: '2010년 5월 22일, 암호화폐가 인류 역사상 최초로 현실 세계의 실물 재화(피자 2판)와 교환되며 화폐로서의 첫걸음을 뗀 위대한 순간을 기념하는 온체인 제너러티브 마스터피스입니다. 테조스(Tezos) 메인넷 위에서 자율 생성된 기하학적 텍스처와 디지털 캔버스로 영구히 기록되었습니다.',
        detail1: '기념 역사: 2010.05.22 라스즐로의 10,000 BTC 피자 역사적 교환',
        detail2: '플랫폼: Tezos 메인넷 OBJKT 공식 컬렉션 영구 등재',
        objktBtn: 'OBJKT 대표 컬렉션 감상',
        ipfsBtn: 'IPFS 원본 보기'
      }
    },
    modal: {
      hdView: '무손실 HD 확대 뷰',
      interactive: '라이브 인터랙티브 캔버스 실행',
      staticView: '정적 고화질 이미지로 보기',
      zoomIn: '확대',
      zoomOut: '축소',
      close: '닫기',
      ipfsLink: 'IPFS 탈중앙화 게이트웨이'
    },
    footer: {
      mission: '블록체인 기술을 통한 인류 문학·역사적 유산의 영구적 보존',
      copyright: '© 2026 YesOkLab | WRISTORY Project. All Rights Reserved.',
      channels: '공식 채널'
    }
  },
  en: {
    nav: {
      home: 'Home',
      gallery: 'Dual Masterpieces',
      migration: 'Base Migration',
      whitepaper: 'Whitepaper',
      research: 'Research',
      wallet: 'Wallet',
      guide: 'Guide',
      admin: 'Admin'
    },
    hero: {
      tagline: 'Permanent On-Chain Historical Preservation',
      title: 'THE BRIDGE OF TIME & HERITAGE',
      subtitle: 'History breathes eternal life upon the blockchain.',
      description: 'WRISTORY archives timeless human literature and cryptographic milestones into on-chain generative fine art across Ethereum Layer-2 (Base) and Tezos.',
      exploreMasterpieces: 'Explore Masterpieces',
      viewOpenSea: 'OpenSea Collection',
      swapUniswap: 'Uniswap v4 Pool'
    },
    metrics: {
      chains: 'Dual Mainnets',
      chainsVal: 'Base L2 × Tezos',
      masterpieces: 'Curated Works',
      masterpiecesVal: '2 Heritage Icons',
      curation: 'Artform',
      curationVal: 'Generative Fine Art',
      storage: 'Decentralized Storage',
      storageVal: 'Permanent IPFS'
    },
    dualSection: {
      badge: 'WRISTORY CURATED DUAL MASTERPIECES',
      title: 'Curated Dual Mainnet Masterpieces',
      subtitle: 'Experience the poetic Korean literature on Base and the cryptographic heritage on Tezos.',
      baseChain: 'BASE MAINNET',
      tezosChain: 'TEZOS MAINNET'
    },
    artworks: {
      buckwheat: {
        title: 'Lee Hyo-seok — When Buckwheat Flowers Bloom',
        subtitle: 'The Moonlit Heritage (메밀꽃 필 무렵)',
        chainBadge: 'Base L2 • Highlight & OpenSea',
        quote: '"The hillside was covered entirely in buckwheat, and the blooming flowers looked as if salt had been sprinkled under the breathtakingly soft moonlight."',
        desc: 'Translating Lee Hyo-seok\'s 1936 Korean literary masterpiece into autonomous Web3 generative art. Driven by deterministic PRNG algorithms and Perlin noise, this piece archives Korean modern literature on-chain forever upon Ethereum Layer-2 (Base Mainnet).',
        detail1: 'Algorithm: Autonomous Deterministic PRNG / Canvas Flow Fields',
        detail2: 'Archive: Highlight Official Mint • OpenSea Verified • Zora On-Chain Coin',
        mintBtn: 'Mint on Highlight.xyz',
        openseaBtn: 'OpenSea Collection',
        zoraBtn: 'Zora Coin',
        ipfsBtn: 'View IPFS Master'
      },
      pizza: {
        title: 'Bitcoin Pizza — 10,000 BTC Heritage',
        subtitle: 'The Dawn of Cryptographic Commerce',
        chainBadge: 'Tezos FA2 • OBJKT Masterpiece',
        quote: '"I\'ll pay 10,000 bitcoins for a couple of pizzas.. like maybe 2 large ones so I have some left over for the next day." — Laszlo Hanyecz (May 18, 2010)',
        desc: 'Commemorating May 22, 2010, when cryptocurrency was exchanged for real-world goods (two pizzas) for the first time in human history. Curated and permanently rendered as generative art upon the Tezos blockchain.',
        detail1: 'History: May 22, 2010 — Laszlo\'s Historic 10,000 BTC Pizza Transaction',
        detail2: 'Platform: OBJKT Official Collection on Tezos Mainnet',
        objktBtn: 'View on OBJKT.com',
        ipfsBtn: 'View IPFS Master'
      }
    },
    modal: {
      hdView: 'Lossless HD Master View',
      interactive: 'Launch Interactive Live Canvas',
      staticView: 'View High-Res Image',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      close: 'Close',
      ipfsLink: 'IPFS Decentralized Gateway'
    },
    footer: {
      mission: 'Preserving human cultural & cryptographic heritage through decentralized blockchain technology.',
      copyright: '© 2026 YesOkLab | WRISTORY Project. All Rights Reserved.',
      channels: 'Official Channels'
    }
  }
};
