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
    hunmin: {
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
    ahn: {
      title: string;
      subtitle: string;
      chainBadge: string;
      quote: string;
      desc: string;
      detail1: string;
      detail2: string;
      openseaBtn: string;
      objktBtn: string;
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
      tagline: '온체인 디지털 헤리티지 & 제너러티브 아카이브',
      title: 'THE BRIDGE OF TIME & HERITAGE',
      subtitle: '역사는 순수 온체인 코드 위에서 영원히 살아 숨 쉽니다.',
      description: 'WRISTORY는 한국의 독립정신·문자·문학·암호화폐 역사를 Base(ERC-721/20)와 Tezos(FA2) 온체인 아트로 기록하고, 아카이브 연재를 통해 그 뿌리를 탐구합니다.',
      exploreMasterpieces: '신규 민팅작 감상하기',
      viewOpenSea: 'Paragraph 아카이브 연재',
      swapUniswap: 'Uniswap v4 풀 확인'
    },
    metrics: {
      chains: '듀얼 메인넷',
      chainsVal: 'Base L2 × Tezos',
      masterpieces: '아카이브 작품',
      masterpiecesVal: '5대 헤리티지',
      curation: '아키텍처',
      curationVal: 'Pure On-Chain Code',
      storage: '연재 채널',
      storageVal: 'Paragraph · Blog · X'
    },
    dualSection: {
      badge: 'LATEST ON-CHAIN MINT',
      title: '신규 민팅 스포트라이트',
      subtitle: '가장 최근 온체인에 기록된 작품에 집중하고, 이전 컬렉션은 아래 아카이브 디렉터리에서 바로 연결해 감상하세요.',
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
      hunmin: {
        title: 'SOUND ALIGNMENT v2 — 훈민정음: 소리의 기하학',
        subtitle: 'Geometry of Hunminjeongeum Haerye (1446) · Interactive Archive',
        chainBadge: 'Tezos FA2 • OBJKT #45 (14 Editions)',
        quote: '"Stage 01 — Cosmic Triad (천·지·인 / ·, ㅡ, ㅣ) → 오음(ㄱ·ㄴ·ㅁ·ㅅ·ㅇ) → 음절과 시간의 엔트로피를 건너는 언어의 기하학."',
        desc: '1446년 「훈민정음 해례본」에서 영감을 받아 탄생한 인터랙티브 제너러티브 아카이브입니다. 정적 문자를 단순히 출력하지 않고, 감상자의 시선 앞에서 천·지·인 삼재(·, ㅡ, ㅣ)의 입자 수렴부터 오음 상형, 음절 진화까지 한글의 철학적·음운학적 구조를 3단계 알고리즘으로 재구성합니다.',
        detail1: '구성: 3-Stage Morphological Evolution · 14 Editions (Nov 25, 2026)',
        detail2: '아카이브: Tezos Objkt #45 (KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/45)',
        objktBtn: 'Tezos Objkt (#45) 감상하기',
        ipfsBtn: 'IPFS 마스터 (GIF)'
      },
      ahn: {
        title: '하얼빈의 메아리: 안중근 의사 (1909.10.26) — 1-Bit 픽셀아트',
        subtitle: 'Echoes of Harbin: Ahn Jung-geun · 100% Pure On-Chain 1-Bit Pixel Art',
        chainBadge: 'Base ERC-721 (#1) × Tezos Objkt (#46)',
        quote: '"대한독립의 소리가 천국에 들려오면 나는 마땅히 춤추며 만세를 부를 것이다." — 안중근 의사',
        desc: '1909년 10월 26일 하얼빈 의거와 도마 안중근 의사의 단지(斷指) 수인, 「大韓獨立」 유묵을 기리는 100% 순수 온체인 1-비트 디더링 픽셀아트입니다. 외부 이미지 의존성 없이 순수 바닐라 코드 내부에 240×320 1-비트 비트맵과 64프레임 심리스 루프(별빛·새·흩날리는 꽃잎)를 Base64로 내장했습니다.',
        detail1: '스펙: 240×320 1-Bit Bitmap · 64-Frame Loop · Zero External Dependencies',
        detail2: '체인: Base OpenSea (Token #1) × Tezos Objkt (#46 · 1.9K Eds)',
        openseaBtn: 'OpenSea (Base #1)',
        objktBtn: 'Tezos Objkt (#46)',
        ipfsBtn: 'GIF IPFS 원본'
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
      tagline: 'On-Chain Digital Heritage & Generative Archive',
      title: 'THE BRIDGE OF TIME & HERITAGE',
      subtitle: 'History breathes eternal life in pure on-chain code.',
      description: 'WRISTORY preserves Korean independence heritage, Hangul geometry, literature, and cryptographic history on Base & Tezos alongside serialized essays on Paragraph.',
      exploreMasterpieces: 'Explore Latest Mint',
      viewOpenSea: 'Paragraph Archive',
      swapUniswap: 'Uniswap v4 Pool'
    },
    metrics: {
      chains: 'Dual Mainnets',
      chainsVal: 'Base L2 × Tezos',
      masterpieces: 'Archived Works',
      masterpiecesVal: '5 Heritage Works',
      curation: 'Architecture',
      curationVal: 'Pure On-Chain Code',
      storage: 'Publication',
      storageVal: 'Paragraph · Blog · X'
    },
    dualSection: {
      badge: 'LATEST ON-CHAIN MINT',
      title: 'Featured New Mint',
      subtitle: 'Focused spotlight on our newest on-chain release, with direct archive links to all prior collections below.',
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
      hunmin: {
        title: 'SOUND ALIGNMENT v2 — Geometry of Hunminjeongeum',
        subtitle: '1446 Hunminjeongeum Haerye · Interactive Generative Archive',
        chainBadge: 'Tezos FA2 • OBJKT #45 (14 Editions)',
        quote: '"Stage 01 — Cosmic Triad (천·지·인 / ·, ㅡ, ㅣ): Scattered particles converge into the three foundational geometric primitives of Hangul."',
        desc: 'An interactive generative archive inspired by the 1446 Hunminjeongeum Haerye (훈민정음 해례본), exploring how linguistic geometry and cultural memory resist entropy across time. Rather than displaying static characters, the algorithm reconstructs the philosophical and phonetic evolution of Hangul in three progressive stages.',
        detail1: 'Evolution: Three-Stage Morphological Reconstruction · 14 Editions',
        detail2: 'Archive: Tezos Objkt #45 (KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/45)',
        objktBtn: 'View on OBJKT (#45)',
        ipfsBtn: 'IPFS Master (GIF)'
      },
      ahn: {
        title: 'Echoes of Harbin: Ahn Jung-geun (1909.10.26) — 1-Bit Pixel Art',
        subtitle: '100% Pure On-Chain 1-Bit Dithered Generative Archive',
        chainBadge: 'Base ERC-721 (#1) × Tezos Objkt (#46)',
        quote: '"When the sound of Korea\'s independence reaches Heaven, I shall dance and shout Mansei." — General Ahn Jung-geun',
        desc: 'A 100% pure on-chain, 1-bit dithered pixel art generative work commemorating General Ahn Jung-geun (Doma) and the historic October 26, 1909 Harbin righteousness. Built with zero external image dependencies: the entire 240×320 1-bit bitmap and 64-frame loop (twinkling stars, night bird, spirit glint, drifting petals) are Base64-encoded in pure vanilla code.',
        detail1: 'Spec: 240×320 1-Bit Bitmap · 64-Frame Loop · Zero External Assets',
        detail2: 'Chains: Base OpenSea (Token #1) × Tezos Objkt (#46 · 1.9K Eds)',
        openseaBtn: 'OpenSea (Base #1)',
        objktBtn: 'Tezos Objkt (#46)',
        ipfsBtn: 'GIF IPFS Master'
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
