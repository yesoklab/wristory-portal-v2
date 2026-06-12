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
  ChevronRight, 
  Sparkles,
  ExternalLink,
  CheckCircle2,
  PieChart as PieIcon
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

  const sections: Section[] = [
    { id: 'intro', titleKo: '1. 서론 및 비전', titleEn: '1. Vision & Intro', icon: BookOpen },
    { id: 'specs', titleKo: '2. 토큰 명세', titleEn: '2. Token Specs', icon: Cpu },
    { id: 'tokenomics', titleKo: '3. 토크노믹스', titleEn: '3. Tokenomics', icon: Coins },
    { id: 'utility', titleKo: '4. 토큰 유틸리티', titleEn: '4. Token Utility', icon: Layers },
    { id: 'roadmap', titleKo: '5. 프로젝트 로드맵', titleEn: '5. Roadmap', icon: Compass },
    { id: 'disclaimer', titleKo: '6. 법적 책임 고지', titleEn: '6. Legal Disclaimer', icon: ShieldAlert },
  ];

  const distributionData = [
    { name: lang === 'ko' ? '커뮤니티 및 생태계' : 'Community & Ecosystem', value: 15350744, color: '#3b82f6', percent: '30%' },
    { name: lang === 'ko' ? '유동성 풀' : 'Liquidity Pool', value: 10233829, color: '#10b981', percent: '20%' },
    { name: lang === 'ko' ? '생태계 재단 예비비' : 'Treasury Reserve', value: 10233829, color: '#f59e0b', percent: '20%' },
    { name: lang === 'ko' ? '핵심 개발 및 인프라' : 'Core Development', value: 7675372, color: '#8b5cf6', percent: '15%' },
    { name: lang === 'ko' ? '초기 에어드랍' : 'Early Airdrop', value: 5116914, color: '#ec4899', percent: '10%' },
    { name: lang === 'ko' ? '전략적 고문 및 파트너' : 'Advisors & Partners', value: 2558457, color: '#64748b', percent: '5%' },
  ];

  const handleDownload = () => {
    // Generate a user-friendly trigger for WHITEPAPER.md in the public folder
    const link = document.createElement('a');
    link.href = '/WHITEPAPER.md';
    link.download = 'WRISTORY_Whitepaper_v1.0.md';
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
            <FileText size={14} className="animate-pulse" /> Official Document
          </div>
          <h1 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
            WRISTORY Whitepaper <span className="text-blue-500">v1.0</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            {lang === 'ko' 
              ? '테조스 메인넷 기반 디지털 헤리티지 생태계와 $WR 토큰의 기술 아키텍처 및 정교한 토크노믹스 백서입니다.'
              : 'Official technical specifications, token utility mechanics, and distributed ledger governance architecture of the WR token on Tezos Mainnet.'
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
                  {lang === 'ko' ? '1. 서론 및 비전' : '1. Vision & Introduction'}
                </h2>
              </div>

              {lang === 'ko' ? (
                <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                  <p className="text-[#00ffcc] text-lg font-bold border-l-4 border-[#00ffcc] pl-4 italic">
                    "역사는 블록체인 위에서 영원히 살아 숨 쉽니다. 과거 순국선열의 애국 투쟁과 고결한 기개는 변하지 않는 블록체인의 기록 속에서 미래의 등불이 됩니다."
                  </p>
                  <p>
                    <strong>WRISTORY</strong>는 테조스(Tezos) 메인넷 프로토콜을 기반으로 대한민국의 찬란하고 순결한 독립 역사, 수많은 구국 영웅들의 위대한 결의, 그리고 소중한 아시아 유물의 기록을 현대적인 디지털 자산 생태계로 변환하여 영구적으로 보존하는 혁신적인 <strong>디지털 헤리티지 아카이브 시스템</strong>입니다.
                  </p>
                  <p>
                    인류의 역사 기록은 정치, 전쟁, 환경 변화로 인해 언제든 유실되거나 왜곡될 우려가 존재해 왔습니다. WRISTORY는 공용 온체인 네트워크가 제공하는 불변성(Immutability)과 검증 능력(Decentralized Verification)을 적용하여, 대한민국의 애국 역사 파편들이 어떤 권력이나 왜곡에도 흔들리지 않고 온전히 후대에 전해질 수 있도록 보증하고자 합니다.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                      <h4 className="text-white font-bold text-sm uppercase">1. 전수 보존 프로젝트</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        실제 사료와 독립 투사 어록을 기반으로 한 제너레이티브 파형 예술(Wave Art)을 개발하고, 블록체인상에 기록하여 역사적 가치를 영구 소유합니다.
                      </p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                      <h4 className="text-white font-bold text-sm uppercase">2. 생활 밀착형 혜택 (Wear OS)</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        디지털 예술 소유권을 스마트폰, 스마트워치 페이스(Wear OS)와 연결하여 현대인들이 일상에서 선열들의 기개를 마주할 수 있도록 돕습니다.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                  <p className="text-blue-400 text-lg font-bold border-l-4 border-blue-500 pl-4 italic">
                    "History lives forever on the blockchain. The historic vows and pure integrity of patriotic souls become an unquenchable light when engraved inside distributed ledgers."
                  </p>
                  <p>
                    <strong>WRISTORY</strong> is an advanced digital heritage curation platform operating natively on the Tezos mainnet. We integrate monumental historical moments—such as the heroic Korean independence struggles—with state-of-the-art generative wave art, the native utility asset $WR, and practical Wear OS smartwatch applications.
                  </p>
                  <p>
                    Traditional archives are vulnerable to centralized modifications, political revisions, and physical decay over centuries. WRISTORY prevents these threats by establishing an unalterable, cryptographically certified repository on a carbon-neutral public ledger. We ensure that our ancestors' voices stay original, immortal, and easily accessible across generations.
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
                  {lang === 'ko' ? '2. 토큰 상세 명세' : '2. Token Specifications'}
                </h2>
              </div>

              <div className="space-y-6 font-medium">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {lang === 'ko' 
                    ? 'WR 토큰은 테조스 네트워크의 다목적 스마트 컨트랙트 규격인 FA2 표준을 100% 준수하여 제작되었으며, 우수한 거래 신속성과 완벽한 모바일 지갑 호환성을 보장합니다.'
                    : 'The WR token is deployed using Tezos’ official FA2 standard, which is famous for its formal security, carbon-neutral execution, and instant mobile wallet integrations.'
                  }
                </p>

                {/* Spec Table */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 text-xs md:text-sm border-b border-slate-800 p-4 bg-slate-950/40">
                    <span className="text-slate-500 font-black uppercase tracking-wider">{lang === 'ko' ? '기목' : 'Parameter'}</span>
                    <span className="text-white font-black uppercase tracking-wider">{lang === 'ko' ? '상세 정의 / 값' : 'Specification / Value'}</span>
                  </div>
                  <div className="divide-y divide-slate-800 font-mono text-xs text-slate-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Token Name</span>
                      <span className="text-white font-extrabold font-sans">Wristory</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Token Symbol</span>
                      <span className="text-[#00ffcc] font-extrabold">WR</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Standard</span>
                      <span className="text-white font-sans">Tezos FA2 (Fungible Asset 1.2/2.0 Compatible)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4 items-center">
                      <span className="text-slate-500 font-bold">Contract Address (FA2)</span>
                      <div className="flex items-center gap-2 overflow-x-auto select-all">
                        <span className="text-blue-400 font-medium">KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu</span>
                        <a href="https://tzkt.io/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu" target="_blank" className="p-1 text-slate-500 hover:text-white" title="Explore On TzKT"><ExternalLink size={12}/></a>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Total Supply</span>
                      <span className="text-white font-extrabold">51,169,148.000000 WR ({lang === 'ko' ? '총 공급량 고정' : 'Fixed Supply'})</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Decimals</span>
                      <span className="text-white font-bold">6</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 p-4">
                      <span className="text-slate-500 font-bold">Issuer / Creator</span>
                      <span className="text-slate-400 font-sans">YesOkLab Core Developers</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                     {lang === 'ko'
                       ? '해당 컨트랙트는 Temple Wallet, Kukai, Umami, Trust Wallet 등에서 표준 FA2 사양이 자산 로고/메타데이터와 함께 정식 인식 및 거래가 가능하도록 설계 및 연동되었습니다.'
                       : 'Our smart contract is formally verified and automatically fetches registered asset ledger logos and token profiles directly inside default Tezos user agents like Temple and Kukai.'
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
                  {lang === 'ko' ? '3. 토크노믹스 및 분배 비율' : '3. Tokenomics & Distribution'}
                </h2>
              </div>

              <div className="space-y-4 font-medium">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {lang === 'ko'
                    ? 'WR 토큰의 총 발행량은 51,169,148 WR로 영구히 고정되어 있으며 추가 민팅(발행) 권한은 영구 봉인되었습니다. 생태계의 건전성과 유동성 가치 수호를 목표로 고안되었습니다.'
                    : 'The total supply of WR token is strictly fixed at 51,169,148 WR. The mint authority has been permanently disabled, securing scarcity and predictable valuation for ecosystem assets.'
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
                        ? '역사 아카이빙 활동 지원, 홀더 연동 스테이킹 보상, 스마트워치 테마 제작 서포터즈 지원을 위한 성장의 원동력입니다.'
                        : 'Powers holder staking benefits, reward cycles, and developer integrations for the smartwatch face apps.'
                      }
                    </p>
                  </div>
                  <div className="space-y-2 pt-4 text-xs">
                    <h4 className="text-white font-black uppercase tracking-tight">2. Liquidity Pool / CPMM Pools (20%)</h4>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      {lang === 'ko'
                        ? 'QuipuSwap 탈중앙성 풀(wXTZ / WR)에 즉각 투여되어 투명한 동적 실시간 시세를 유지하고 슬리피지를 최소화합니다.'
                        : 'Fully injected into CPMM pools on QuipuSwap. Guarantees organic liquidity with minimal slippage.'
                      }
                    </p>
                  </div>
                  <div className="space-y-2 pt-4 text-xs">
                    <h4 className="text-white font-black uppercase tracking-tight">3. Ecosystem Treasury Reserve (20%)</h4>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '프로젝트의 연속성을 보존하고 고증 유물 유산 구매 및 메가급 독립 재단 제휴를 위해 예비 보관됩니다.'
                        : 'Reserved for strategic historic partner alignments and acquiring intellectual properties for digitized heritage archives.'
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
                    ? 'WR 토큰은 디지털 세계와 현실 Wear OS 웨어러블 하드웨어를 혁신적으로 연계하는 다중 구동 유틸리티 축입니다.'
                    : 'The WR token serves as the fundamental catalyst binding digital art assets with daily hardware smartwatch components.'
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
                        ? '온체인 지갑 내 WR 보유량을 당사의 스마트 검증 시스템이 자발 평가하여 사전에 제한되었던 구국 스마트 구동 워치페이스 다운로드와 라이선스를 즉각 해제합니다.'
                        : 'Instantly grants permissions to secure and install YesOkLab premium Google Play Wear OS face apps using trustless wallet ownership verifies.'
                      }
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-[#00ffcc]/10 text-[#00ffcc] rounded-xl flex items-center justify-center">
                      <Sparkles size={22} />
                    </div>
                    <h4 className="text-white font-extrabold font-sans text-sm">{lang === 'ko' ? '🎨 고화질 역사 NFT 한정 민팅' : '🎨 Exclusive Generative Mints'}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '안중근의사, 김향화선생 등 한정판 제너레이티브 작품의 우선 민팅 권한(화이트리스트) 및 자산 스위핑 할인 혜택을 수여받게 됩니다.'
                        : 'Provides exclusive access, lower cost-bases, and priority whitelsit allocations for subsequent generative mainnet drops.'
                      }
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-blue-600/10 text-blue-400 rounded-xl flex items-center justify-center">
                      <Layers size={22} />
                    </div>
                    <h4 className="text-white font-extrabold font-sans text-sm">{lang === 'ko' ? '🗳️ 헤리티지 거버넌스 보트' : '🗳️ Curation & Governance'}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      {lang === 'ko'
                        ? '재단에서 주관하는 다음 디지털 보존 기획전 수립 시 어떤 애국 열사나 희귀 사료를 먼저 복제/보존할지 의결하고 가치 우선 방향을 결정합니다.'
                        : 'Engages users directly. Cast your vote regarding which national independence figures or historical assets gain priorities in digitizations.'
                      }
                    </p>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                      <Coins size={22} />
                    </div>
                    <h4 className="text-white font-extrabold font-sans text-sm">{lang === 'ko' ? '👥 유동성 공급 수수료 및 보상' : '👥 LP Staking Enhancements'}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-sans">
                      {lang === 'ko'
                        ? 'QuipuSwap을 통해 wXTZ와 자사 토큰을 결합하여 풀에 영양을 주는 CPMM 공급자들은 가상 거래 수수료 배분 및 전용 메달 배지를 포상받습니다.'
                        : 'Contribute to deep slippage cushions on QuipuSwap. Earn native swap fee portions plus unique visual identity markers.'
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
                  {lang === 'ko' ? '5. 로드맵 및 미래 도약' : '5. Ecosystem Roadmap'}
                </h2>
              </div>

              <div className="space-y-8 relative pl-6 border-l-2 border-slate-800 font-medium">
                {/* Milestone 1 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-950 shadow-lg animate-pulse" />
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-black uppercase rounded-lg">Q3-Q4 2025</span>
                    <h4 className="text-white font-black uppercase text-sm">Deployment & Foundation</h4>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {lang === 'ko'
                      ? '✓ 테조스 메인넷의 FA2 스마트 컨트랙트 정식 배포 완료. QuipuSwap 유동성 투입 성공. 독립 위인전 및 역사 디지털 복원 NFT 1차 포라 구축.'
                      : '✓ Successfully deployed token FA2 smart contract. Deployed QuipuSwap wXTZ/WR liquidity pools. Hosted first historical commemorative series.'
                    }
                  </p>
                </div>

                {/* Milestone 2 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 shadow-lg" />
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-black uppercase rounded-lg">Q1-Q2 2026</span>
                    <h4 className="text-white font-black uppercase text-sm">Expansion & Listing review (Current Stage)</h4>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {lang === 'ko'
                      ? '✓ 제너레이티브 작품 "장군의 결의" 및 "종로의 불꽃" 동시 통합 서비스 개시. 코인게코 등록 신청 및 글로벌 상장 심사 절차 수행.'
                      : '✓ Launched dual generative models. Currently undergoing global index review submissions (CoinGecko listing applications).'
                    }
                  </p>
                </div>

                {/* Milestone 3 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950" />
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[9px] font-black uppercase rounded-lg">Q3-Q4 2026</span>
                    <h4 className="text-white font-black uppercase text-sm">Wear OS Direct Play Ecosystem</h4>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {lang === 'ko'
                      ? '오프라인 박물관 컨설팅 연합 결성 및 동적 메타데이터 확장. 구글 플레이스토어를 통한 Wear OS 프리미엄 패키지 앱 정식 발매.'
                      : 'Establishing offline heritage partnerships. Releasing dedicated Wear OS Play Store applications for live wearable synchronization.'
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
                    본 백서에 수록된 어떠한 정보도 WRISTORY 토큰에 대한 증권, 지분 처분 제안, 채무 권한 유치 또는 자격 매칭 권고로 해석되어서는 안 됩니다. $WR 토큰은 주식회사나 공공 박물관의 물리적 주식을 뜻하지 않으며, 전적으로 아카이브 생태계 전용 디지털 유틸리티로 운용됩니다.
                  </p>
                  <p className="text-white font-bold text-sm">2. 규제 준수 의무</p>
                  <p>
                    가상 자산을 취급하는 전 세계 각국의 행정 규칙과 사법 법규는 각자 독자적이므로, 각 관할 구역에 있는 개인 혹은 단체들은 가상자산을 거래하고 보존 풀에 예치할 때 현지 국내 규제 조건을 항시 스스로 인지하고 합법적 참여 테두리를 유지해야 합니다.
                  </p>
                  <p className="text-white font-bold text-sm">3. 기술적 내재 위험</p>
                  <p>
                    분산 원장 스마트 계약 시스템은 완벽히 검증되고 고도의 전문 설계로 다듬어졌으나 온체인 트랜잭션 수수료, 네트워크 일시 중단, 외부 기술 불완정성 등 스마트컨트랙트 무결성과 관련된 일반적인 미시적 리스크가 동반될 우려가 있습니다.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-slate-400 text-xs leading-relaxed font-sans">
                  <p className="text-white font-bold text-sm">1. Non-Financial Security Statement</p>
                  <p>
                    Nothing contained herein constitutes financial advice, a regulatory prospectus, or securities offerings of physical organizations. WR is purely optimized as a virtual utility driver binding digital preservation features with customized smartwatch face profiles.
                  </p>
                  <p className="text-white font-bold text-sm">2. Compliance & Responsibility</p>
                  <p>
                    Users carry absolute responsibilities to abide by domestic laws and guidelines governing token holdings, transactions, and pool provisions in their domestic territories and jurisdictions.
                  </p>
                  <p className="text-white font-bold text-sm">3. Technology Execution Assumptions</p>
                  <p>
                    Transactions made inside distributed open-source ledger frameworks include inherent risks typical of public blockchain spaces, including congestion spikes, gas price variations, or decentralized system vulnerabilities.
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
