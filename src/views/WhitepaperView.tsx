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
  ArrowRightLeft
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

  const sections: Section[] = [
    { id: 'intro', titleKo: '1. 서론 및 비전', titleEn: '1. Vision & Intro', icon: BookOpen },
    { id: 'specs', titleKo: '2. 토큰 명세 (Base & Tezos)', titleEn: '2. Token Specs', icon: Cpu },
    { id: 'tokenomics', titleKo: '3. 토크노믹스 & 유동성', titleEn: '3. Tokenomics', icon: Coins },
    { id: 'utility', titleKo: '4. 토큰 유틸리티', titleEn: '4. Token Utility', icon: Layers },
    { id: 'roadmap', titleKo: '5. 프로젝트 로드맵 (Base 확장)', titleEn: '5. Roadmap', icon: Compass },
    { id: 'disclaimer', titleKo: '6. 법적 책임 고지', titleEn: '6. Legal Disclaimer', icon: ShieldAlert },
  ];

  const distributionData = [
    { name: lang === 'ko' ? '커뮤니티 및 생태계' : 'Community & Ecosystem', value: 15350744, color: '#3b82f6', percent: '30%' },
    { name: lang === 'ko' ? '유니스왑 V3 / 유동성 풀' : 'Uniswap V3 / Liquidity Pool', value: 10233829, color: '#10b981', percent: '20%' },
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
              ? '이더리움 Layer-2 Base 네트워크 및 테조스 듀얼 생태계 $WR 토큰의 아키텍처, Uniswap V3 유동성 구축 및 1:1 마이그레이션 백서입니다.'
              : 'Official technical specifications, Uniswap V3 liquidity mechanism, and 1:1 token migration architecture of WR token across Base L2 and Tezos.'
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

              {lang === 'ko' ? (
                <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                  <p className="text-[#00ffcc] text-lg font-bold border-l-4 border-[#00ffcc] pl-4 italic">
                    "역사는 체인과 국경을 넘어 영원히 기록됩니다. 테조스에서 증명된 1,063명의 헌신과 헤리티지가 이제 이더리움 Layer-2 Base 위에서 폭발적인 글로벌 유동성을 만납니다."
                  </p>
                  <p>
                    <strong>WRISTORY</strong>는 대한민국의 자랑스러운 독립 투쟁의 역사와 구국 영웅들의 위대한 결의를 온체인 디지털 자산 생태계로 구축해 온 프로젝트입니다. 테조스 메인넷에서 1,063명의 충실한 홀더 커뮤니티를 형성하였으며, 덱스 인프라 한계를 극복하고 진정한 글로벌 가치 교환을 실현하고자 <strong>Coinbase 주도의 이더리움 L2 네트워크인 Base</strong>로 $WR 토큰의 공식 확장을 완료하였습니다.
                  </p>
                  <p>
                    Base 네트워크로의 확장을 통해, 전 세계 수천만 명의 이더리움 및 EVM 사용자들이 수수료 부담 없이 $WR 토큰과 역사 헤리티지 생태계에 접근할 수 있게 되었으며, <strong>Uniswap V3(ETH/$WR)</strong> 풀을 통해 신뢰할 수 있는 실시간 시세 형성과 깊은 유동성을 제공합니다.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                      <h4 className="text-white font-bold text-sm uppercase">1. 이더리움 Base L2 글로벌 유동성</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        초저렴 가스비와 초고속 트랜잭션을 갖춘 Base 체인 기반으로 유니스왑 V3 유동성을 투입하여 전 세계 투자자들의 자유로운 거래를 보장합니다.
                      </p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                      <h4 className="text-white font-bold text-sm uppercase">2. 기존 1,063명 홀더 1:1 완벽 보장</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        테조스에서 프로젝트를 지켜온 기존 홀더분들을 위해 1:1 마이그레이션 포털을 운영하며 자산 손실 없이 안전한 베이스 $WR 전환을 지원합니다.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                  <p className="text-blue-400 text-lg font-bold border-l-4 border-blue-500 pl-4 italic">
                    "History transcends boundaries and chains. The heritage built with 1,063 Tezos pioneers now unites with global liquidity on Ethereum Layer-2 Base."
                  </p>
                  <p>
                    <strong>WRISTORY</strong> is an on-chain digital heritage curation ecosystem immortalizing national independence heroes and cultural treasures. After establishing a vibrant foundation on Tezos, $WR token is expanding to Coinbase-incubated <strong>Ethereum Layer-2 Base</strong> to overcome decentralized exchange limitations and build deep Uniswap V3 liquidity.
                  </p>
                  <p>
                    Every existing Tezos holder is 100% safeguarded through our transparent 1:1 migration portal, ensuring zero loss and seamless token upgrades.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 2. TOKEN SPECS SECTION */}
          {activeSection === 'specs' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 02</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '2. 토큰 상세 명세 (Base Mainnet)' : '2. Token Specifications'}
                </h2>
              </div>

              <div className="space-y-6 font-medium">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {lang === 'ko' 
                    ? 'WR 토큰은 이더리움 Layer-2 Base 메인넷 상의 표준 ERC-20 표준으로 정식 배포되었으며, MetaMask, Coinbase Wallet, Uniswap과 즉각 연동됩니다.'
                    : 'The WR token is deployed on Base Mainnet following the standard ERC-20 framework, providing seamless compatibility with MetaMask, Coinbase Wallet, and Uniswap V3.'
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
                      <span className="text-emerald-400 font-bold font-sans">Uniswap V3 (ETH / WR Pair)</span>
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

          {/* 3. TOKENOMICS SECTION */}
          {activeSection === 'tokenomics' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 03</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '3. 토크노믹스 및 유동성 구조' : '3. Tokenomics & Liquidity'}
                </h2>
              </div>

              <div className="space-y-4 font-medium">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {lang === 'ko'
                    ? 'WR 토큰의 총 발행량은 51,169,148 WR로 영구히 고정되어 있으며 추가 발행은 원천 차단되었습니다. QuipuSwap의 한계를 벗어나 Uniswap V3(Base)에 직접 유동성을 조성합니다.'
                    : 'The total supply of WR token is strictly fixed at 51,169,148 WR. Primary liquidity is transitioned to Uniswap V3 on Base L2 with ETH/WR pairs.'
                  }
                </p>

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
                    <h4 className="text-white font-black uppercase tracking-tight">2. Uniswap V3 ETH/WR Liquidity Pool (20%)</h4>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '이더리움 Base 네트워크 상의 유니스왑 V3 집중 유동성 풀에 투입되어 강력한 시세 지지력과 풍부한 슬리피지 보호를 실현합니다.'
                        : 'Injected into Uniswap V3 concentrated liquidity pools on Base (ETH/WR) to support fair market pricing.'
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
                      <Cpu size={22} />
                    </div>
                    <h4 className="text-white font-extrabold font-sans text-sm">{lang === 'ko' ? '⌚ 스마트워치 페이스 해제' : '⌚ Smartwatch Access'}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      {lang === 'ko'
                        ? 'Base 지갑 내 $WR 보유량을 검증하여 구글 플레이스토어 Wear OS 전용 역사 워치페이스 패키지 다운로드 및 커스텀 라이선스를 잠금 해제합니다.'
                        : 'Unlocks exclusive access to YesOkLab Wear OS smartwatch apps through on-chain Base token verification.'
                      }
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-[#00ffcc]/10 text-[#00ffcc] rounded-xl flex items-center justify-center">
                      <Sparkles size={22} />
                    </div>
                    <h4 className="text-white font-extrabold font-sans text-sm">{lang === 'ko' ? '🎨 고화질 역사 NFT 민팅 & 화이트리스트' : '🎨 Exclusive NFT Access'}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '안중근의사, 김향화선생, 이순신장군 등 주요 역사적 인물의 고화질 디지털 복원 작품 민팅 시 독점 할인 및 화이트리스트 우선권을 부여받습니다.'
                        : 'Provides priority whitelist allocations and special minting access for historical preservation drops.'
                      }
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-blue-600/10 text-blue-400 rounded-xl flex items-center justify-center">
                      <Layers size={22} />
                    </div>
                    <h4 className="text-white font-extrabold font-sans text-sm">{lang === 'ko' ? '🗳️ 온체인 거버넌스 투표' : '🗳️ Heritage Governance'}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '다음에 복원할 독립운동가 사료 및 유물 디지털화의 우선순위를 홀더 투표로 결정합니다.'
                        : 'Participate in governance proposals deciding future historical figures and archives for digitization.'
                      }
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                      <Coins size={22} />
                    </div>
                    <h4 className="text-white font-extrabold font-sans text-sm">{lang === 'ko' ? '👥 유니스왑 V3 LP 리워드' : '👥 Uniswap V3 LP Staking'}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      {lang === 'ko'
                        ? 'Base Uniswap V3 ETH/WR 풀에 유동성을 공급하는 유저들에게 거래 수수료 분배 및 추가 생태계 보상을 지급합니다.'
                        : 'Earn swap fees and exclusive community tier rewards by participating in Uniswap V3 LP on Base.'
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
                  {lang === 'ko' ? '5. 로드맵 (Base 확장 및 글로벌 도약)' : '5. Ecosystem Roadmap'}
                </h2>
              </div>

              <div className="space-y-8 relative pl-6 border-l-2 border-slate-800 font-medium">
                {/* Milestone 1 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-950 shadow-lg" />
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-black uppercase rounded-lg">2025.Q3 - 2026.Q1</span>
                    <h4 className="text-white font-black uppercase text-sm">Foundation & Archive Inception (기반 구축 완료)</h4>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {lang === 'ko'
                      ? '✓ 테조스 기반 1,063명의 강력한 홀더 커뮤니티 형성. 독립 위인전 및 역사 디지털 복원 NFT 1차 아카이브 구축 완료.'
                      : '✓ Established 1,063 pioneer holders on Tezos. Successfully launched historical commemorative archive collections.'
                    }
                  </p>
                </div>

                {/* Milestone 2 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 shadow-lg animate-pulse" />
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-black uppercase rounded-lg">2026.Q2 - 2026.Q3 (현재 단계)</span>
                    <h4 className="text-white font-black uppercase text-sm">Base Network Migration & Uniswap V3 (베이스 확장 및 1:1 교환)</h4>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {lang === 'ko'
                      ? '✓ 이더리움 Layer-2 Base 메인넷 스마트 컨트랙트 배포 완료 (0x9DE688b...). 기존 1,063명 홀더 1:1 마이그레이션 포털 오픈. Uniswap V3 ETH/WR 풀 조성 및 코인마켓캡/코인게코 심사.'
                      : '✓ Deployed Base L2 smart contract (0x9DE688b...). Launched 1:1 migration portal for 1,063 Tezos holders. Building Uniswap V3 ETH/WR liquidity pools and index listings.'
                    }
                  </p>
                </div>

                {/* Milestone 3 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950" />
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[9px] font-black uppercase rounded-lg">2026.Q4 ~ 2027</span>
                    <h4 className="text-white font-black uppercase text-sm">Wear OS Direct Sync & Global CEX Listing</h4>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {lang === 'ko'
                      ? '구글 플레이스토어 Wear OS 앱 정식 출시. Base L2 EVM 지갑 자동 연동 워치페이스 배포. 글로벌 중앙 거래소(CEX) 상장 추진 및 박물관 연합 협약.'
                      : 'Releasing official Google Play Wear OS application with Base L2 wallet integrations. Pursuing Tier-1 global exchange listings.'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 6. DISCLAIMER SECTION */}
          {activeSection === 'disclaimer' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 06</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '6. 법적 면책 사항 및 고지' : '6. Legal Disclaimer'}
                </h2>
              </div>

              {lang === 'ko' ? (
                <div className="space-y-4 text-slate-400 text-xs leading-relaxed font-sans">
                  <p className="text-white font-bold text-sm">1. 투자의 성격 부존재</p>
                  <p>
                    본 백서에 수록된 어떠한 정보도 WRISTORY 토큰에 대한 증권, 지분 처분 제안, 채무 권한 유치 또는 자격 매칭 권고로 해석되어서는 안 됩니다. $WR 토큰은 공공 박물관의 물리적 주식을 뜻하지 않으며, 전적으로 디지털 헤리티지 생태계 전용 유틸리티로 운용됩니다.
                  </p>
                  <p className="text-white font-bold text-sm">2. 1:1 마이그레이션 불변성 원칙</p>
                  <p>
                    테조스에서 Base로의 이전 과정에서 신규 토큰의 인플레이션 발행은 일체 없으며, 기존 총공급량 51,169,148 WR 한도 내에서 1:1로 완전 교환됩니다.
                  </p>
                  <p className="text-white font-bold text-sm">3. 기술적 내재 위험</p>
                  <p>
                    스마트 계약 시스템은 안전하게 검증되었으나, 블록체인 네트워크 고유의 트랜잭션 지연, 가스비 변동성 등 일반적인 온체인 위험이 존재할 수 있습니다.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-slate-400 text-xs leading-relaxed font-sans">
                  <p className="text-white font-bold text-sm">1. Non-Financial Security Statement</p>
                  <p>
                    WR is purely optimized as a virtual utility driver binding digital preservation features with customized smartwatch face profiles across Base L2 and Tezos networks.
                  </p>
                  <p className="text-white font-bold text-sm">2. Fixed Supply & 1:1 Parity</p>
                  <p>
                    Token migration respects the strictly fixed cap of 51,169,148 WR without unauthorized secondary inflation.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhitepaperView;
