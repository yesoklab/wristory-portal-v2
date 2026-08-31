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
  const GECKOTERMINAL_URL = 'https://www.geckoterminal.com/ko/base/pools/0x637667a6d1aba931cb2c827645a5c5ee0af58a86df1c8bd28a467020a74b933a';

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
                  <b className="text-[#00ffcc]">[Live DEX]</b> $WR <b>Uniswap v4 ($0.04416 / $3.8K+ 유동성)</b> 가동 & <b>GeckoTerminal</b> 실시간 차트 연동
                </>
              ) : (
                <>
                  <b className="text-[#00ffcc]">[LIVE DEX]</b> $WR <b>Uniswap v4 ($0.04416 / $3.8K+ Liquidity)</b> Live & <b>GeckoTerminal</b> Chart Active
                </>
              )}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
            <a
              href={GECKOTERMINAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-bold transition-all flex items-center gap-1 active:scale-95"
            >
              <TrendingUp size={13} className="text-amber-400" /> GeckoTerminal 차트 <ExternalLink size={11} />
            </a>
            <a
              href={UNISWAP_SWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-black transition-all flex items-center gap-1 shadow-md shadow-emerald-600/30 active:scale-95"
            >
              <Coins size={13} /> Uniswap v4 스왑 <ExternalLink size={12} />
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
              href={GECKOTERMINAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-bold transition-all"
            >
              <TrendingUp size={13} className="text-amber-400" />
              GeckoTerminal Live ($0.04416) <ExternalLink size={11} />
            </a>
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

          {/* Key Metrics Dashboard with Uniswap v4 live stats & GeckoTerminal */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto bg-slate-950/70 border border-slate-800/80 p-3 sm:p-5 rounded-2xl relative z-10">
            <div className="text-center">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Token Price</p>
              <p className="text-xs sm:text-lg font-black text-amber-400 font-mono mt-0.5">$0.04416 USD</p>
            </div>
            <div className="text-center border-l border-slate-800 sm:border-x">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Active Liquidity</p>
              <p className="text-xs sm:text-lg font-black text-emerald-400 font-mono mt-0.5">$3,684.24+</p>
            </div>
            <div className="text-center border-t sm:border-t-0 border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Pool Fee & Pair</p>
              <p className="text-xs sm:text-lg font-black text-cyan-300 font-mono mt-0.5">ETH / WR (0.25%)</p>
            </div>
            <div className="text-center border-t sm:border-t-0 border-l border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">FDV / Cap</p>
              <p className="text-xs sm:text-lg font-black text-[#00ffcc] font-mono mt-0.5">~$2,260,000</p>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 relative z-10">
            <a
              href={GECKOTERMINAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl text-xs sm:text-sm font-black uppercase transition-all shadow-lg shadow-amber-600/30 flex items-center gap-2 active:scale-95"
            >
              <TrendingUp size={16} /> {lang === 'ko' ? 'GeckoTerminal 실시간 차트' : 'GeckoTerminal Live Chart'} <ArrowUpRight size={14} />
            </a>
            <a
              href={UNISWAP_SWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs sm:text-sm font-black uppercase transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2 active:scale-95"
            >
              <Coins size={16} /> {lang === 'ko' ? 'Uniswap v4 에서 $WR 거래하기' : 'Trade $WR on Uniswap v4'} <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => onNavigate('MIGRATION')}
              className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs sm:text-sm font-black uppercase transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 active:scale-95"
            >
              <ArrowRightLeft size={16} /> {lang === 'ko' ? 'Base 1:1 토큰 마이그레이션 포털' : 'Base 1:1 Migration Portal'}
            </button>
          </div>
        </div>
      </section>

      {/* 3. Live Uniswap v4 & GeckoTerminal Feature Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950/30 to-amber-950/20 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase rounded-full flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Uniswap v4 (Base) Active & In-Range
              </span>
              <a 
                href={GECKOTERMINAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-black uppercase rounded-full flex items-center gap-1.5 transition-all"
              >
                <TrendingUp size={13} /> GeckoTerminal Tracked ($0.04416) <ExternalLink size={10} />
              </a>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono font-bold rounded-full">
                Pool #2953119
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white italic uppercase">
              {lang === 'ko' ? 'ETH / WR 유니스왑 v4 공식 풀 & 실시간 GeckoTerminal 차트 가동' : 'Official ETH / WR Uniswap v4 Pool & GeckoTerminal Live Chart'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {lang === 'ko'
                ? '이더리움 Layer-2 Base 네트워크 상에 Uniswap v4 집중 유동성(Concentrated Liquidity, $3,684+) 풀이 안착되었으며, GeckoTerminal에서 실시간 캔들스틱 차트, 체결 내역(트랜잭션), 유동성 지표를 투명하게 확인하실 수 있습니다.'
                : 'Concentrated liquidity ($3,684+) on Uniswap v4 (Base Mainnet) is verified and live. Track real-time candlesticks, volume, and verified transactions transparently on GeckoTerminal.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={GECKOTERMINAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-600/30 active:scale-95"
            >
              <TrendingUp size={16} /> {lang === 'ko' ? 'GeckoTerminal 차트 보기' : 'GeckoTerminal Chart'} <ExternalLink size={13} />
            </a>
            <a
              href={UNISWAP_SWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95"
            >
              <Coins size={16} /> {lang === 'ko' ? '유니스왑에서 $WR 스왑' : 'Swap $WR on Uniswap'} <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Dedicated Creator & Snapshot Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-purple-950/30 via-slate-900 to-blue-950/30 border border-purple-500/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-black uppercase">
              <Camera size={14} /> OBJKT & Web3 Generative Creators Notice
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white italic uppercase">
              {lang === 'ko' ? 'OBJKT 창작자 및 테조스 홀더 스냅샷 100% 보장' : 'Guaranteed 1:1 Parity for OBJKT Artists & Tezos Holders'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {lang === 'ko'
                ? '기존 테조스 블록체인 및 OBJKT에서 발행·소장된 모든 $WR 및 헤리티지 NFT의 가치는 Base L2 생태계로 1:1 안전하게 이어집니다. 스냅샷 데이터베이스를 통해 즉시 신청하세요.'
                : 'All $WR and historical NFTs minted on Tezos FA2 & OBJKT are recognized in the Base ecosystem via on-chain snapshots. Submit your Tezos address to claim your Base $WR.'}
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

      {/* 5. YesOkLab Masterpiece Spotlight: energy // Drink the Vitality! */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-indigo-950/40 border-2 border-amber-500/40 p-6 sm:p-10 shadow-2xl overflow-hidden text-left group">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
            {/* Masterpiece Artwork Image Box */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-amber-500/30 bg-black shadow-2xl group/img">
                <img 
                  src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu" 
                  alt="energy // Drink the Vitality! - YesOkLab Masterpiece"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to IPFS.io if Pinata mirror has latency
                    (e.target as HTMLImageElement).src = 'https://ipfs.io/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu';
                  }}
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[11px] font-black uppercase rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles size={12} className="text-yellow-200 animate-spin" /> YesOkLab 대표작
                  </span>
                  <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/20 text-slate-200 text-[10px] font-mono font-bold rounded-full">
                    1.96K Eds
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-amber-500/40 rounded-full text-[11px] font-mono font-bold text-amber-300">
                  BACCHUS-D 1963
                </div>
              </div>
            </div>

            {/* Masterpiece Content & Narrative */}
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-black uppercase rounded-full">
                  NEW MINT • Tezos / OBJKT
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold rounded-full">
                  HTML5 Canvas / Interactive Generative Art
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-white italic uppercase tracking-tight">
                  energy // Drink the Vitality!
                </h2>
                <p className="text-amber-400 font-bold text-sm sm:text-base mt-1">
                  "멈춰있던 톱니바퀴가 다시 힘차게 맞물려 돌아가기 시작합니다!"
                </p>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 sm:p-5 rounded-2xl border border-white/5">
                <p>
                  대한민국 서민들의 고단한 삶을 위로하고 피로를 풀어주던 상징적인 자양강장제 <b>'박카스'</b>를 오마주한 인터랙티브 제너러티브 아트입니다. 
                  무뎌지고 지쳐있던 일상의 톱니바퀴가 '활력'이라는 에너지를 만나 청색과 적색의 역동적인 엔진으로 가속하며 파티클을 뿜어내는 순간을 시각화했습니다.
                </p>
                <p className="text-slate-400 border-t border-slate-800 pt-2 text-xs">
                  💡 <b>순수 웹 표준(HTML5 Canvas/Vanilla JS)</b> 기술로 외부 라이브러리 없이 구현되어 블록체인상에 영구 보존되며, 감상자의 화면에서 실시간 난수(Seed)를 통해 살아 움직입니다.
                </p>
                <p className="text-[#00ffcc] font-bold text-xs">
                  "지난 좌절을 딛고 다시 일어서는 모든 이들에게 바칩니다. 화면 속 힘차게 돌아가는 에너지를 통해 일상 속 작은 활력을 충전하시길 바랍니다. Drive Your Energy!"
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://objkt.com/tokens/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU/36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-white rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-amber-600/30 active:scale-95"
                >
                  <Sparkles size={16} /> OBJKT 대표작 감상 및 소장하기 <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://ipfs.io/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-xs uppercase transition-all flex items-center gap-1.5 border border-slate-700 active:scale-95"
                >
                  IPFS 원본 확인 <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Heritage Highlights (Clean 3-Card Grid with Pinata Gateways) */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* Card 1: 恨·魂·脈 — Han, Hon, Maek (NEW MINT) */}
          <div className="bg-slate-900/60 border-2 border-red-500/50 rounded-2xl overflow-hidden hover:border-red-400 transition-all flex flex-col justify-between group shadow-lg shadow-red-500/10">
            <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiho2c6bqxxhdpz6mixcjc3e6wxmamqnit5sntnrfqw5ugdzd5exum" 
                alt="恨·魂·脈 — Han, Hon, Maek / WRISTORY" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ipfs.io/ipfs/bafybeiho2c6bqxxhdpz6mixcjc3e6wxmamqnit5sntnrfqw5ugdzd5exum';
                }}
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-red-600 to-amber-600 text-white text-[10px] font-black uppercase rounded-md shadow flex items-center gap-1">
                <Sparkles size={11} /> NEW MINT • 33 EDS
              </span>
              <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-mono text-red-300 rounded border border-red-500/30">
                3 XTZ • 성장 시뮬레이션
              </span>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-black text-white uppercase italic group-hover:text-red-400 transition-colors">
                  恨·魂·脈 — Han, Hon, Maek
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  33인 독립운동가의 넋과 맥을 혈액이 맥동하듯 캔버스 위로 피어나는 제너러티브 성장 시뮬레이션으로 형상화.
                </p>
              </div>
              <a 
                href="https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/31" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 border border-red-500/30"
              >
                OBJKT 토큰 감상 <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Card 2: energy // Drink the Vitality! */}
          <div className="bg-slate-900/60 border border-amber-500/40 rounded-2xl overflow-hidden hover:border-amber-400 transition-all flex flex-col justify-between group shadow-lg shadow-amber-500/10">
            <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu" 
                alt="energy // Drink the Vitality!" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ipfs.io/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu';
                }}
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black uppercase rounded-md shadow">
                대표작 (1.96K Eds)
              </span>
              <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-mono text-amber-300 rounded">
                BACCHUS-D
              </span>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-black text-white uppercase italic group-hover:text-amber-400 transition-colors">
                  energy // Drink the Vitality!
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  자양강장제 박카스 오마주. 멈춰있던 톱니바퀴가 활력의 에너지를 만나 다시 힘차게 돌아가는 제너러티브 아트.
                </p>
              </div>
              <a 
                href="https://objkt.com/tokens/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU/36" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 border border-amber-500/30"
              >
                OBJKT 토큰 감상 <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Card 3: 미투리, 천리 — 心山 金昌淑 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-lg">
            <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigu3hj4bn57tiaspisityhze54sr2xzrckkkfmzk4lxfw7c4vpy3u" 
                alt="미투리, 천리 — 心山 金昌淑" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ipfs.io/ipfs/bafybeigu3hj4bn57tiaspisityhze54sr2xzrckkkfmzk4lxfw7c4vpy3u';
                }}
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-amber-600 text-white text-[10px] font-black uppercase rounded-md shadow">
                82 eds
              </span>
              <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] font-mono text-amber-300 rounded">
                PATRIOTIC LEGACY
              </span>
            </div>
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-black text-white uppercase italic group-hover:text-amber-400 transition-colors">
                  미투리, 천리 — 心山 金昌淑
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  1919 파리장서 주도자 심산 김창숙 선생. 짚신(미투리) 발자국이 쌓이며 초상이 드러나는 Canvas 제너러티브 아트.
                </p>
              </div>
              <a 
                href="https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/30" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 border border-amber-500/30"
              >
                OBJKT 토큰 감상 <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Card 4: The Admiral's Resolve */}
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
                <h3 className="text-base font-black text-white uppercase italic">The Admiral's Resolve</h3>
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
                ? '기존 1,063명의 홀더 및 OBJKT 창작자분들을 위해 1 Tezos WR = 1 Base WR (1:1 비율)로 수수료 없이 안전한 교환을 지원합니다.'
                : 'Zero slippage, zero commission fee 1:1 migration for all 1,063 Tezos holders and OBJKT artists.'}
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
