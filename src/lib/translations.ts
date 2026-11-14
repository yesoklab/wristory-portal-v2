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
    homeland: {
      title: string;
      subtitle: string;
      chainBadge: string;
      quote: string;
      desc: string;
      impactNote: string;
      controlsNote: string;
      detail1: string;
      detail2: string;
      openseaBtn: string;
      goodNeighborsBtn: string;
      objktBtn: string;
      ipfsBtn: string;
    };
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
  walletAction: {
    addTokenBtn: string;
    addingToken: string;
    tokenAddedSuccess: string;
    contractCopied: string;
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
      gallery: '대표 명작 (Masterpieces)',
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
      description: 'WRISTORY는 시대를 관통하는 인류의 문학·역사·독립정신 유산을 이더리움 Layer-2(Base)와 테조스(Tezos) 온체인 제너러티브 파인아트로 아카이빙합니다.',
      exploreMasterpieces: '대표 명작 감상하기',
      viewOpenSea: '조국아 울지 마라 (OpenSea)',
      swapUniswap: 'Uniswap v4 풀 확인'
    },
    metrics: {
      chains: '듀얼 메인넷',
      chainsVal: 'Base L2 × Tezos',
      masterpieces: '엄선된 대표작',
      masterpiecesVal: '3대 헤리티지',
      curation: '큐레이션 방식',
      curationVal: '자율 제너러티브 아트',
      storage: '분산 스토리지',
      storageVal: 'IPFS 영구 아카이브'
    },
    dualSection: {
      badge: 'WRISTORY CURATED DUAL-CHAIN MASTERPIECES',
      title: '3대 듀얼 메인넷 대표 마스터피스',
      subtitle: 'Base와 Tezos 듀얼 체인 공익 기념작 「조국아 울지 마라」부터 문학·블록체인 역사 대표작까지 온체인으로 감상하세요.',
      baseChain: 'BASE MAINNET',
      tezosChain: 'TEZOS MAINNET'
    },
    artworks: {
      homeland: {
        title: '조국아 울지 마라 (Do Not Cry, Homeland)',
        subtitle: 'Public-Good Dual-Chain Generative Art — Koryo-saram 1937 Memorial',
        chainBadge: 'Base (OpenSea · Highlight) × Tezos (Objkt)',
        quote: '"조국아 울지 마라 / 우리들이 울어도 너는 울지 마라 / 눈물 감추면서 우리 옛날 수도 서울 보고있다." — 시인 이 스타니슬라브 (Lee Stanislav)',
        desc: '연해주 의병과 독립전쟁에 헌신한 최재형·한창걸 부대·이종국 선생의 숭고한 정신, 그리고 1937년 가을 블라디보스토크에서 카자흐스탄 우슈토베(Үштөбе)까지 6,500 km 시베리아 철길(조선에서 약 8,000 km)을 따라 강제이주 당해 토굴에서 혹한을 견뎌낸 17만여 고려인의 아픔과 후손 시인 이 스타니슬라브의 시를 3D 기념우표 코드 아트로 영구 기록합니다.',
        impactNote: '판매 수익금 및 크리에이터 로열티(10%) 전액(100%)을 굿네이버스 고려인 지원 캠페인에 투명하게 기증합니다.',
        controlsNote: '[1][2][3] 또는 스와이프: 악장 전환 · [S] 3D 우표 모드 · [Space]/클릭: 추모 등불 · [M] 사운드',
        detail1: 'Base OpenSea 민팅: 0.0019 ETH · 100 에디션 · 10% 로열티 전액 기부',
        detail2: 'Tezos Objkt 연동: KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/43',
        openseaBtn: 'OpenSea 민팅 (0.0019 ETH)',
        goodNeighborsBtn: '굿네이버스 캠페인',
        objktBtn: 'Tezos Objkt (#43)',
        ipfsBtn: 'WEBC IPFS 원본'
      },
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
    walletAction: {
      addTokenBtn: '메타마스크에 $WR 토큰 & 로고 등록하기',
      addingToken: '메타마스크 승인 대기 중...',
      tokenAddedSuccess: '✅ 메타마스크에 $WR 토큰과 공식 로고가 성공적으로 등록되었습니다!',
      contractCopied: '컨트랙트 주소가 복사되었습니다.'
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
      gallery: 'Masterpieces',
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
      description: 'WRISTORY archives timeless human literature, independence heritage, and cryptographic milestones into on-chain generative fine art across Base and Tezos.',
      exploreMasterpieces: 'Explore Masterpieces',
      viewOpenSea: 'Do Not Cry, Homeland (OpenSea)',
      swapUniswap: 'Uniswap v4 Pool'
    },
    metrics: {
      chains: 'Dual Mainnets',
      chainsVal: 'Base L2 × Tezos',
      masterpieces: 'Curated Works',
      masterpiecesVal: '3 Heritage Icons',
      curation: 'Artform',
      curationVal: 'Generative Fine Art',
      storage: 'Decentralized Storage',
      storageVal: 'Permanent IPFS'
    },
    dualSection: {
      badge: 'WRISTORY CURATED DUAL-CHAIN MASTERPIECES',
      title: 'Curated Dual-Chain Masterpieces',
      subtitle: 'Experience our dual-chain public-good tribute "Do Not Cry, Homeland" alongside Korean literature on Base and Bitcoin history on Tezos.',
      baseChain: 'BASE MAINNET',
      tezosChain: 'TEZOS MAINNET'
    },
    artworks: {
      homeland: {
        title: 'Do Not Cry, Homeland (조국아 울지 마라)',
        subtitle: 'Public-Good Dual-Chain Generative Art — Koryo-saram 1937 Memorial',
        chainBadge: 'Base (OpenSea · Highlight) × Tezos (Objkt)',
        quote: '"Do not cry, homeland / Even if we weep, do not weep / Hiding tears, we gaze toward our old capital Seoul." — Poet Lee Stanislav',
        desc: 'This 3D commemorative charity-seal generative artwork honors Korean independence heroes in Primorye—Choi Jae-hyung, Commander Han Chang-geol\'s armed unit, and freedom fighter Lee Jong-guk—and preserves the haunting poem "Do Not Cry, Homeland" by descendant poet Lee Stanislav, remembering over 170,000 Koryo-saram deported in autumn 1937 across 6,500 km of Siberian rail from Vladivostok to Ushtobe (Үштөбе), Kazakhstan (~8,000 km from Joseon).',
        impactNote: '100% of primary sales and creator royalties (10%) are donated directly to the Good Neighbors Koryo-saram Support Campaign.',
        controlsNote: 'Controls: [1][2][3] or swipe for Movements · [S] 3D Stamp Mode · [Space]/Click for memorial light · [M] Sound',
        detail1: 'Base OpenSea Drop: 0.0019 ETH · 100 Editions · 10% Royalty Donated',
        detail2: 'Tezos Objkt Token: KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/43',
        openseaBtn: 'Mint on OpenSea (0.0019 ETH)',
        goodNeighborsBtn: 'Good Neighbors Campaign',
        objktBtn: 'Tezos Objkt (#43)',
        ipfsBtn: 'WEBC IPFS Master'
      },
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
    walletAction: {
      addTokenBtn: 'Add $WR & Logo to MetaMask',
      addingToken: 'Confirming in MetaMask...',
      tokenAddedSuccess: '✅ $WR Token & official logo registered in MetaMask!',
      contractCopied: 'Contract address copied.'
    },
    footer: {
      mission: 'Preserving human cultural & cryptographic heritage through decentralized blockchain technology.',
      copyright: '© 2026 YesOkLab | WRISTORY Project. All Rights Reserved.',
      channels: 'Official Channels'
    }
  }
};
