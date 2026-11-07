import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  ExternalLink, 
  Search, 
  ShieldCheck, 
  ArrowUpRight, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Layers, 
  Info, 
  Cpu, 
  Copy, 
  Check,
  Globe
} from 'lucide-react';

export interface CryptoMatrixItem {
  symbol: string;
  nameKo: string;
  nameEn: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  tierLabelKo: string;
  tierLabelEn: string;
  cftcStatusKo: string;
  cftcStatusEn: string;
  cftcExchanges: string;
  isCftcListed: boolean;
  cmeStatusKo: string;
  cmeStatusEn: string;
  etfStatusKo: string;
  etfStatusEn: string;
  custodianStatusKo: string;
  custodianStatusEn: string;
  survivalScore: number;
  highlightNoteKo: string;
  highlightNoteEn: string;
}

export const matrixData: CryptoMatrixItem[] = [
  {
    symbol: 'BTC',
    nameKo: '비트코인',
    nameEn: 'Bitcoin',
    tier: 'Tier 1',
    tierLabelKo: '완전 제도권',
    tierLabelEn: 'Fully Regulated',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'CME, Coinbase Derivatives, Bitnomial',
    isCftcListed: true,
    cmeStatusKo: '상장 거래 중',
    cmeStatusEn: 'Active Trading',
    etfStatusKo: '승인 및 거래 중 (현물 ETF)',
    etfStatusEn: 'Approved & Active (Spot ETF)',
    custodianStatusKo: '적격 금융상품 인정',
    custodianStatusEn: 'Qualified Financial Asset',
    survivalScore: 100,
    highlightNoteKo: '바젤 암호화폐 최고 등급 적격 담보 자산. 미 연방 대차대조표 편입 기준 표준.',
    highlightNoteEn: 'Basel Group 1/2 qualifying collateral standard. Benchmark for institutional balance sheets.'
  },
  {
    symbol: 'ETH',
    nameKo: '이더리움',
    nameEn: 'Ethereum',
    tier: 'Tier 1',
    tierLabelKo: '완전 제도권',
    tierLabelEn: 'Fully Regulated',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'CME, Coinbase Derivatives, Bitnomial',
    isCftcListed: true,
    cmeStatusKo: '상장 거래 중',
    cmeStatusEn: 'Active Trading',
    etfStatusKo: '승인 및 거래 중 (현물 ETF)',
    etfStatusEn: 'Approved & Active (Spot ETF)',
    custodianStatusKo: '적격 금융상품 인정',
    custodianStatusEn: 'Qualified Financial Asset',
    survivalScore: 98,
    highlightNoteKo: 'PoS 스테이킹 분리 후 미 선물/현물 ETF 거래 중. Layer-2 생태계 기저 자산.',
    highlightNoteEn: 'PoS staking separated, US Spot ETF active. Base settlement asset for Layer-2 ecosystems.'
  },
  {
    symbol: 'XRP',
    nameKo: '리플',
    nameEn: 'XRP',
    tier: 'Tier 1',
    tierLabelKo: '완전 제도권',
    tierLabelEn: 'Fully Regulated',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'Bitnomial (XUS), CME (Micro Planned)',
    isCftcListed: true,
    cmeStatusKo: '마이크로 선물 상장 확정',
    cmeStatusEn: 'Micro Futures Confirmed',
    etfStatusKo: 'S-1 / 19b-4 접수 완료 (Bitwise, Canary)',
    etfStatusEn: 'S-1 / 19b-4 Filed (Bitwise, Canary)',
    custodianStatusKo: '적격 금융상품 인정',
    custodianStatusEn: 'Qualified Financial Asset',
    survivalScore: 95,
    highlightNoteKo: 'CFTC 승인 Bitnomial 단독 선물 상장 성공. SEC 소송 최종 종결 및 제도권 은행 송금 자산 입지.',
    highlightNoteEn: 'Bitnomial stand-alone CFTC futures approval. SEC litigation closed, inter-bank remittance standard.'
  },
  {
    symbol: 'SOL',
    nameKo: '솔라나',
    nameEn: 'Solana',
    tier: 'Tier 1',
    tierLabelKo: '완전 제도권',
    tierLabelEn: 'Fully Regulated',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'CME (Micro), Coinbase, Bitnomial',
    isCftcListed: true,
    cmeStatusKo: '마이크로 선물 상장',
    cmeStatusEn: 'Micro Futures Active',
    etfStatusKo: 'S-1 / 19b-4 접수 완료 (VanEck, 21Shares)',
    etfStatusEn: 'S-1 / 19b-4 Filed (VanEck, 21Shares)',
    custodianStatusKo: '적격 금융상품 인정',
    custodianStatusEn: 'Qualified Financial Asset',
    survivalScore: 94,
    highlightNoteKo: '초고속 거래 처리 기반 기관 파생상품 및 미국 현물 ETF 승인 최우선 후보군.',
    highlightNoteEn: 'High-throughput institutional derivatives and top candidate for next US spot ETF approvals.'
  },
  {
    symbol: 'ADA',
    nameKo: '카르다노',
    nameEn: 'Cardano',
    tier: 'Tier 2',
    tierLabelKo: '파생 등재·ETF 대기',
    tierLabelEn: 'DCM Listed / ETF Pending',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'Bitnomial, Kalshi, Coinbase',
    isCftcListed: true,
    cmeStatusKo: 'Reference Rate 산출',
    cmeStatusEn: 'Reference Rate Active',
    etfStatusKo: '신청 준비 중',
    etfStatusEn: 'Filing in Prep',
    custodianStatusKo: '기관 담보 제한적 허용',
    custodianStatusEn: 'Limited Collateral Eligible',
    survivalScore: 88,
    highlightNoteKo: 'CFTC DCM 선물 상장 완료로 Howey Test 증권성 시비 차단. 연방 파생상품 지위 획득.',
    highlightNoteEn: 'Federal DCM futures listing preempts Howey Test challenges, establishing commodity status.'
  },
  {
    symbol: 'AVAX',
    nameKo: '아발란체',
    nameEn: 'Avalanche',
    tier: 'Tier 2',
    tierLabelKo: '파생 등재·ETF 대기',
    tierLabelEn: 'DCM Listed / ETF Pending',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'Coinbase Derivatives, Kalshi',
    isCftcListed: true,
    cmeStatusKo: 'Reference Rate 산출',
    cmeStatusEn: 'Reference Rate Active',
    etfStatusKo: '신청 준비 중',
    etfStatusEn: 'Filing in Prep',
    custodianStatusKo: '기관 담보 제한적 허용',
    custodianStatusEn: 'Limited Collateral Eligible',
    survivalScore: 85,
    highlightNoteKo: '시티그룹, JP모건 등 글로벌 IB의 서브넷 실물자산(RWA) 토큰화 파일럿 채택.',
    highlightNoteEn: 'Adopted in Subnet RWA tokenization pilots by Citi and JPMorgan Onyx.'
  },
  {
    symbol: 'LINK',
    nameKo: '체인링크',
    nameEn: 'Chainlink',
    tier: 'Tier 2',
    tierLabelKo: '파생 등재·ETF 대기',
    tierLabelEn: 'DCM Listed / ETF Pending',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'Coinbase Derivatives, Kalshi',
    isCftcListed: true,
    cmeStatusKo: 'Reference Rate 산출',
    cmeStatusEn: 'Reference Rate Active',
    etfStatusKo: '신청 준비 중',
    etfStatusEn: 'Filing in Prep',
    custodianStatusKo: '기관 담보 제한적 허용',
    custodianStatusEn: 'Limited Collateral Eligible',
    survivalScore: 87,
    highlightNoteKo: 'CCIP(크로스체인 상호운용성) 및 DTCC·스위프트(SWIFT) 금융 인프라 표준 오라클.',
    highlightNoteEn: 'Global financial standard oracle (CCIP) partnered with DTCC and SWIFT.'
  },
  {
    symbol: 'DOGE',
    nameKo: '도지코인',
    nameEn: 'Dogecoin',
    tier: 'Tier 2',
    tierLabelKo: '파생 등재·ETF 대기',
    tierLabelEn: 'DCM Listed / ETF Pending',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'Coinbase Derivatives',
    isCftcListed: true,
    cmeStatusKo: '미상장',
    cmeStatusEn: 'Not Listed',
    etfStatusKo: '신청 준비 중',
    etfStatusEn: 'Filing in Prep',
    custodianStatusKo: '기관 담보 제한적 허용',
    custodianStatusEn: 'Limited Collateral Eligible',
    survivalScore: 82,
    highlightNoteKo: '코인베이스 파생거래소 자기인증(Part 40.2) 통과로 미 연방 합법 파생상품 지위 확보.',
    highlightNoteEn: 'Self-certified under CFTC Part 40.2 via Coinbase Derivatives, securing commodity legality.'
  },
  {
    symbol: 'BCH',
    nameKo: '비트코인 캐시',
    nameEn: 'Bitcoin Cash',
    tier: 'Tier 2',
    tierLabelKo: '파생 등재·ETF 대기',
    tierLabelEn: 'DCM Listed / ETF Pending',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'Coinbase Derivatives, EDX Markets',
    isCftcListed: true,
    cmeStatusKo: 'CME 선물',
    cmeStatusEn: 'CME Futures',
    etfStatusKo: '검토 중',
    etfStatusEn: 'Under Review',
    custodianStatusKo: '기관 거래 지원',
    custodianStatusEn: 'Institutional Trading Allowed',
    survivalScore: 80,
    highlightNoteKo: '월가 연합 거래소(EDX Markets) 출범 당시 승인된 4대 자산 중 하나로 비증권성 확보.',
    highlightNoteEn: 'One of the 4 original EDX Markets assets backed by Fidelity and Citadel Securities.'
  },
  {
    symbol: 'SHIB',
    nameKo: '시바이누',
    nameEn: 'Shiba Inu',
    tier: 'Tier 2',
    tierLabelKo: '파생 등재·ETF 대기',
    tierLabelEn: 'DCM Listed / ETF Pending',
    cftcStatusKo: '상장 완료',
    cftcStatusEn: 'Listed (CFTC DCM)',
    cftcExchanges: 'Coinbase Derivatives (10k SHIB)',
    isCftcListed: true,
    cmeStatusKo: '미상장',
    cmeStatusEn: 'Not Listed',
    etfStatusKo: '미정',
    etfStatusEn: 'TBD',
    custodianStatusKo: '제한적 거래',
    custodianStatusEn: 'Restricted Trading',
    survivalScore: 78,
    highlightNoteKo: '코인베이스를 통한 미 규제 선물 진입으로 단순 밈코인을 넘어 연방 파생상품 자산화.',
    highlightNoteEn: 'Federal derivative assetization via Coinbase Derivatives 10,000 SHIB contract.'
  },
  {
    symbol: 'LONG-TAIL',
    nameKo: '비제도권 롱테일 알트',
    nameEn: 'Unregulated Long-tail Altcoins',
    tier: 'Tier 3',
    tierLabelKo: '리스크·미등재군',
    tierLabelEn: 'High Risk / Unlisted',
    cftcStatusKo: '미상장',
    cftcStatusEn: 'Unlisted (No DCM filing)',
    cftcExchanges: 'DCM 등록 내역 없음 / None',
    isCftcListed: false,
    cmeStatusKo: '미상장',
    cmeStatusEn: 'Not Listed',
    etfStatusKo: '신청 불가',
    etfStatusEn: 'Ineligible for ETF',
    custodianStatusKo: '장부 외(Off-balance) 위험자산 분류',
    custodianStatusEn: 'Off-balance sheet high-risk tier',
    survivalScore: 35,
    highlightNoteKo: '클래리티 법안 지연 시 SEC 기획 소송 및 거래소 상폐 리스크 노출. 기관 장부 계상 불가능.',
    highlightNoteEn: 'Exposed to SEC enforcement and exchange delistings without statutory clarity.'
  }
];

