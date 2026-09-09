import React, { useState } from 'react';
import { 
  FileText, 
  ArrowDownToLine, 
  BookOpen, 
  Layers, 
  Cpu, 
  Coins, 
  Compass, 
  ShieldAlert, 
  Sparkles,
  ExternalLink,
  CheckCircle2,
  ArrowRightLeft,
  TrendingUp,
  ArrowUpRight,
  Scale
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface Section {
  id: string;
  titleKo: string;
  titleEn: string;
  icon: any;
}

const WhitepaperView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [lang, setLang] = useState<'ko' | 'en'>('ko');

  const BASE_CONTRACT = '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7';
  const TEZOS_CONTRACT = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const UNISWAP_V4_POSITION_URL = 'https://app.uniswap.org/positions/v4/base/2953119';
  const UNISWAP_SWAP_URL = 'https://app.uniswap.org/swap?outputCurrency=0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7&chain=base';
  const GECKOTERMINAL_URL = 'https://www.geckoterminal.com/ko/base/pools/0x637667a6d1aba931cb2c827645a5c5ee0af58a86df1c8bd28a467020a74b933a';
  const GITHUB_CLARITY_RESEARCH_URL = 'https://github.com/yesoklab/Research-Clarity-Act';
  const BLOG_CLARITY_ACT_1_URL = 'https://blog.naver.com/yesoklab/224405334699';
  const BLOG_CLARITY_ACT_2_URL = 'https://blog.naver.com/yesoklab/224405538510';
  const BLOG_CLARITY_ACT_3_URL = 'https://blog.naver.com/yesoklab/224406451272';

  const sections: Section[] = [
    { id: 'intro', titleKo: '1. 서론 및 비전', titleEn: '1. Vision & Intro', icon: BookOpen },
    { id: 'specs', titleKo: '2. 토큰 명세 (Base & Tezos)', titleEn: '2. Token Specs', icon: Cpu },
    { id: 'tokenomics', titleKo: '3. 토크노믹스 & 유니스왑 v4', titleEn: '3. Tokenomics & Uniswap v4', icon: Coins },
    { id: 'utility', titleKo: '4. 토큰 유틸리티', titleEn: '4. Token Utility', icon: Layers },
    { id: 'roadmap', titleKo: '5. 프로젝트 로드맵 (Base 확장)', titleEn: '5. Roadmap', icon: Compass },
    { id: 'compliance', titleKo: '6. 제도권 규제 분석 (Clarity Act)', titleEn: '6. Regulatory & Clarity Act', icon: Scale },
    { id: 'disclaimer', titleKo: '7. 법적 책임 고지', titleEn: '7. Legal Disclaimer', icon: ShieldAlert },
  ];

  const distributionData = [
    { name: lang === 'ko' ? '커뮤니티 및 생태계' : 'Community & Ecosystem', value: 15350744, color: '#3b82f6', percent: '30%' },
    { name: lang === 'ko' ? '유니스왑 v4 / 유동성 풀' : 'Uniswap v4 / Liquidity Pool', value: 10233829, color: '#10b981', percent: '20%' },
    { name: lang === 'ko' ? '생태계 재단 예비비' : 'Treasury Reserve', value: 10233829, color: '#f59e0b', percent: '20%' },
    { name: lang === 'ko' ? '핵심 개발 및 인프라' : 'Core Development', value: 7675372, color: '#8b5cf6', percent: '15%' },
    { name: lang === 'ko' ? '기존 홀더 에어드랍 & 마이그레이션' : 'Holders & Migration', value: 5116914, color: '#ec4899', percent: '10%' },
    { name: lang === 'ko' ? '전략적 고문 및 파트너' : 'Advisors & Partners', value: 2558457, color: '#64748b', percent: '5%' },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/WHITEPAPER.md';
    link.download = 'WRISTORY_Whitepaper_v2.0_Base.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-in fade-in duration-700">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-blue-900/40 via-indigo-950 to-slate-950 border border-blue-500/20 p-8 md:p-12 rounded-[3.5rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
            <FileText size={14} className="animate-pulse" /> Official Whitepaper v2.0 (Base Edition)
          </div>
          <h1 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
            WRISTORY Whitepaper <span className="text-blue-500">v2.0</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            {lang === 'ko' 
              ? '이더리움 Layer-2 Base 네트워크 및 테조스 듀얼 생태계 $WR 토큰의 아키텍처, Uniswap v4 유동성 구축 및 1:1 마이그레이션 백서입니다.'
              : 'Official technical specifications, Uniswap v4 liquidity mechanism, and 1:1 token migration architecture of WR token across Base L2 and Tezos.'
            }
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {/* Language Switcher */}
          <div className="bg-slate-900 p-1 rounded-2xl border border-slate-800 flex">
            <button 
              onClick={() => setLang('ko')} 
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all ${lang === 'ko' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              한국어
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              English
            </button>
          </div>

          <button 
            onClick={handleDownload}
            className="px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-emerald-500/20"
          >
            <ArrowDownToLine size={16} /> DOWNLOAD MD
          </button>
        </div>
      </div>

      {/* Main Content Split Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Sticky Sidebar Navigation */}
        <div className="w-full lg:w-80 shrink-0 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-6 lg:sticky lg:top-24 space-y-4">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest pl-2">Whitepaper Index</p>
          <div className="flex flex-wrap lg:flex-col gap-2">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id)}
                  className={`flex-1 min-w-[150px] lg:w-full flex items-center gap-3 p-4 rounded-2xl text-left text-xs font-black uppercase transition-all border ${
                    activeSection === sec.id
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                      : 'bg-slate-950/20 border-white/5 text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <Icon size={16} className={activeSection === sec.id ? 'text-white' : 'text-slate-500'} />
                  <span>{lang === 'ko' ? sec.titleKo : sec.titleEn}</span>
                </button>
              );
            })}
          </div>

          {/* Quick DEX Link box */}
          <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl space-y-2 text-left">
            <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold uppercase">
              <TrendingUp size={14} /> Uniswap v4 Active
            </div>
            <p className="text-[11px] text-slate-300">
              56,801 WR = 1 ETH (0.25% Fee Tier)
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={UNISWAP_SWAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black uppercase rounded-lg flex items-center gap-1"
              >
                Swap <ArrowUpRight size={11} />
              </a>
              <a
                href={UNISWAP_V4_POSITION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 bg-slate-800 text-slate-300 hover:text-white text-[10px] font-bold rounded-lg flex items-center gap-1"
              >
                Pool #2953119 <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Reader Stage */}
        <div className="flex-1 bg-slate-900/20 border border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl relative min-h-[600px]">
          {/* 1. VISION AND INTRO SECTION */}
          {activeSection === 'intro' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 01</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '1. 서론 및 비전 (이더리움 Base 확장)' : '1. Vision & Expansion to Base L2'}
                </h2>
              </div>

              <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                <p>
                  {lang === 'ko' 
                    ? 'WRISTORY 프로젝트는 인류의 소중한 역사, 위인들의 숭고한 독립정신, 그리고 세대를 관통하는 문화유산을 최첨단 블록체인과 스마트워치 페이스(Wear OS) 생태계로 결합하여 디지털 자산으로 영구히 보존하는 탈중앙화 헤리티지 아카이브입니다.'
                    : 'The WRISTORY project is a decentralized heritage archive and on-chain ecosystem dedicated to permanently preserving human history, patriotic spirits, and cultural legacies via smart dial (Wear OS) and blockchain.'
                  }
                </p>

                <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
                  <h3 className="text-lg font-bold text-white uppercase italic flex items-center gap-2">
                    <Sparkles size={18} className="text-[#00ffcc]" />
                    {lang === 'ko' ? '이더리움 Layer-2 (Base) 네트워크로의 전략적 확장' : 'Strategic Expansion to Ethereum Layer-2 (Base)'}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
                    {lang === 'ko'
                      ? '테조스(Tezos) 메인넷에서 1년 이상 1,063명의 홀더분들과 함께 생태계를 빌드업하였으나, 기존 QuipuSwap DEX의 유동성 한계와 거래 접근성의 구조적 제약을 극복하고자 코인베이스가 주도하는 글로벌 표준 L2인 Base 메인넷으로 토큰 이전을 완료하였습니다. Base 체인의 초고속 트랜잭션, 미세 가스비, 그리고 Uniswap v4 집중 유동성 풀을 통해 $WR 토큰의 진정한 글로벌 가치 형성을 시작합니다.'
                      : 'While built upon Tezos alongside 1,063 loyal holders, DEX liquidity limitations on QuipuSwap led the project to expand onto Coinbase\'s Ethereum Layer-2 (Base). With ultra-low gas fees and Uniswap v4 concentrated liquidity, $WR achieves global DeFi accessibility and real price discovery.'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. TOKEN SPECS SECTION */}
          {activeSection === 'specs' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 02</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '2. 토큰 기술 명세 (Base & Tezos)' : '2. Technical Token Specifications'}
                </h2>
              </div>

              <div className="space-y-6 font-medium">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {lang === 'ko'
                    ? 'WRISTORY($WR) 토큰은 Base 메인넷 상의 ERC-20 표준 컨트랙트로 공식 배포되었습니다. 테조스 FA2 컨트랙트 홀더분들을 위한 1:1 무손실 교환 브릿지가 가동 중입니다.'
                    : 'The WRISTORY ($WR) token is deployed on Base Mainnet as an ERC-20 contract, with 1:1 lossless migration provided for existing Tezos FA2 holders.'
                  }
                </p>

                {/* Spec Table */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 text-xs md:text-sm border-b border-slate-800 p-4 bg-slate-950/40">
                    <span className="text-slate-500 font-black uppercase tracking-wider">{lang === 'ko' ? '항목' : 'Parameter'}</span>
                    <span className="text-white font-black uppercase tracking-wider">{lang === 'ko' ? '상세 정의 / 값' : 'Specification / Value'}</span>
                  </div>
                  <div className="divide-y divide-slate-800 font-mono text-xs text-slate-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Token Name</span>
                      <span className="text-white font-extrabold font-sans">WRISTORY</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Token Symbol</span>
                      <span className="text-[#00ffcc] font-extrabold">WR</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Primary Network</span>
                      <span className="text-white font-sans">Base Mainnet (Ethereum Layer-2)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4 items-center">
                      <span className="text-slate-500 font-bold">Base Contract Address (ERC-20)</span>
                      <div className="flex items-center gap-2 overflow-x-auto select-all">
                        <span className="text-[#00ffcc] font-bold">{BASE_CONTRACT}</span>
                        <a href={`https://basescan.org/token/${BASE_CONTRACT}`} target="_blank" className="p-1 text-slate-400 hover:text-white" title="Explore On BaseScan"><ExternalLink size={12}/></a>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4 items-center">
                      <span className="text-slate-500 font-bold">Legacy Tezos Contract (FA2)</span>
                      <div className="flex items-center gap-2 overflow-x-auto select-all">
                        <span className="text-blue-400 font-medium">{TEZOS_CONTRACT}</span>
                        <a href={`https://tzkt.io/${TEZOS_CONTRACT}`} target="_blank" className="p-1 text-slate-500 hover:text-white" title="Explore On TzKT"><ExternalLink size={12}/></a>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Total Supply</span>
                      <span className="text-white font-extrabold">51,169,148.000000 WR ({lang === 'ko' ? '총 공급량 고정' : 'Fixed Supply'})</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Decimals</span>
                      <span className="text-white font-bold">18 (Base) / 6 (Tezos)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">DEX / Liquidity Venue</span>
                      <span className="text-emerald-400 font-bold font-sans">Uniswap v4 (Base) - ETH / WR (0.25%, Pool #2953119)</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                     {lang === 'ko'
                       ? 'Base 메인넷 배포를 통해 이더리움 가스비의 1/100 이하 비용으로 즉시 스왑 및 전송이 가능하며, 추가 발행 없이 총 51,169,148 WR 공급량이 철저히 보장됩니다.'
                       : 'Deployed on Base L2, transaction costs are less than 1% of Ethereum L1. Total supply remains strictly capped at 51,169,148 WR.'
                     }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. TOKENOMICS & UNISWAP V4 SECTION */}
          {activeSection === 'tokenomics' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 03</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '3. 토크노믹스 및 Uniswap v4 유동성 풀' : '3. Tokenomics & Uniswap v4 Liquidity'}
                </h2>
              </div>

              <div className="space-y-4 font-medium">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {lang === 'ko'
                    ? 'WR 토큰의 총 발행량은 51,169,148 WR로 영구히 고정되어 있으며 추가 발행은 원천 차단되었습니다. Uniswap v4(Base)에 ETH/WR 페어로 0.25% 수수료 등급의 집중 유동성 풀(Position #2953119)을 공식 구축하였습니다.'
                    : 'The total supply of WR token is strictly fixed at 51,169,148 WR. Primary concentrated liquidity is deployed on Uniswap v4 (Base) in the ETH/WR pair with 0.25% fee tier (Position #2953119).'
                  }
                </p>

                {/* Uniswap v4 Live Pool Card */}
                <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 space-y-4 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <h3 className="text-base font-black text-white uppercase tracking-tight">
                        Uniswap v4 Concentrated Liquidity (Base L2)
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold rounded-full">
                      Status: Active / In Range
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div>
                      <span className="text-slate-500 font-bold block">Position ID</span>
                      <span className="text-white font-mono font-bold">#2953119</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-bold block">Trading Pair</span>
                      <span className="text-white font-mono font-bold">ETH / WR</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-bold block">Fee Tier</span>
                      <span className="text-cyan-300 font-mono font-bold">0.25%</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-bold block">Rate Ratio</span>
                      <span className="text-emerald-400 font-mono font-bold">56,801.80 WR / 1 ETH</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={GECKOTERMINAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-95"
                    >
                      <TrendingUp size={14} className="text-amber-400" /> GeckoTerminal 실시간 차트 <ExternalLink size={12} />
                    </a>
                    <a
                      href={UNISWAP_SWAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
                    >
                      <TrendingUp size={14} /> 유니스왑 거래하기 <ArrowUpRight size={13} />
                    </a>
                    <a
                      href={UNISWAP_V4_POSITION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-700"
                    >
                      포지션 온체인 보기 <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Pie Chart and list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 items-center">
                  <div className="h-[280px] w-full flex items-center justify-center relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={distributionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={95}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {distributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0F111A', border: '1px solid #1e293b', borderRadius: '16px' }}
                          itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Fixed Cap</span>
                      <span className="text-sm font-black text-white italic">51,169,148</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {distributionData.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-slate-900/50 border border-white/5 rounded-xl text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-slate-300 font-bold">{item.name}</span>
                        </div>
                        <div className="text-right font-mono text-white font-bold">
                          <span>{item.percent}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6 divide-y divide-slate-800">
                  <div className="space-y-2 pt-4 text-xs">
                    <h4 className="text-white font-black uppercase tracking-tight">1. Community Rewards & Ecosystem (30%)</h4>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '역사 아카이빙 활동 지원, 스테이킹 보상, 스마트워치 테마 제작 서포터즈 지원을 위한 성장의 원동력입니다.'
                        : 'Powers holder staking benefits, reward cycles, and developer integrations.'
                      }
                    </p>
                  </div>
                  <div className="space-y-2 pt-4 text-xs">
                    <h4 className="text-white font-black uppercase tracking-tight">2. Uniswap v4 ETH/WR Liquidity Pool (20%)</h4>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '이더리움 Base 네트워크 상의 유니스왑 v4 집중 유동성 풀에 투입되어 강력한 시세 지지력과 풍부한 슬리피지 보호를 실현합니다.'
                        : 'Injected into Uniswap v4 concentrated liquidity pools on Base (ETH/WR) to support fair market pricing.'
                      }
                    </p>
                  </div>
                  <div className="space-y-2 pt-4 text-xs">
                    <h4 className="text-white font-black uppercase tracking-tight">3. 1:1 Tezos Holder Migration Guarantee (10%)</h4>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '기존 1,063명의 테조스 홀더분들이 보유한 수량을 빠짐없이 Base $WR로 1:1 교환해 드리기 위해 할당 및 안전 보관됩니다.'
                        : 'Reserved exclusively to execute seamless 1:1 token migration for all 1,063 existing Tezos holders.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. UTILITY SECTION */}
          {activeSection === 'utility' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 04</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '4. 토큰 유틸리티 및 역학' : '4. Core Token Utilities'}
                </h2>
              </div>

              <div className="space-y-6 text-slate-300 text-sm font-medium">
                <p className="text-base text-slate-400 leading-relaxed font-sans">
                  {lang === 'ko'
                    ? 'Base $WR 토큰은 디지털 헤리티지 아카이브, 스마트워치 Wear OS, 그리고 글로벌 DeFi 생태계를 직접 잇는 핵심 유틸리티입니다.'
                    : 'The WR token on Base serves as the primary utility asset linking on-chain generative heritage, Wear OS dials, and decentralized liquidity.'
                  }
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-purple-600/10 text-purple-400 rounded-xl flex items-center justify-center">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="text-white font-bold text-base">
                      {lang === 'ko' ? '스마트워치 페이스 해금 & 라이선스' : 'Smartwatch Face Licensing'}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '홀더들은 고해상도 역사 인물 및 제너레이티브 아카이빙 워치페이스를 독점 해금하여 Galaxy Watch 및 Apple Watch에 적용할 수 있습니다.'
                        : 'Holders unlock exclusive high-resolution historical watchfaces on Galaxy Watch and Apple Watch.'
                      }
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-blue-600/10 text-blue-400 rounded-xl flex items-center justify-center">
                      <Layers size={20} />
                    </div>
                    <h3 className="text-white font-bold text-base">
                      {lang === 'ko' ? '디지털 헤리티지 보존 거버넌스' : 'Decentralized Heritage Governance'}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '차기 디지털 복원 대상 독립운동가 및 역사적 사건 아카이빙 우선순위 결정에 투표권을 행사합니다.'
                        : 'Vote on subsequent historical figures and events selected for on-chain digital reconstruction.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. ROADMAP SECTION */}
          {activeSection === 'roadmap' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 05</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '5. 프로젝트 로드맵 (Base 확장)' : '5. Project Roadmap (Base Expansion)'}
                </h2>
              </div>

              <div className="relative border-l-2 border-slate-800 ml-4 space-y-10 pl-8 font-medium">
                {/* Q1 2026 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-emerald-500 border-4 border-slate-950 flex items-center justify-center" />
                  <span className="text-emerald-400 text-xs font-black uppercase tracking-wider">
                    Q1 2026 — Base Migration & Uniswap v4 (Completed / Active)
                  </span>
                  <h3 className="text-lg font-black text-white uppercase italic">
                    {lang === 'ko' ? '이더리움 Base 메인넷 이전 및 Uniswap v4 풀 론칭' : 'Base Mainnet Migration & Uniswap v4 Pool Launch'}
                  </h3>
                  <ul className="text-xs text-slate-400 space-y-1.5 font-sans">
                    <li>✓ Base 메인넷 공식 ERC-20 컨트랙트 배포 (0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7)</li>
                    <li>✓ Uniswap v4 집중 유동성 풀 가동 (ETH/WR, 0.25%, #2953119)</li>
                    <li>✓ 1,063명 기존 테조스 홀더 1:1 마이그레이션 포털 가동</li>
                  </ul>
                </div>

                {/* Q2 2026 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-slate-950 flex items-center justify-center" />
                  <span className="text-blue-400 text-xs font-black uppercase tracking-wider">
                    Q2 2026 — Global Heritage Expansion & Wear OS Dials
                  </span>
                  <h3 className="text-lg font-black text-white uppercase italic">
                    {lang === 'ko' ? '글로벌 헤리티지 아카이브 확장 및 스마트워치 연동' : 'Global Archive Expansion & Smartwatch Dials'}
                  </h3>
                  <ul className="text-xs text-slate-400 space-y-1.5 font-sans">
                    <li>• 글로벌 주요 독립운동 및 세계사 디지털 복원 컬렉션 발표</li>
                    <li>• Google Play Store 및 Apple Watch 전용 헤리티지 다이얼 앱 릴리즈</li>
                    <li>• CoinGecko & CoinMarketCap 공식 등재 및 트래커 연동</li>
                  </ul>
                </div>

                {/* Q3-Q4 2026 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-purple-600 border-4 border-slate-950 flex items-center justify-center" />
                  <span className="text-purple-400 text-xs font-black uppercase tracking-wider">
                    Q3-Q4 2026 — DAO Governance & Heritage Museum
                  </span>
                  <h3 className="text-lg font-black text-white uppercase italic">
                    {lang === 'ko' ? '탈중앙화 헤리티지 DAO 및 메타버스 전시관' : 'Decentralized Heritage DAO & Virtual Museum'}
                  </h3>
                  <ul className="text-xs text-slate-400 space-y-1.5 font-sans">
                    <li>• 홀더 전용 온체인 투표 및 역사 보존 펀드 집행 DAO 출범</li>
                    <li>• 글로벌 메타버스 가상 역사 기념관 및 인터랙티브 전시 개최</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 6. REGULATORY COMPLIANCE & CLARITY ACT SECTION */}
          {activeSection === 'compliance' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-indigo-400 text-[10px] uppercase font-black tracking-widest">Section 06</span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-bold">
                    Institutional Framework
                  </span>
                </div>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '6. 제도권 규제 분석 및 클래리티 법안 연구' : '6. Regulatory Framework & Clarity Act'}
                </h2>
                <p className="text-sm text-slate-400">
                  {lang === 'ko'
                    ? '미국 디지털 자산 시장 구조 법안(FIT21 / Clarity Act), CFTC 선물시장 규제 체계, 증권성(Howey Test) 배제 및 온체인 자율성에 관한 제도권 분석 리포트입니다.'
                    : 'Institutional analysis on U.S. digital asset market structure legislations (FIT21 / Clarity Act), CFTC regulatory gateways, and Howey Test exemption.'}
                </p>
              </div>

              {/* Research Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <Scale size={20} />
                    <h3 className="text-base font-black text-white uppercase italic">
                      {lang === 'ko' ? '탈중앙화 기준 충족 & Howey Test 증권성 배제' : 'Decentralization & Howey Test Exemption'}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'ko'
                      ? '$WR 토큰은 중앙화된 경영진의 노력에 의한 배당이나 지분 가치 보장이 없는 순수 디지털 문화유산 헌정·기록 및 온체인 AMM 유틸리티 토큰입니다. 스마트 컨트랙트 배포 후 임의 소각이나 지분 회수가 불가능한 불변성(Immutability)을 확보하여 미 증권법상 투자계약(Investment Contract) 요건을 배제하도록 설계되었습니다.'
                      : '$WR functions strictly as an on-chain heritage curation and AMM utility asset without enterprise profit-sharing, satisfying non-security utility criteria.'}
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1.5 font-sans">
                    <li>✓ 완전 불변형 ERC-20 스마트 컨트랙트 배포</li>
                    <li>✓ Uniswap v4 탈중앙 AMM을 통한 무개입 유동성 유지</li>
                    <li>✓ 공익적 헤리티지(무주 반딧불이·순국선열 헌정) 연계</li>
                  </ul>
                </div>

                <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <TrendingUp size={20} />
                    <h3 className="text-base font-black text-white uppercase italic">
                      {lang === 'ko' ? '선물시장(CFTC)과 제도권 수용 구조 분석' : 'CFTC Derivatives & Institutional Flow'}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'ko'
                      ? '최근 CME, 코인베이스, 칼시, 비트노미얼 등 주요 거래소들이 CFTC 선물 규제 인가를 통해 현물 시장의 제도권 진입을 이끌어내는 흐름을 심층 분석합니다. WRISTORY는 이러한 미국 금융 정책의 구조적 변화에 발맞추어 글로벌 표준에 부합하는 온체인 투명성을 견지합니다.'
                      : 'Deep research into institutional adoption mechanics via CFTC-regulated derivative markets (CME, Coinbase, Kalshi) and global market readiness.'}
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1.5 font-sans">
                    <li>✓ 미국 의회 FIT21 & Clarity Act 입법 타임라인 모니터링</li>
                    <li>✓ 초당적 가상자산 슈퍼팩(Fairshake) 정치 지형 분석</li>
                    <li>✓ Base L2 온체인 투명 회계 및 스냅샷 검증 제공</li>
                  </ul>
                </div>
              </div>

              {/* Research Links Box */}
              <div className="bg-gradient-to-r from-indigo-950/50 via-slate-900 to-blue-950/50 border border-indigo-500/30 rounded-3xl p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-indigo-400 font-mono font-bold uppercase">
                      Open Source Research Papers
                    </span>
                    <h4 className="text-lg font-black text-white italic uppercase">
                      Research-Clarity-Act 연구 리포지토리 및 심층 연재 칼럼
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      공식 GitHub 저장소와 네이버 블로그에 기고된 입법·규제 전문 리서치를 확인하실 수 있습니다.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <a
                      href={GITHUB_CLARITY_RESEARCH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all border border-slate-700 flex items-center gap-2 shadow"
                    >
                      <BookOpen size={14} className="text-blue-400" /> GitHub Repo <ExternalLink size={12} />
                    </a>
                    <a
                      href={BLOG_CLARITY_ACT_1_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow"
                    >
                      <span>연재 1편</span> <ArrowUpRight size={13} />
                    </a>
                    <a
                      href={BLOG_CLARITY_ACT_2_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow"
                    >
                      <span>연재 2편</span> <ArrowUpRight size={13} />
                    </a>
                    <a
                      href={BLOG_CLARITY_ACT_3_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow"
                    >
                      <span>연재 3편</span> <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 7. DISCLAIMER SECTION */}
          {activeSection === 'disclaimer' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 07</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '7. 법적 책임 고지 (Legal Disclaimer)' : '7. Legal Disclaimer'}
                </h2>
              </div>

              <div className="space-y-4 text-xs text-slate-400 leading-relaxed font-sans bg-slate-950/60 p-6 rounded-3xl border border-slate-800">
                <p>
                  {lang === 'ko'
                    ? '본 백서는 WRISTORY 생태계의 기술적 아키텍처 및 유동성 구조를 설명하기 위한 목적으로 작성되었으며, 투자 권유나 증권 발행을 목적으로 하지 않습니다. $WR 토큰은 유틸리티 토큰이며 어떠한 법적 이익이나 배당을 보장하지 않습니다.'
                    : 'This document is for informational and technical description purposes only and does not constitute financial advice or securities offering. $WR is a utility token designed for ecosystem features and does not represent equity or dividend guarantees.'
                  }
                </p>
                <p>
                  {lang === 'ko'
                    ? '암호화폐의 거래 및 보관은 높은 변동성과 기술적 위험을 수반하므로 사용자는 본인의 판단과 책임하에 참여해야 합니다.'
                    : 'Cryptocurrency interactions involve inherent volatility and technical risks. Participants should exercise their own due diligence.'
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhitepaperView;
