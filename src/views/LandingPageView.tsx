import React, { useState } from 'react';
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
  CheckCircle2,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  Eye
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

  // HD Lightbox inspection state
  const [selectedArtwork, setSelectedArtwork] = useState<any | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [viewLiveInteractive, setViewLiveInteractive] = useState<boolean>(false);

  const openHdModal = (item: any) => {
    setSelectedArtwork(item);
    setZoomLevel(1);
    setViewLiveInteractive(false);
  };

  const closeHdModal = () => {
    setSelectedArtwork(null);
    setZoomLevel(1);
    setViewLiveInteractive(false);
  };

  const recentArtworks = [
    {
      id: 'muju-firefly',
      name: 'Muju Firefly — 무주 반딧불이',
      subtitle: '부제: A Gentle Wishing Star',
      badge: '29 EDS (신작)',
      price: '30 XTZ',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibqgtl447tihtspgfjpiau2njb26lfjlygyazidbp2otb2tph62yy',
      ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibqgtl447tihtspgfjpiau2njb26lfjlygyazidbp2otb2tph62yy',
      objktUrl: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/34?ref=tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16',
      zoraUrl: 'https://zora.co/@yesoklab',
      themeColor: 'emerald',
      desc: '무주 반딧불이 축제 30주년 헌정작. 원고지 자율 타이핑 시(詩)와 밤하늘 초승달, 반딧불이 무리의 유기적 비행 제너러티브 아트. (수익금 100% 무주 청소년 시설 기부)'
    },
    {
      id: 'mugunghwa',
      name: '나라 꽃 무궁화: Bloomed by Patriots',
      subtitle: '순국선열(殉國先烈)들이 피워낸 꽃',
      badge: '80 EDS',
      price: '3 XTZ',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigxi55r2jipqmhi6pobqqxfjsermyenccuxctgmtq4r3vb6hiqo7i',
      ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigxi55r2jipqmhi6pobqqxfjsermyenccuxctgmtq4r3vb6hiqo7i',
      objktUrl: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/32',
      zoraUrl: 'https://zora.co/@yesoklab',
      themeColor: 'blue',
      desc: '독립운동가들의 넋과 한을 태극과 DLA 확산 나뭇가지, 십자수 스티치 제너러티브 기법으로 형상화한 마스터피스.'
    },
    {
      id: 'han-hon-maek',
      name: '恨·魂·脈 — Han, Hon, Maek',
      subtitle: 'WRISTORY Digital Heritage',
      badge: '33 EDS',
      price: '3 XTZ',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiho2c6bqxxhdpz6mixcjc3e6wxmamqnit5sntnrfqw5ugdzd5exum',
      ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiho2c6bqxxhdpz6mixcjc3e6wxmamqnit5sntnrfqw5ugdzd5exum',
      objktUrl: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/31',
      zoraUrl: 'https://zora.co/@yesoklab',
      themeColor: 'red',
      desc: '33인 독립운동가의 넋과 맥을 혈액이 유기적으로 맥동하듯 피어나는 제너러티브 성장 시뮬레이션(Growth Simulation) 기법으로 형상화.'
    },
    {
      id: 'energy',
      name: 'energy // Drink the Vitality!',
      subtitle: '활력을 마시자! (BACCHUS-D)',
      badge: '1.96K Eds',
      price: '대표작',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu',
      ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu',
      objktUrl: 'https://objkt.com/tokens/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU/36',
      themeColor: 'amber',
      desc: '자양강장제 박카스(1963) 오마주. 멈춰있던 톱니바퀴가 활력의 에너지를 만나 다시 힘차게 돌아가는 웹 표준 Canvas 대표작.'
    }
  ];

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

      {/* 5. YesOkLab Masterpiece Spotlight: 순국선열(殉國先烈)들이 피워낸 나라 꽃 무궁화 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-rose-950/40 via-slate-900 to-indigo-950/40 border-2 border-rose-500/40 p-6 sm:p-10 shadow-2xl overflow-hidden text-left group">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
            {/* Masterpiece Artwork Image Box */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-rose-500/30 bg-black shadow-2xl group/img">
                <img 
                  src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigxi55r2jipqmhi6pobqqxfjsermyenccuxctgmtq4r3vb6hiqo7i" 
                  alt="순국선열(殉國先烈)들이 피워낸 나라 꽃 무궁화 - YesOkLab Masterpiece"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to IPFS.io if Pinata mirror has latency
                    (e.target as HTMLImageElement).src = 'https://ipfs.io/ipfs/bafybeigxi55r2jipqmhi6pobqqxfjsermyenccuxctgmtq4r3vb6hiqo7i';
                  }}
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 bg-gradient-to-r from-rose-600 to-red-600 text-white text-[11px] font-black uppercase rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles size={12} className="text-yellow-200 animate-spin" /> YesOkLab 공식 대표작
                  </span>
                  <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/20 text-slate-200 text-[10px] font-mono font-bold rounded-full">
                    80 Eds
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-rose-500/40 rounded-full text-[11px] font-mono font-bold text-rose-300">
                  3 XTZ • DLA 십자수
                </div>
              </div>
            </div>

            {/* Masterpiece Content & Narrative */}
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-black uppercase rounded-full">
                  NEW MINT • PATRIOTIC LEGACY #32
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold rounded-full">
                  DLA Algorithm / Cross-Stitch Generative Art
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-white italic uppercase tracking-tight">
                  순국선열이 피워낸 나라 꽃 무궁화
                </h2>
                <p className="text-rose-400 font-bold text-sm sm:text-base mt-1">
                  "대한민국 독립운동가들의 넋과 한, 나라 사랑의 마음이 무궁화로 피어납니다."
                </p>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 sm:p-5 rounded-2xl border border-white/5">
                <p>
                  일제강점기(日帝強占期), 조국의 독립을 위해 헌신하고 목숨 바친 <b>대한민국 독립운동가들의 영혼을 자수 실로 감싸 담은</b> 제너러티브 마스터피스입니다.
                  중앙의 작은 태극이 먼저 자라난 뒤, 한지빛 바탕 위로 먹빛 가지가 <b>확산제한응집(DLA)</b> 알고리즘으로 뻗어나가며 가지 끝에서 이따금 무궁화가 피어납니다.
                </p>
                <p className="text-slate-400 border-t border-slate-800 pt-2 text-xs">
                  💡 태극부터 테두리까지 모든 요소를 <b>하나의 십자수 스티치</b>로 통일하여 그려 전체가 한 장의 섬세한 전통 자수처럼 펼쳐집니다. 성장은 완전히 자율적으로 시작·확산·개화한 뒤 스스로 멈추어 고유한 형태로 온체인에 영구히 정지·보존됩니다.
                </p>
                <p className="text-[#00ffcc] font-bold text-xs">
                  "Mugunghwa (無窮花) — The flower that never fades. 영원히 지지 않는 무궁화처럼 순국선열의 숭고한 보국의 넋은 블록체인 위에서 영원합니다."
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/32"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 hover:from-rose-500 hover:to-red-500 text-white rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-rose-600/30 active:scale-95"
                >
                  <Sparkles size={16} /> OBJKT 대표작 감상 및 소장하기 <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigxi55r2jipqmhi6pobqqxfjsermyenccuxctgmtq4r3vb6hiqo7i"
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

      {/* 6. Featured Heritage Highlights (Clean 4-Card Grid with Pinata Gateways & HD Touch Zoom) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-amber-400" />
              <h2 className="text-lg sm:text-2xl font-black text-white italic tracking-tight uppercase">
                {lang === 'ko' ? '최근 민팅 작품 (Recent Mintings)' : 'Recent Mintings & Curated Highlights'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'ko' 
                ? '작품 이미지를 터치(클릭)하면 무손실 고화질(HD) 확대 및 라이브 캔버스를 감상하실 수 있습니다.'
                : 'Touch or click any artwork image to view in ultra-high resolution (HD) or interactive live canvas.'}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => { onNavigate('COLLECTIONS'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-3.5 py-1.5 bg-blue-600/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Eye size={14} /> {lang === 'ko' ? '전체 컬렉션 허브' : 'Collections Hub'} <ChevronRight size={14} />
            </button>
            <a 
              href="https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
            >
              OBJKT <ChevronRight size={13} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {recentArtworks.map((art) => (
            <div 
              key={art.id}
              className={`bg-slate-900/70 border rounded-2xl overflow-hidden transition-all flex flex-col justify-between group shadow-lg ${
                art.id === 'muju-firefly'
                  ? 'border-emerald-500/50 shadow-emerald-500/10 hover:border-emerald-400'
                  : art.id === 'mugunghwa'
                  ? 'border-blue-500/40 shadow-blue-500/10 hover:border-blue-400'
                  : art.id === 'han-hon-maek'
                  ? 'border-red-500/40 shadow-red-500/10 hover:border-red-400'
                  : 'border-amber-500/40 shadow-amber-500/10 hover:border-amber-400'
              }`}
            >
              {/* Thumbnail Container with Touch to Zoom action */}
              <div 
                onClick={() => openHdModal(art)}
                className="relative aspect-[16/10] bg-black/90 overflow-hidden flex items-center justify-center cursor-pointer group/img"
                title={lang === 'ko' ? '클릭하여 고화질 확대' : 'Click to inspect in HD'}
              >
                <img 
                  src={art.image} 
                  alt={art.name} 
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ipfs.io/ipfs/${art.ipfsUrl.split('/ipfs/')[1] || ''}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-[2px]">
                  <Maximize2 size={16} className="text-amber-400" />
                  <span>{lang === 'ko' ? '터치하여 HD 확대' : 'HD Inspect'}</span>
                </div>
                <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 text-white text-[10px] font-black uppercase rounded-md shadow ${
                  art.id === 'muju-firefly' 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-500' 
                    : art.id === 'mugunghwa'
                    ? 'bg-blue-600'
                    : art.id === 'han-hon-maek'
                    ? 'bg-red-600'
                    : 'bg-amber-600'
                }`}>
                  {art.badge}
                </span>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/85 text-[10px] font-mono text-amber-300 rounded border border-white/10">
                  {art.price}
                </span>
              </div>

              {/* Information & Action Links */}
              <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-black text-white uppercase italic group-hover:text-amber-400 transition-colors line-clamp-1">
                    {art.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {art.desc}
                  </p>
                </div>
                <div className="space-y-1.5 pt-1">
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() => openHdModal(art)}
                      className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 border border-slate-700"
                    >
                      <Maximize2 size={12} className="text-amber-400" /> {lang === 'ko' ? 'HD 확대' : 'HD Zoom'}
                    </button>
                    <a 
                      href={art.objktUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-1.5 bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-white rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 border border-amber-500/30"
                    >
                      OBJKT <ArrowUpRight size={11} />
                    </a>
                  </div>
                  {art.zoraUrl && (
                    <a 
                      href={art.zoraUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-1 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1 border border-blue-500/30"
                    >
                      Zora 온체인 코인 감상 <ArrowUpRight size={10} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HD Lightbox Inspection Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeHdModal}
        >
          {/* Modal Header */}
          <div 
            className="max-w-6xl mx-auto w-full flex items-center justify-between pb-3 border-b border-white/10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-500 text-black text-[10px] font-black rounded uppercase">
                  {selectedArtwork.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold line-clamp-1">{selectedArtwork.name}</h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{selectedArtwork.subtitle} • {selectedArtwork.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.5))}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-xs font-mono text-amber-400 font-bold px-1">{Math.round(zoomLevel * 100)}%</span>
              <button 
                onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.5))}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
              <button 
                onClick={closeHdModal}
                className="p-2 bg-red-600/30 hover:bg-red-600 rounded-lg text-white transition-colors ml-2"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Body / Viewer */}
          <div 
            className="flex-1 max-w-6xl mx-auto w-full flex items-center justify-center overflow-auto my-3 p-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="relative transition-transform duration-200 origin-center flex items-center justify-center max-w-full max-h-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {viewLiveInteractive ? (
                <iframe 
                  src={selectedArtwork.ipfsUrl} 
                  title={selectedArtwork.name}
                  className="w-[85vw] max-w-[800px] h-[70vh] max-h-[600px] border border-white/20 rounded-xl bg-black shadow-2xl"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <img 
                  src={selectedArtwork.image} 
                  alt={selectedArtwork.name} 
                  className="max-w-[90vw] max-h-[72vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ipfs.io/ipfs/${selectedArtwork.ipfsUrl.split('/ipfs/')[1] || ''}`;
                  }}
                />
              )}
            </div>
          </div>

          {/* Modal Footer with Actions */}
          <div 
            className="max-w-6xl mx-auto w-full pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setViewLiveInteractive(!viewLiveInteractive)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  viewLiveInteractive 
                    ? 'bg-amber-500 text-black border-amber-400' 
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                }`}
              >
                {viewLiveInteractive ? '정적 고화질 이미지 보기' : '라이브 캔버스 인터랙티브 모드 실행'}
              </button>
              <a 
                href={selectedArtwork.ipfsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
              >
                IPFS 원본 게이트웨이 열기 <ExternalLink size={12} />
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a 
                href={selectedArtwork.objktUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-lg text-xs transition-colors flex items-center gap-1"
              >
                OBJKT 토큰 확인 <ArrowUpRight size={13} />
              </a>
              {selectedArtwork.zoraUrl && (
                <a 
                  href={selectedArtwork.zoraUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center gap-1"
                >
                  Zora 코인 <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

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