const agendasKo = [
  {
    id: 'agenda-1',
    number: 'Agenda 01',
    category: '정치·입법 분석',
    title: '"하원 일정이 사라졌다"는 말의 엄중한 의미',
    subtitle: '선거철 워싱턴 캘린더 단축과 클래리티(CLARITY) 법안의 입법 절벽',
    blogUrl: 'https://blog.naver.com/yesoklab/224405334699',
    summary: '미국 연방 하원 지도부가 9월 회기 중 8일간의 본회의 표결 일정을 전격 취소했습니다. 노동절 휴회 이후 하원이 법안을 처리할 수 있는 시간은 단 4일에 불과하며, 10월 전체가 선거 휴회(Recess)로 비워져 있어 2026년 정기 의회의 실질적 종료(입법 절벽)를 의미합니다.',
    keyPoints: [
      '단 4일의 본회의: 9월 실질 가용 표결 일수가 증발하여 상원의 FIT21/클래리티 법안 논의가 물리적으로 차단됨',
      '선거철 의원들의 이탈: 11월 중간선거 재선 캠페인을 위해 워싱턴을 떠나 지역구로 분산',
      '제2의 절벽: 차기 의회 출범 전까지 정치권이 열어주는 포괄적 규제 명확성(정문)은 공식적으로 닫힘'
    ]
  },
  {
    id: 'agenda-2',
    number: 'Agenda 02',
    category: '규제 우회 메커니즘',
    title: '"정문이 막히자 선물시장이라는 옆문을 열었다"의 역학',
    subtitle: '의회 입법 대신 CFTC 규정 Part 40.2(자기인증)를 통한 제도권 진입',
    blogUrl: 'https://blog.naver.com/yesoklab/224405538510',
    summary: '의회의 법률 제정이 멈췄지만 자본과 거래소들은 멈추지 않았습니다. 상품선물거래위원회(CFTC) 관할 공인 지정계약시장(DCM)의 강력한 권한인 CFTC 규정 Part 40.2 "자기인증(Self-Certification)"을 통해 알트코인들이 연방 선물시장에 깃발을 꽂았습니다.',
    keyPoints: [
      'CFTC Part 40.2 자기인증: 당국의 사전 승인 없이 통보 후 단 1영업일 만에 선물 상장이 가능한 제도적 옆문',
      '4대 거래소의 공조: 비트노미얼(Bitnomial), 칼시(Kalshi), 코인베이스 파생상품, CME의 단계적 알트 확장',
      'SEC 관할권 무력화: 연방 선물 상품으로 등재되는 순간 자산은 "상품(Commodity)" 지위를 확립하여 증권성 시비 원천 차단'
    ]
  },
  {
    id: 'agenda-3',
    number: 'Agenda 03',
    category: '정치 자본 & 파생 확장',
    title: '"비트를 넘어 영토를 넓히는 파생시장"과 슈퍼팩(Super PAC)',
    subtitle: 'Fairshake의 2억 6천만 달러 실탄이 바꾼 워싱턴 지형과 알트 파생 포괄',
    blogUrl: 'https://blog.naver.com/yesoklab/224405538510',
    summary: '정치권이 암호화폐 선물시장의 문을 열어두는 배경에는 미국 역사상 최대 규모의 단일 산업 슈퍼팩인 페어셰이크(Fairshake)의 2억 6,000만 달러(약 3,500억 원) 정치 자본이 있습니다. 규제 당국과의 소송 대신 합법적 선거 자금으로 규제 지형을 재편했습니다.',
    keyPoints: [
      '초당적 정치 파워: 양당의 핵심 상·하원 의원 경선에 막대한 자금을 투입하여 친크립토 진영 구축',
      'XRP·SOL·ADA의 진격: 비트코인/이더리움 독점에서 알트코인 전반으로 DCM 파생 영토 급팽창',
      '선물 거래 6개월 법칙: 선물 시장에 등재된 코인은 향후 현물 ETF 승인으로 직행하는 필수 트랙 확보'
    ]
  },
  {
    id: 'agenda-4',
    number: 'Agenda 04',
    category: '기관 자산 & 대차대조표',
    title: '장부에 오른 코인만 살아남는다: 2026 기관 자산 생존 매트릭스',
    subtitle: '바젤 암호자산 규정·SEC 15c3-1·적격 수탁기관 요건과 알트 양극화',
    blogUrl: 'https://blog.naver.com/yesoklab/224406451272',
    summary: '개인은 어떤 코인이든 지갑에 담을 수 있지만, 기관은 "장부(Balance Sheet)"에 계상할 수 있는 자산만 매입합니다. 규제된 DCM 선물과 ETF로 패키징되지 못한 코인은 100% 자본 차감(Haircut)되어 기관 투자가 원천 차단됩니다.',
    keyPoints: [
      '바젤 은행감독위원회(BCBS) 규정: 암호자산 위험가중치(Risk Weight) 1250% 징벌적 페널티 회피 조건',
      'SEC 15c3-1(브로커-딜러 순자본 규정): 규제 거래소 헷징이 불가능한 토큰은 순자본에서 100% 감액',
      '적격 수탁기관(Qualified Custodian): 도난 및 법적 리스크 없는 수탁이 가능한 자산만 생존'
    ]
  },
  {
    id: 'agenda-5',
    number: 'Agenda 05',
    category: 'WRISTORY & Web3 설계',
    title: 'WRISTORY의 탈중앙 아키텍처와 제도권 공존 방정식',
    subtitle: 'Uniswap v4 집중 유동성 자율성과 Howey Test 배제형 분산 프로토콜',
    blogUrl: 'https://github.com/yesoklab/Research-Clarity-Act',
    summary: 'WRISTORY는 $WR 토큰의 탈중앙 집중 유동성(Uniswap v4)과 제너러티브 아트 아카이브(Base 메인넷)를 통해, 인위적 가격 조작 및 중앙집중적 증권성 요소를 사전에 배제한 무허가형(Permissionless) 컴플라이언스 표준을 실증합니다.',
    keyPoints: [
      '투자계약 부존재: 창작자와 커뮤니티 간 직접 1:1 스마트 컨트랙트 매핑 및 영구 자산화',
      '완전 온체인 오라클 투명성: GeckoTerminal 및 Base 스캔을 통한 100% 실시간 데이터 공개',
      '글로벌 기관 파트너십 대비: 향후 규제 프레임워크와의 상호운용성을 지원하는 오픈소스 리서치'
    ]
  }
];

