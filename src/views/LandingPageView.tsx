import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Globe, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Github, 
  Lock, 
  Smartphone, 
  CheckCircle2,
  Droplets,
  BarChart3,
  ArrowRightLeft,
  Loader2,
  Timer,
  Twitter,
  Send,
  Mail,
  Gamepad2,
  Share2,
  Radio,
  Flame,
  Layers
} from 'lucide-react';

interface Props {
  lang: 'ko' | 'en';
  onNavigate: (tab: any) => void;
  hasApiKey: boolean;
}

const CollectorAccess: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const watchfaces = [
    { name: 'LOH Watchface B_03', id: 'com.LOH_B_02', url: 'https://play.google.com/store/apps/details?id=com.LOH_B_02' },
    { name: 'LOH Watchface B_04', id: 'com.LOH_B_03', url: 'https://play.google.com/store/apps/details?id=com.LOH_B_03' },
    { name: 'Admiral Yi_01', id: 'com.AdmiralYi_01', url: 'https://play.google.com/store/apps/details?id=com.AdmiralYi_01' },
    { name: 'Admiral Yi_02', id: 'com.AdmiralYi_02', url: 'https://play.google.com/store/apps/details?id=com.AdmiralYi_02' },
  ];

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 1500);
  };

  if (isVerified) {
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in zoom-in duration-300">
        {watchfaces.map((wf, i) => (
          <div key={i} className="bg-slate-900/80 border border-blue-500/30 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-blue-500 transition-all">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400">
              <Smartphone size={24} />
            </div>
            <div className="text-center">
              <h4 className="text-white font-bold text-xs uppercase">{wf.name}</h4>
              <p className="text-slate-500 text-[9px] font-mono mt-0.5">{wf.id}</p>
            </div>
            <a 
              href={wf.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-[10px] font-bold uppercase transition-all flex items-center justify-center gap-1.5"
            >
              Google Play <ExternalLink size={11} />
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button 
        onClick={handleVerify}
        disabled={isVerifying}
        className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-slate-950 rounded-2xl font-black text-sm sm:text-base hover:bg-blue-500 hover:text-white transition-all shadow-xl flex items-center gap-3 disabled:opacity-50 active:scale-95"
      >
        {isVerifying ? (
          <>검증 중... <Loader2 size={18} className="animate-spin" /></>
        ) : (
          <>지갑 인증 후 다운로드 <ShieldCheck size={18} /></>
        )}
      </button>
      <p className="text-slate-400 text-[11px] font-medium flex items-center gap-1.5">
        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" /> Tezos 메인넷 NFT 보유 여부를 실시간으로 확인합니다.
      </p>
    </div>
  );
};

const LandingPageView: React.FC<Props> = ({ onNavigate, hasApiKey }) => {
  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const githubUrl = 'https://github.com/yesoklab/wristory-portal-v2';
  const quipuSwapUrl = 'https://quipuswap.com/liquidity/cpmm/add/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH-KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0';

  return (
    <div className="animate-in fade-in duration-500 space-y-12 sm:space-y-16 pb-16">
      {/* 1. Top Notice / fxhash Quick Bar */}
      <div className="bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40 border-b border-purple-500/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-slate-200">
              신규 제너레이티브 작품 <b className="text-purple-300">"종로의 불꽃"</b> & <b className="text-indigo-300">"이순신 장군의 결의"</b> 공개
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onNavigate('FXHASH')}
              className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1 shadow-sm"
            >
              <Flame size={12} /> fxhash 전용관 가기 <ArrowUpRight size={12} />
            </button>
            <a 
              href="https://wristory.tez.page" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-purple-300 rounded-lg text-xs font-bold transition-all flex items-center gap-1 border border-purple-500/20"
            >
              <Globe size={12} /> wristory.tez <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Hero Section (Compact & Mobile-Optimized) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-950/90 border border-slate-800 p-6 sm:p-12 text-center space-y-6 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f615_0%,_transparent_70%)] pointer-events-none" />

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
              <ShieldCheck size={14} /> Tezos Mainnet Live
            </span>
            <a 
              href="https://wristory.tez.page" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-bold hover:bg-purple-500/20 transition-all"
            >
              <Globe size={14} /> wristory.tez (Web3 IPFS) <ArrowUpRight size={11} />
            </a>
          </div>

          {/* Main Title */}
          <div className="space-y-2 relative z-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase italic">
              THE BRIDGE OF TIME
            </h1>
            <p className="text-sm sm:text-lg text-[#00ffcc] font-bold">
              역사는 블록체인 위에서 영원히 살아 숨 쉽니다.
            </p>
          </div>

          {/* Key Metrics Dashboard (Compact) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto bg-slate-950/70 border border-slate-800/80 p-3 sm:p-5 rounded-2xl relative z-10">
            <div className="text-center">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Total Supply</p>
              <p className="text-xs sm:text-lg font-black text-amber-400 font-mono mt-0.5">51,169,148 WR</p>
            </div>
            <div className="text-center border-x border-slate-800">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Holders</p>
              <p className="text-xs sm:text-lg font-black text-[#00ffcc] font-mono mt-0.5">1,061+</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">Collections</p>
              <p className="text-xs sm:text-lg font-black text-purple-400 font-mono mt-0.5">21 Series</p>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 relative z-10">
            <button
              onClick={() => onNavigate('FXHASH')}
              className="px-5 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs sm:text-sm font-black uppercase transition-all shadow-lg shadow-purple-600/20 flex items-center gap-2 active:scale-95"
            >
              <Flame size={15} /> fxhash 전용 작품관 보기
            </button>
            <a
              href="https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-black uppercase transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 active:scale-95"
            >
              OBJKT 전체 컬렉션 <ArrowUpRight size={14} />
            </a>
            <a
              href={quipuSwapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5"
            >
              QuipuSwap 유동성 <ArrowRightLeft size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Featured Heritage & Generative Highlights (Clean 3-Card Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-amber-400" />
            <h2 className="text-lg sm:text-2xl font-black text-white italic tracking-tight uppercase">
              주요 헤리티지 & 제너레이티브 작품
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('FXHASH')}
            className="text-xs text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1"
          >
            전체보기 <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: The Flame of Jongno */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all flex flex-col justify-between group">
            <div className="relative aspect-video bg-black overflow-hidden">
              <img 
                src="https://ipfs.io/ipfs/bafybeicey3fp3obxmfudp2lua7eftk4zxjxlfsshgjrcbvlqb6igj6xkxi" 
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

          {/* Card 2: The Reckoning: Sparks of Justice (요청 작품으로 변경) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500/40 transition-all flex flex-col justify-between group">
            <div className="relative aspect-video bg-black overflow-hidden">
              <img 
                src="https://ipfs.io/ipfs/bafybeidriys7hi7mysqzw3ghebanny3k6r232o5bul7272pi2dczmnif7a" 
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
            <div className="relative aspect-video bg-black overflow-hidden">
              <img 
                src="https://ipfs.io/ipfs/bafybeifmpdjsm6intedpfdk5tq5nyv7qgxc6mbmaqm7hmg2rt7mlucddwu" 
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

      {/* 4. Decentralized Web & Liquidity Summary (Side-by-side on desktop, compact on mobile) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Web3 IPFS Card */}
          <div className="bg-gradient-to-br from-purple-950/30 via-slate-900 to-slate-950 border border-purple-500/20 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400 border border-purple-500/30">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">탈중앙화 Web3 게이트웨이</h3>
                <p className="text-xs text-slate-400">wristory.tez / IPFS 영구 분산 보존</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              중앙 서버 없이 전 세계 분산 노드(IPFS)와 테조스 온체인 도메인으로 24시간 언제 어디서나 접속 가능합니다.
            </p>
            <div className="pt-2">
              <a
                href="https://wristory.tez.page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
              >
                wristory.tez.page 접속하기 <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* QuipuSwap Liquidity Card */}
          <div className="bg-gradient-to-br from-blue-950/30 via-slate-900 to-slate-950 border border-blue-500/20 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/30">
                <Droplets size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">WR / wXTZ 유동성 풀</h3>
                <p className="text-xs text-slate-400">QuipuSwap DEX 탈중앙화 거래</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              QuipuSwap CPMM을 통해 WR 토큰의 유동성을 공급하고 테조스 생태계 확장에 기여할 수 있습니다.
            </p>
            <div className="pt-2">
              <a
                href={quipuSwapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
              >
                QuipuSwap 유동성 공급 <ArrowRightLeft size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Holder Benefits: Watchface Download */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 text-center shadow-xl">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase">
              <Lock size={12} /> Holder Benefits
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white uppercase italic">
              홀더 전용 프리미엄 워치페이스
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              WRISTORY NFT 보유자분들을 위해 제작된 전용 갤럭시 워치페이스를 무료로 제공합니다.
            </p>
          </div>

          <CollectorAccess />
        </div>
      </section>

      {/* 6. Smart Contract & GitHub Synergy (Compact Footer Banner) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <ShieldCheck size={24} className="text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">테조스 메인넷 공식 검증 FA2 컨트랙트</p>
              <p className="text-[11px] font-mono text-slate-500 truncate max-w-xs sm:max-w-md">{contractAddress}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href={`https://tzkt.io/${contractAddress}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1"
            >
              TzKT 탐색기 <ArrowUpRight size={11} />
            </a>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1"
            >
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageView;
