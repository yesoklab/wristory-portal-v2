import React from 'react';
import { 
  ArrowRightLeft, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Layers,
  Flame,
  Globe,
  ChevronRight,
  TrendingUp,
  Camera,
  Share2,
  Coins,
  CheckCircle2
} from 'lucide-react';

interface LandingPageViewProps {
  lang: 'ko' | 'en';
  onNavigate: (tab: any) => void;
  hasApiKey?: boolean;
}

const LandingPageView: React.FC<LandingPageViewProps> = ({ lang, onNavigate }) => {
  const BASE_CONTRACT = '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7';
  const UNISWAP_V4_POSITION_URL = 'https://app.uniswap.org/positions/v4/base/2953119';
  const UNISWAP_SWAP_URL = 'https://app.uniswap.org/swap?outputCurrency=0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7&chain=base';

  return (
    <div className="animate-in fade-in duration-500 space-y-12 sm:space-y-16 pb-16">
      {/* 1. Top Notice Bar: Base Migration Announcement & Direct Portal Link */}
      <div className="bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-purple-900/50 border-b border-blue-500/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ffcc] animate-ping" />
            <span className="text-xs font-bold text-slate-200">
              {lang === 'ko' ? (
                <>
                  <b className="text-[#00ffcc]">[공지]</b> $WR 토큰 <b>Uniswap v4 (Base)</b> 유동성 풀 공식 개설 (56,801 WR = 1 ETH) & 1:1 마이그레이션 진행 중
                </>
              ) : (
                <>
                  <b className="text-[#00ffcc]">[LIVE]</b> $WR <b>Uniswap v4 (Base)</b> Pool Activated (56,801 WR = 1 ETH) & 1:1 Swap Live
                </>
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={UNISWAP_SWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-black transition-all flex items-center gap-1 shadow-md shadow-emerald-600/30 active:scale-95"
            >
              <TrendingUp size={13} /> Uniswap v4 스왑 <ExternalLink size={12} />
            </a>
            <button 
              onClick={() => onNavigate('MIGRATION')}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-black transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/30 active:scale-95"
            >
              <ArrowRightLeft size={13} /> {lang === 'ko' ? '1:1 토큰 교환 포털' : '1:1 Swap Portal'} <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hero Section (Base & Tezos Dual Ecosystem) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950/90 border border-slate-800 p-6 sm:p-12 text-center space-y-6 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f615_0%,_transparent_70%)] pointer-events-none" />

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] font-bold">
              <ShieldCheck size={14} /> Ethereum Layer-2 (Base Mainnet)
            </span>
            <a 
              href={UNISWAP_V4_POSITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Uniswap v4 Live (Base #2953119) <ExternalLink size={11} />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-bold">
              <Camera size={14} /> 1,063 Snapshot Wallets
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2 relative z-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase italic">
              THE BRIDGE OF TIME & HERITAGE
            </h1>
            <p className="text-sm sm:text-lg text-[#00ffcc] font-bold">
              {lang === 'ko' ? '역사는 블록체인 위에서 영원히 살아 숨 쉽니다.' : 'History breathes eternal life upon the blockchain.'}
            </p>
          </div>

          {/* Key Metrics Dashboard with Uniswap v4 live stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto bg-slate-950/70 border border-slate-800/80 p-3 sm:p-5 rounded-2xl relative z-10">
            <div className="text-center">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Total Supply</p>
              <p className="text-xs sm:text-lg font-black text-amber-400 font-mono mt-0.5">51,169,148 WR</p>
            </div>
            <div className="text-center border-l border-slate-800 sm:border-x">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Uniswap v4 Rate</p>
              <p className="text-xs sm:text-lg font-black text-emerald-400 font-mono mt-0.5">56,801 WR = 1 ETH</p>
            </div>
            <div className="text-center border-t sm:border-t-0 border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Pool Fee Tier</p>
              <p className="text-xs sm:text-lg font-black text-cyan-300 font-mono mt-0.5">0.25% (Base L2)</p>
            </div>
            <div className="text-center border-t sm:border-t-0 border-l border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Snapshot Holders</p>
              <p className="text-xs sm:text-lg font-black text-[#00ffcc] font-mono mt-0.5">1,063 Wallets</p>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 relative z-10">
            <a
              href={UNISWAP_SWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs sm:text-sm font-black uppercase transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2 active:scale-95"
            >
              <TrendingUp size={16} /> {lang === 'ko' ? 'Uniswap v4 에서 $WR 거래하기' : 'Trade $WR on Uniswap v4'} <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => onNavigate('MIGRATION')}
              className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs sm:text-sm font-black uppercase transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 active:scale-95"
            >
              <ArrowRightLeft size={16} /> {lang === 'ko' ? 'Base 1:1 토큰 마이그레이션 포털' : 'Base 1:1 Migration Portal'}
            </button>
            <a
              href="https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs sm:text-sm font-bold uppercase transition-all flex items-center gap-2 active:scale-95 border border-slate-700"
            >
              OBJKT / FXHASH Archive <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => onNavigate('WHITEPAPER')}
              className="px-4 py-3 bg-slate-900/90 hover:bg-slate-800 text-blue-300 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 border border-blue-500/20"
            >
              {lang === 'ko' ? '백서 v2.0 확인' : 'Whitepaper v2.0'} <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Live Uniswap v4 Pool Feature Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-blue-950/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase rounded-full flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Uniswap v4 (Base) Active & In-Range
              </span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono font-bold rounded-full">
                Position ID #2953119
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white italic uppercase">
              {lang === 'ko' ? 'ETH / WR 유니스왑 v4 공식 풀 가동' : 'Official ETH / WR Uniswap v4 Pool Live'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {lang === 'ko'
                ? '이더리움 Layer-2 Base 네트워크 상에 Uniswap v4 집중 유동성(Concentrated Liquidity) 풀이 성공적으로 공급되었습니다. 0.25% 수수료 등급으로 슬리피지 없이 즉시 거래 가능합니다.'
                : 'Concentrated liquidity on Uniswap v4 (Base Mainnet) is officially live with an ETH/WR trading pair and 0.25% fee tier for deep and capital-efficient swaps.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={UNISWAP_SWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95"
            >
              <TrendingUp size={16} /> {lang === 'ko' ? '유니스왑에서 $WR 스왑하기' : 'Swap $WR Now'} <ArrowUpRight size={14} />
            </a>
            <a
              href={UNISWAP_V4_POSITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 border border-emerald-500/30"
            >
              포지션 보기 <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Dedicated Creator & Snapshot Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-purple-950/30 via-slate-900 to-blue-950/30 border border-purple-500/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-black uppercase">
              <Camera size={14} /> FXHASH & OBJKT Generative Creators Notice
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white italic uppercase">
              {lang === 'ko' ? 'FXHASH & OBJKT 창작자 및 테조스 홀더 스냅샷 100% 보장' : 'Guaranteed 1:1 Parity for FXHASH Artists & Tezos Holders'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {lang === 'ko'
                ? '기존 테조스 블록체인에서 발행 및 소장된 모든 $WR 및 헤리티지 NFT의 가치는 Base L2 생태계로 1:1 안전하게 이어집니다. 스냅샷 데이터베이스를 통해 즉시 신청하세요.'
                : 'All $WR and historical NFTs minted on Tezos FA2 are recognized in the Base ecosystem via on-chain snapshots. Submit your Tezos address to claim your Base $WR.'}
            </p>
          </div>
          <button
            onClick={() => { onNavigate('MIGRATION'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-purple-600/30 active:scale-95"
          >
            <ArrowRightLeft size={16} /> {lang === 'ko' ? '스냅샷 확인 & 신청하기' : 'Verify & Migrate'}
          </button>
        </div>
      </section>

      {/* 5. Featured Heritage Highlights (Clean 3-Card Grid with Pinata Gateways) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-amber-400" />
            <h2 className="text-lg sm:text-2xl font-black text-white italic tracking-tight uppercase">
              {lang === 'ko' ? '주요 헤리티지 & 디지털 복원 작품' : 'Featured Heritage & Restored Collections'}
            </h2>
          </div>
          <a 
            href="https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
          >
            OBJKT All <ChevronRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1: The Flame of Jongno */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all flex flex-col justify-between group">
            <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeicey3fp3obxmfudp2lua7eftk4zxjxlfsshgjrcbvlqb6igj6xkxi" 
                alt="The Flame of Jongno" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-purple-600 text-white text-[10px] font-black uppercase rounded-md shadow">
                Generative Edition
              </span>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-white uppercase italic">The Flame of Jongno</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  종로의 독립 투쟁과 꺼지지 않는 애국의 불꽃을 제너레이티브 알고리즘으로 시각화한 작품.
                </p>
              </div>
              <a 
                href="https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 border border-purple-500/30"
              >
                OBJKT 컬렉션 탐색 <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Card 2: The Reckoning: Sparks of Justice */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500/40 transition-all flex flex-col justify-between group">
            <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeidriys7hi7mysqzw3ghebanny3k6r232o5bul7272pi2dczmnif7a" 
                alt="The Reckoning: Sparks of Justice" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-black uppercase rounded-md shadow">
                21 eds / Sparks of Justice
              </span>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-white uppercase italic">The Reckoning: Sparks of Justice</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  "백성은 가난보다 불공정에 분노한다!" — 정의의 불꽃과 제너레이티브 프랙처 알고리즘으로 탄생한 21점 한정 에디션.
                </p>
              </div>
              <a 
                href="https://objkt.com/tokens/KT1Kd5mM8CKMxR7rotfK5QNP8V33A5zj6yQk/18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 border border-red-500/30"
              >
                OBJKT 토큰 보기 <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Card 3: The Admiral's Resolve */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeifmpdjsm6intedpfdk5tq5nyv7qgxc6mbmaqm7hmg2rt7mlucddwu" 
                alt="The Admiral's Resolve" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-blue-600 text-white text-[10px] font-black uppercase rounded-md shadow">
                Heritage Edition
              </span>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black text-white uppercase italic">The Admiral's Resolve</h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  이순신 장군의 필사즉생의 위대한 결의와 숭고한 보국의 마음을 보존한 온체인 에디션.
                </p>
              </div>
              <a 
                href="https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 border border-blue-500/30"
              >
                OBJKT 토큰 보기 <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Migration Callout Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-left">
          <div className="space-y-2">
            <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Base L2 Migration</span>
            <h3 className="text-2xl font-black text-white uppercase italic">
              {lang === 'ko' ? '테조스에서 보유 중인 $WR을 Base $WR로 1:1 교환하세요' : 'Migrate your Tezos $WR to Base $WR (1:1 Ratio)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {lang === 'ko'
                ? '기존 1,063명의 홀더 및 FXHASH/OBJKT 창작자분들을 위해 1 Tezos WR = 1 Base WR (1:1 비율)로 수수료 없이 안전한 교환을 지원합니다.'
                : 'Zero slippage, zero commission fee 1:1 migration for all 1,063 Tezos holders and generative artists.'}
            </p>
          </div>
          <button
            onClick={() => { onNavigate('MIGRATION'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-blue-600/30 active:scale-95"
          >
            <ArrowRightLeft size={16} /> {lang === 'ko' ? '1:1 마이그레이션 포털 이동' : 'Open Migration Portal'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPageView;