const agendasEn = [
  {
    id: 'agenda-1',
    number: 'Agenda 01',
    category: 'Political & Legislative Analysis',
    title: 'The Grave Significance of "The House Schedule Has Vanished"',
    subtitle: 'Election-Year Washington Calendar Shrinkage & the CLARITY Act Cliff',
    blogUrl: 'https://blog.naver.com/yesoklab/224405334699',
    summary: 'The U.S. House leadership abruptly eliminated 8 floor voting days in September. With October entirely clear for election campaigning, Congress has only 4 actual voting days left, effectively shutting the door on statutory crypto clarity (FIT21 / CLARITY Act) until 2027.',
    keyPoints: [
      'Only 4 Working Floor Days: Sept legislative calendar evaporates, making bicameral reconciliation physically impossible.',
      'Campaign Trail Exits: Lawmakers head to home districts for reelection, suspending contentious financial regulatory votes.',
      'The Legislative Cliff: Formal statutory "Front Door" clarity is sealed shut for the remainder of the 119th Congress.'
    ]
  },
  {
    id: 'agenda-2',
    number: 'Agenda 02',
    category: 'Regulatory Bypass Mechanism',
    title: 'Opening the "Futures Side Door" When the Front Door Locked',
    subtitle: 'Entering Institutional Finance via CFTC Regulation Part 40.2 Self-Certification',
    blogUrl: 'https://blog.naver.com/yesoklab/224405538510',
    summary: 'While Congress stalled, major exchanges and capital forged an alternate highway: CFTC Regulation Part 40.2 (Self-Certification). Designated Contract Markets (DCMs) can list derivatives within 1 business day without prior regulatory approval.',
    keyPoints: [
      'CFTC Part 40.2 Self-Certification: Expedited filing granting federal commodity status in 1 business day.',
      'Consortium of 4 Exchanges: Bitnomial, Kalshi, Coinbase Derivatives, and CME expanding altcoin derivatives.',
      'Preempting the SEC: Once listed on a federal DCM, the underlying asset secures Commodity jurisdiction, curbing Howey lawsuits.'
    ]
  },
  {
    id: 'agenda-3',
    number: 'Agenda 03',
    category: 'Political Capital & Derivatives Expansion',
    title: 'The Expanding Derivative Frontier & Fairshake Super PAC',
    subtitle: 'How $260M in Political Capital Altered Washington Calculus for Altcoins',
    blogUrl: 'https://blog.naver.com/yesoklab/224405538510',
    summary: 'The largest single-industry political action committee in U.S. history, Fairshake, deployed over $260M to reshape Capitol Hill. Instead of prolonged court battles, bipartisan campaign backing created a protective umbrella for altcoin futures.',
    keyPoints: [
      'Bipartisan Muscle: Significant funding in key Senate/House primaries to cement a pro-crypto legislative majority.',
      'Advance of XRP, SOL, ADA: CME Micro and Bitnomial contracts expand the federal perimeter beyond BTC and ETH.',
      'The 6-Month Rule: Active federal futures trading establishes the mandatory Surveillance Sharing Agreement (SSA) for Spot ETFs.'
    ]
  },
  {
    id: 'agenda-4',
    number: 'Agenda 04',
    category: 'Institutional Balance Sheets',
    title: 'Only Tokens on the Balance Sheet Survive: 2026 Institutional Matrix',
    subtitle: 'Basel Crypto Asset Rules, SEC 15c3-1 Net Capital, & Qualified Custodian Mandates',
    blogUrl: 'https://medium.com/@wakk5252/research-briefing-only-tokens-on-the-balance-sheet-will-survive-the-2026-institutional-crypto-0f46b08d1489',
    summary: 'Retail investors can buy any token on DEXs, but institutions can only touch assets bookable on a regulated Balance Sheet. Tokens lacking DCM futures or ETF packaging face 100% haircuts and 1250% punitive Basel risk weights.',
    keyPoints: [
      'Basel Committee (BCBS): Strict criteria required to escape the 1250% punitive risk-weight capital deduction.',
      'SEC Rule 15c3-1: Broker-dealers must apply 100% haircuts to tokens that cannot be hedged on regulated exchanges.',
      'Qualified Custodians: Stringent institutional segregation requirements filter out long-tail unregulated tokens.'
    ]
  },
  {
    id: 'agenda-5',
    number: 'Agenda 05',
    category: 'WRISTORY Protocol Architecture',
    title: 'WRISTORY Decentralized Architecture & Regulatory Coexistence',
    subtitle: 'Uniswap v4 Concentrated Liquidity Autonomy & Non-Securitized Protocol Design',
    blogUrl: 'https://github.com/yesoklab/Research-Clarity-Act',
    summary: 'WRISTORY enforces compliance by design: using Uniswap v4 concentrated liquidity pools and Base mainnet generative art provenance to eliminate centralized price manipulation and Howey investment contract elements.',
    keyPoints: [
      'Absence of Investment Contract: Direct 1:1 onchain generative art smart contract ownership and provenance.',
      'Full Onchain Transparency: Real-time price and liquidity telemetry via GeckoTerminal and BaseScan.',
      'Institutional Readiness: Open research architecture prepared for interoperable regulatory compliance frameworks.'
    ]
  }
];

interface Props {
  lang?: 'ko' | 'en';
  initialSubTab?: 'OVERVIEW' | 'MATRIX' | 'DIAGRAM';
}

export const RegulatoryResearchView: React.FC<Props> = ({ 
  lang: initialLang = 'ko',
  initialSubTab = 'OVERVIEW'
}) => {
  const [currentLang, setCurrentLang] = useState<'ko' | 'en'>(initialLang);
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'MATRIX' | 'DIAGRAM'>(initialSubTab);
  const [selectedAgenda, setSelectedAgenda] = useState<string>('agenda-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tierFilter, setTierFilter] = useState<'ALL' | 'Tier 1' | 'Tier 2' | 'Tier 3'>('ALL');
  const [onlyCftcListed, setOnlyCftcListed] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const MEDIUM_ARTICLE_URL = 'https://medium.com/@wakk5252/research-briefing-only-tokens-on-the-balance-sheet-will-survive-the-2026-institutional-crypto-0f46b08d1489';

  // Synchronize language and sub-tab if prop updates
  useEffect(() => {
    if (initialLang) setCurrentLang(initialLang);
  }, [initialLang]);

  useEffect(() => {
    if (initialSubTab) setActiveTab(initialSubTab);
  }, [initialSubTab]);

  const isKo = currentLang === 'ko';
  const agendas = isKo ? agendasKo : agendasEn;
  const activeAgendaData = agendas.find(a => a.id === selectedAgenda) || agendas[0];

  const filteredMatrix = matrixData.filter(item => {
    const matchesSearch = 
      item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameKo.includes(searchQuery) ||
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTier = tierFilter === 'ALL' || item.tier === tierFilter;
    const matchesCftc = !onlyCftcListed || item.isCftcListed;

    return matchesSearch && matchesTier && matchesCftc;
  });

  const handleCopyShare = () => {
    const shareUrl = `${window.location.origin}/?tab=research&sub=${activeTab.toLowerCase()}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div id="research-terminal" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Top Header Card */}
      <div className="bg-[#0A0D18] border border-blue-900/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-black">
                YOK YesOkLab
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-bold">
                Financial Engineering & Regulatory Intelligence
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {isKo ? '2026.09 정기 리서치 브리핑' : 'Sept 2026 Regulatory Intelligence'}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-bold flex items-center gap-1">
                <ShieldCheck size={12} /> {isKo ? 'DCM & CFTC 규제 분석' : 'DCM & CFTC Framework'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {isKo 
                ? 'YesOkLab CTO 긴급 리서치 브리핑: 크립토 규제 절벽과 파생시장 옆문의 역학' 
                : 'YesOkLab CTO Intelligence Briefing: The Regulatory Cliff & The Derivatives Side Door'}
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-4xl leading-relaxed">
              {isKo
                ? '미 의회 하원 일정 실종(CLARITY 법안 표류), 슈퍼팩(Fairshake)의 막강한 정치 자본, 그리고 4대 거래소(비트노미얼·칼시·코인베이스·CME)의 알트 파생 영토 확장과 2026 기관 자산 생존 매트릭스'
                : 'Congressional Calendar Collapse (CLARITY Act Stalled), Fairshake Super PAC Capital, and the 4-Exchange DCM Derivatives Expansion (Bitnomial, Kalshi, Coinbase, CME).'}
            </p>
          </div>

          {/* Right Action Bar & Language Switcher */}
          <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center gap-2 shrink-0">
            {/* Language Toggle Button */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-700/80 p-1 rounded-xl">
              <button
                onClick={() => setCurrentLang('ko')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all flex items-center gap-1 ${
                  isKo ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>한국어</span>
              </button>
              <button
                onClick={() => setCurrentLang('en')}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all flex items-center gap-1 ${
                  !isKo ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe size={12} />
                <span>English</span>
              </button>
            </div>

            {/* Medium Article Link Button */}
            <a
              href={MEDIUM_ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-600/20 active:scale-95"
              title="Medium Global Research Briefing"
            >
              <BookOpen size={14} className="text-yellow-200" />
              <span>{isKo ? 'Medium 영문 리포트 원문' : 'Medium Research Article'}</span>
              <ExternalLink size={12} />
            </a>

            <button
              onClick={handleCopyShare}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedLink ? (isKo ? '링크 복사됨' : 'Link Copied') : (isKo ? '터미널 다이렉트 링크' : 'Share Direct Link')}</span>
            </button>
            <a
              href="https://github.com/yesoklab/Research-Clarity-Act"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>{isKo ? 'GitHub 아카이브' : 'GitHub Archive'}</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* CTO Core Proposition Banner */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 bg-blue-950/20 -mx-6 -mb-6 p-6 rounded-b-3xl">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-300 rounded-xl shrink-0 mt-0.5">
              <Sparkles size={18} />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-black text-amber-300 tracking-wider uppercase">
                {isKo ? '[CTO 핵심 명제 / Core Proposition]' : '[CTO CORE PROPOSITION]'}
              </p>
              <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                {isKo ? (
                  <>
                    "포괄적 입법(정문)이 워싱턴 선거 정치에 막히자, 자본과 거래소들은 <strong>CFTC DCM 선물 자기인증(옆문)</strong>과 슈퍼팩 정치력을 통해 알트코인을 제도권 대차대조표에 올리는 생존 전략을 완성했다."
                  </>
                ) : (
                  <>
                    "When comprehensive statutory clarity (the Front Door) was blocked by election politics, capital and exchanges utilized <strong>CFTC DCM Futures Self-Certification (the Side Door)</strong> and super PAC capital to book altcoins onto institutional balance sheets."
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('OVERVIEW')}
          className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
            activeTab === 'OVERVIEW'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <BookOpen size={15} />
          <span>{isKo ? 'CTO 총괄 리서치 (5대 아젠다)' : 'CTO Executive Briefing (5 Agendas)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('MATRIX')}
          className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
            activeTab === 'MATRIX'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Layers size={15} />
          <span>{isKo ? '장부 등재 코인 매트릭스 (생존 지수)' : 'Institutional Balance Sheet Matrix'}</span>
          <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-mono">11 Assets</span>
        </button>

        <button
          onClick={() => setActiveTab('DIAGRAM')}
          className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2 ${
            activeTab === 'DIAGRAM'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Cpu size={15} />
          <span>{isKo ? '정문 vs 옆문 메커니즘 다이어그램' : 'Front Door vs Side Door Flow'}</span>
        </button>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="https://blog.naver.com/yesoklab/224406451272"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            <span>{isKo ? '공식블로그 연재 데스크' : 'Naver Research Blog Series'}</span>
            <span className="px-1.5 py-0.2 bg-emerald-500 text-black text-[9px] font-black rounded">{isKo ? '3부작 완성' : 'Part 1-3 Complete'}</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* TAB 1: OVERVIEW (5 STRATEGIC AGENDAS) */}
      {activeTab === 'OVERVIEW' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">STRATEGIC AGENDAS</p>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {isKo ? 'CTO 요청 5대 규제 역학 심층 분석' : '5 Core Strategic Agendas on Regulatory Dynamics'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              {isKo ? '좌측 탭을 선택하여 세부 법률·정치·시장 매커니즘을 확인하세요.' : 'Select an agenda on the left to inspect detailed legal and institutional mechanics.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Agenda List Selector (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              {agendas.map(agenda => {
                const isSelected = selectedAgenda === agenda.id;
                return (
                  <button
                    key={agenda.id}
                    onClick={() => setSelectedAgenda(agenda.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all space-y-2 ${
                      isSelected
                        ? 'bg-blue-950/40 border-blue-500 text-white shadow-lg shadow-blue-950/50'
                        : 'bg-slate-950/70 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {agenda.number}
                      </span>
                      <span className="text-[11px] text-slate-400">{agenda.category}</span>
                    </div>
                    <p className="text-sm font-bold leading-snug line-clamp-2">
                      {agenda.title}
                    </p>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {agenda.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Reading Panel (7 Cols) */}
            <div className="lg:col-span-7 bg-[#0B0F1D] border border-blue-900/30 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-400">{activeAgendaData.number} · {activeAgendaData.category}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mt-1">
                    {activeAgendaData.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{activeAgendaData.subtitle}</p>
                </div>
                <a
                  href={activeAgendaData.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow"
                >
                  <span>{isKo ? '블로그 원문 칼럼 읽기' : 'Read Full Column'}</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Core Insight Callout */}
              <div className="bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-2xl space-y-1">
                <p className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                  <Info size={14} /> {isKo ? '핵심 요약 및 제도적 통찰' : 'Core Summary & Institutional Insight'}
                </p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {activeAgendaData.summary}
                </p>
              </div>

              {/* Key Breakdown Bullet Points */}
              <div className="space-y-3">
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  {isKo ? '세부 분석 포인트 (KEY BREAKDOWN)' : 'DETAILED BREAKDOWN POINTS'}
                </p>
                <div className="space-y-2.5">
                  {activeAgendaData.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cross-linking to Whitepaper Chapter 6 */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <span>{isKo ? '연계 백서: 6장. 제도권 규제 분석 및 클래리티 법안 연구' : 'Cross-reference: Chapter 6 of WRISTORY Whitepaper'}</span>
                <span className="text-blue-400 font-bold">YesOkLab Financial Engineering Team</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INTERACTIVE MATRIX TABLE */}
      {activeTab === 'MATRIX' && (
        <div className="space-y-6">
          <div className="bg-[#0B0F1D] border border-blue-900/30 rounded-3xl p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded text-xs font-bold">
                    {isKo ? '제도권 대차대조표 & CFTC DCM 파생상품 등재 현황' : 'Institutional Balance Sheet & CFTC DCM Status'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {isKo ? '"장부에 오른 코인만 살아남는다" 생존 매트릭스' : '"Only Tokens on the Balance Sheet Survive" Matrix'}
                </h2>
                <p className="text-xs text-slate-400 max-w-3xl">
                  {isKo
                    ? '클래리티 법안(정문)이 지연되면서, 기관 투자자의 장부(Balance Sheet)에 등재될 수 있는 CFTC 규제 DCM 선물 상장 코인과 비제도권 롱테일 알트코인 간의 양극화가 가속화되고 있습니다. 각 코인의 규제 방어막과 생존 지수를 확인하세요.'
                    : 'As statutory clarity stalls, a stark divergence emerges between tokens listed on CFTC-regulated DCM futures (bookable by institutions) and unhedged long-tail assets. Track regulatory immunity and institutional survival scores.'}
                </p>
              </div>

              {/* Summary Stats */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-center min-w-[90px]">
                  <p className="text-xs text-slate-400">{isKo ? 'DCM 등재' : 'DCM Listed'}</p>
                  <p className="text-lg font-black text-emerald-400">10 / 11</p>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-center min-w-[90px]">
                  <p className="text-xs text-slate-400">{isKo ? '평균 생존지수' : 'Avg Score'}</p>
                  <p className="text-lg font-black text-blue-400">83.5%</p>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative min-w-[240px]">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isKo ? '코인명 또는 심볼 (예: XRP, SOL)' : 'Search asset or symbol (e.g. XRP, SOL)'}
                    className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Tier Buttons */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setTierFilter('ALL')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      tierFilter === 'ALL' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isKo ? '전체' : 'All'}
                  </button>
                  <button
                    onClick={() => setTierFilter('Tier 1')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      tierFilter === 'Tier 1' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isKo ? 'Tier 1 (완전제도권)' : 'Tier 1 (Regulated)'}
                  </button>
                  <button
                    onClick={() => setTierFilter('Tier 2')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      tierFilter === 'Tier 2' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isKo ? 'Tier 2 (대기군)' : 'Tier 2 (Pending)'}
                  </button>
                  <button
                    onClick={() => setTierFilter('Tier 3')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      tierFilter === 'Tier 3' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isKo ? 'Tier 3 (리스크)' : 'Tier 3 (Risk)'}
                  </button>
                </div>
              </div>

              {/* CFTC Toggle */}
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 font-bold select-none">
                <input
                  type="checkbox"
                  checked={onlyCftcListed}
                  onChange={(e) => setOnlyCftcListed(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-0"
                />
                <span>{isKo ? 'DCM 선물 상장 코인만 보기' : 'DCM Listed Assets Only'}</span>
              </label>
            </div>
          </div>

          {/* Matrix Table */}
          <div className="bg-[#0B0F1D] border border-blue-900/30 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80 text-[11px] font-mono font-bold text-slate-400 uppercase">
                    <th className="py-3.5 px-4">{isKo ? '자산 (Asset)' : 'Asset'}</th>
                    <th className="py-3.5 px-4">{isKo ? '제도권 티어' : 'Institutional Tier'}</th>
                    <th className="py-3.5 px-4">{isKo ? 'CFTC DCM 선물' : 'CFTC DCM Status'}</th>
                    <th className="py-3.5 px-4">{isKo ? 'CME 지위' : 'CME Standing'}</th>
                    <th className="py-3.5 px-4">{isKo ? '현물 ETF 상태' : 'Spot ETF Status'}</th>
                    <th className="py-3.5 px-4">{isKo ? '기관 장부 적격성' : 'Balance Sheet Eligibility'}</th>
                    <th className="py-3.5 px-4 text-right">{isKo ? '생존 지수' : 'Survival Score'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 text-xs">
                  {filteredMatrix.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400">
                        {isKo ? '검색 조건과 일치하는 코인이 없습니다.' : 'No assets match the selected criteria.'}
                      </td>
                    </tr>
                  ) : (
                    filteredMatrix.map((item) => (
                      <tr key={item.symbol} className="hover:bg-slate-900/50 transition-colors group">
                        {/* Asset Column */}
                        <td className="py-4 px-4 font-bold text-white">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-black text-xs text-blue-400">
                              {item.symbol.substring(0, 4)}
                            </div>
                            <div>
                              <p className="text-sm font-black text-white flex items-center gap-1.5">
                                {item.symbol}
                              </p>
                              <p className="text-[11px] text-slate-400">
                                {isKo ? `${item.nameKo} (${item.nameEn})` : item.nameEn}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Tier Column */}
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                            item.tier === 'Tier 1'
                              ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                              : item.tier === 'Tier 2'
                              ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                              : 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                          }`}>
                            {item.tier} ({isKo ? item.tierLabelKo : item.tierLabelEn})
                          </span>
                        </td>

                        {/* CFTC DCM Status */}
                        <td className="py-4 px-4">
                          <div className="space-y-0.5">
                            <span className={`inline-flex items-center gap-1 text-xs font-bold ${
                              item.isCftcListed ? 'text-emerald-400' : 'text-slate-500'
                            }`}>
                              {item.isCftcListed ? <CheckCircle2 size={13} /> : <AlertCircle size={13} />}
                              {isKo ? item.cftcStatusKo : item.cftcStatusEn}
                            </span>
                            <p className="text-[11px] text-slate-400 truncate max-w-[200px]" title={item.cftcExchanges}>
                              {item.cftcExchanges}
                            </p>
                          </div>
                        </td>

                        {/* CME Status */}
                        <td className="py-4 px-4 text-slate-300">
                          <span className="font-semibold">{isKo ? item.cmeStatusKo : item.cmeStatusEn}</span>
                        </td>

                        {/* ETF Status */}
                        <td className="py-4 px-4">
                          <span className={`font-semibold ${
                            (isKo ? item.etfStatusKo : item.etfStatusEn).includes('Approved') || (isKo ? item.etfStatusKo : item.etfStatusEn).includes('승인')
                              ? 'text-emerald-400' 
                              : (isKo ? item.etfStatusKo : item.etfStatusEn).includes('Filed') || (isKo ? item.etfStatusKo : item.etfStatusEn).includes('접수') 
                              ? 'text-amber-400' 
                              : 'text-slate-400'
                          }`}>
                            {isKo ? item.etfStatusKo : item.etfStatusEn}
                          </span>
                        </td>

                        {/* Custodian / Balance Sheet */}
                        <td className="py-4 px-4 text-slate-300">
                          <span className="text-xs">{isKo ? item.custodianStatusKo : item.custodianStatusEn}</span>
                        </td>

                        {/* Survival Score Bar */}
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span className="font-mono font-black text-xs text-white">
                              {item.survivalScore}%
                            </span>
                            <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  item.survivalScore >= 90
                                    ? 'bg-emerald-400'
                                    : item.survivalScore >= 75
                                    ? 'bg-amber-400'
                                    : 'bg-rose-500'
                                }`}
                                style={{ width: `${item.survivalScore}%` }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer Insight */}
            <div className="p-4 bg-slate-950 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>{isKo ? '※ 데이터 출처: CFTC 지정계약시장(DCM) 공시, CME Group, Coinbase Derivatives, SEC EDGAR S-1 기록 종합' : '※ Sources: CFTC DCM disclosures, CME Group, Coinbase Derivatives, SEC EDGAR S-1 filings.'}</span>
              <span className="text-blue-400 font-bold">{isKo ? '생존 지수: 규제 방어력 + 유동성 + 기관 수탁 가능성 복합 평가' : 'Survival Score: Weighted index of regulatory immunity, liquidity, and custodial compliance.'}</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DIAGRAM (FRONT DOOR VS SIDE DOOR) */}
      {activeTab === 'DIAGRAM' && (
        <div className="bg-[#0B0F1D] border border-blue-900/30 rounded-3xl p-6 sm:p-8 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
              REGULATORY ARCHITECTURE COMPARISON
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {isKo ? '의회 입법(정문) vs CFTC DCM 선물 자기인증(옆문) 구조 비교' : 'Statutory Front Door vs. CFTC DCM Side Door Architecture'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-3xl">
              {isKo
                ? '2026년 워싱턴 선거 정치로 인해 의회 정문이 차단된 상황에서, 월가와 메이저 암호화폐 거래소들이 채택한 합법적 규제 우회 고속도로의 메커니즘을 분석합니다.'
                : 'With the statutory front door locked by election politics, major exchanges and institutional capital deployed CFTC Part 40.2 as a regulated express lane.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Front Door Block (Blocked) */}
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-bold text-xs border border-rose-500/40">
                  {isKo ? '정문 (Front Door): 의회 포괄 입법' : 'Front Door: Comprehensive Legislation'}
                </span>
                <span className="text-xs font-mono font-black text-rose-400">{isKo ? 'STATUS: 사실상 폐쇄 (표류)' : 'STATUS: BLOCKED / STALLED'}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-black text-white">
                  {isKo ? 'CLARITY Act / FIT21 연계 법안의 입법 절벽' : 'The CLARITY Act / FIT21 Legislative Cliff'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isKo
                    ? '하원 통과 후 상원 은행위원회(셰러드 브라운 의장)의 반대와 11월 중간선거 휴회(Recess)로 인해 물리적인 의회 회기가 종료되었습니다.'
                    : 'Despite House passage, Senate Banking resistance and the pre-election October recess physically closed the window for bicameral compromise.'}
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl space-y-2 text-xs text-slate-400 font-mono">
                <p>❌ {isKo ? '9월 하원 본회의 단 4일 가용' : 'Only 4 voting days available in September'}</p>
                <p>❌ {isKo ? '상·하원 양원 문안 조율 물리적 불가능' : 'Bicameral harmonization physically impossible'}</p>
                <p>❌ {isKo ? '선거철 암호화폐 법안 당론 합의 지연' : 'Election-year politicization halts financial votes'}</p>
                <p className="text-rose-400 font-bold">{isKo ? '결과: 2026년 말까지 연방 차원의 포괄적 비증권성 가이드라인 부재' : 'Outcome: No comprehensive federal statutory certainty through late 2026'}</p>
              </div>
            </div>

            {/* Side Door Block (Active) */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/40">
                  {isKo ? '옆문 (Side Door): CFTC Part 40.2 자기인증' : 'Side Door: CFTC Part 40.2 Self-Certification'}
                </span>
                <span className="text-xs font-mono font-black text-emerald-400">{isKo ? 'STATUS: 전면 가동 (영토 확장)' : 'STATUS: FULLY OPERATIONAL'}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-black text-white">
                  {isKo ? 'DCM 선물 상장을 통한 연방 상품(Commodity) 지위 획득' : 'Achieving Federal Commodity Status via DCM Futures'}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isKo
                    ? '상품거래법(CEA)에 따라 공인 거래소(DCM)가 "시장 조작에 취약하지 않다"고 자체 검증하여 통보하면 1영업일 만에 선물 상장이 완료됩니다.'
                    : 'Under the Commodity Exchange Act (CEA), registered DCMs self-certify compliance and list contracts within 1 business day without SEC approval.'}
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl space-y-2 text-xs text-slate-300 font-mono">
                <p>✅ {isKo ? 'CFTC Part 40.2 사전 승인 불필요 (Self-Certification)' : 'Pre-approval exempt via Part 40.2 notification'}</p>
                <p>✅ {isKo ? 'Bitnomial, CME, Kalshi, Coinbase 4대 파생망 구축' : '4-exchange liquidity grid: Bitnomial, Kalshi, Coinbase, CME'}</p>
                <p>✅ {isKo ? 'SEC의 Howey Test 증권성 시비를 원천적으로 차단' : 'Preempts SEC Howey Test claims by securing commodity status'}</p>
                <p className="text-emerald-400 font-bold">{isKo ? '결과: 선물 6개월 경과 후 SEC 현물 ETF 심사 트랙 강제 편입' : 'Outcome: Mandatory SSA eligibility for Spot ETF review after 6 months'}</p>
              </div>
            </div>
          </div>

          {/* 3 Step Pipeline Flow */}
          <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl space-y-4">
            <h4 className="text-sm font-black text-white flex items-center gap-2">
              <TrendingUp size={16} className="text-blue-400" />
              {isKo ? '알트코인의 제도권 장부 편입 3단계 파이프라인' : 'The 3-Step Institutional Balance Sheet Pipeline'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-[10px] font-mono text-blue-400 font-bold">STEP 01</span>
                <p className="font-bold text-white">{isKo ? 'CFTC DCM 선물 상장' : 'CFTC DCM Futures Listing'}</p>
                <p className="text-slate-400 text-[11px]">{isKo ? '거래소 자기인증으로 연방 규제 선물 등재 및 상품 지위 획득' : 'Self-certification establishes federal commodity standing'}</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-[10px] font-mono text-indigo-400 font-bold">STEP 02</span>
                <p className="font-bold text-white">{isKo ? 'SEC 현물 ETF 신청 (S-1 / 19b-4)' : 'SEC Spot ETF Filings (S-1 / 19b-4)'}</p>
                <p className="text-slate-400 text-[11px]">{isKo ? '선물 시장 6개월 감시 공유 협정(SSA)을 바탕으로 현물 ETF 관문 돌파' : 'Surveillance Sharing Agreement (SSA) opens the ETF review path'}</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                <span className="text-[10px] font-mono text-emerald-400 font-bold">STEP 03</span>
                <p className="font-bold text-white">{isKo ? '월가 대차대조표 계상' : 'Wall Street Balance Sheet Booking'}</p>
                <p className="text-slate-400 text-[11px]">{isKo ? '바젤 적격 담보 인정 및 연기금·헤지펀드의 합법적 자산 포트폴리오 편입' : 'Basel risk-weight relief enables sovereign & pension allocations'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegulatoryResearchView;
