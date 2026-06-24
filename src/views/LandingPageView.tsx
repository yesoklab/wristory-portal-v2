import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  History, 
  Zap, 
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
  Pizza,
  Timer,
  Twitter,
  Send,
  Mail,
  Gamepad2,
  Share2,
  Radio
} from 'lucide-react';

interface Props {
  lang: 'ko' | 'en';
  onNavigate: (tab: any) => void;
  hasApiKey: boolean;
}

const LiquidityPoolSection: React.FC = () => {
  const quipuSwapUrl = 'https://quipuswap.com/liquidity/cpmm/add/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH-KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0';
  
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-br from-blue-600/20 to-indigo-900/20 border border-blue-500/30 rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
        
        <div className="flex-1 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
            <Droplets size={16} /> Liquidity & Ecosystem
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
            WR / wXTZ <br/>
            <span className="text-blue-500">Liquidity Pool</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            QuipuSwap CPMM을 통해 WR 토큰의 유동성을 공급하고 생태계 성장에 기여하세요. <br/>
            <span className="text-sm opacity-70">Contribute to the ecosystem by providing WR token liquidity via QuipuSwap CPMM.</span>
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-950/50 p-6 rounded-3xl border border-white/5">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Pair</p>
              <p className="text-xl font-black text-white">wXTZ / WR</p>
            </div>
            <div className="bg-slate-950/50 p-6 rounded-3xl border border-white/5">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Platform</p>
              <p className="text-xl font-black text-white">QuipuSwap</p>
            </div>
          </div>

          <a 
            href={quipuSwapUrl} 
            target="_blank" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20"
          >
            유동성 공급 / Add Liquidity <ArrowRightLeft size={20} />
          </a>
        </div>

        <div className="flex-1 w-full lg:w-auto relative z-10">
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl space-y-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Pool Stats</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase rounded-full">Live</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Value Locked</span>
                <span className="text-2xl font-black text-white shadow-emerald-500/10 animate-pulse">$6,902.00</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full w-[100%]" />
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">wXTZ Share</p>
                  <p className="text-xl font-black text-[#00ffcc] tracking-tight">18,142.38</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">WR Share</p>
                  <p className="text-xl font-black text-blue-400 tracking-tight">1,814,238</p>
                </div>
              </div>

              <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Liquidity Ratio</span>
                <span className="text-sm font-black text-white italic">1 wXTZ : 100 WR</span>
              </div>
            </div>

            <div className="pt-6">
              <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
                <p className="text-[10px] text-blue-400 font-bold leading-relaxed">
                  * 유동성 공급 시 LP 토큰을 수령하게 되며, 이는 풀 내 귀하의 지분을 증명합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    // Simulate wallet verification
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 2000);
  };

  if (isVerified) {
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in zoom-in duration-500">
        {watchfaces.map((wf, i) => (
          <div key={i} className="bg-slate-900 border border-blue-500/30 rounded-3xl p-6 flex flex-col items-center gap-4 hover:border-blue-500 transition-all shadow-xl shadow-blue-500/5">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
              <Smartphone size={32} />
            </div>
            <div className="text-center">
              <h4 className="text-white font-black text-sm uppercase tracking-tight">{wf.name}</h4>
              <p className="text-slate-500 text-[10px] font-mono mt-1">{wf.id}</p>
            </div>
            <a 
              href={wf.url} 
              target="_blank" 
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              Google Play <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <button 
        onClick={handleVerify}
        disabled={isVerifying}
        className="px-12 py-6 bg-white text-slate-950 rounded-[2.5rem] font-black text-xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl flex items-center gap-4 disabled:opacity-50"
      >
        {isVerifying ? (
          <>검증 중... / Verifying... <Loader2 size={24} className="animate-spin" /></>
        ) : (
          <>지갑 인증 후 다운로드 / Verify Wallet & Download <ShieldCheck size={24} /></>
        )}
      </button>
      <p className="text-slate-500 text-xs font-bold flex items-center gap-2">
        <CheckCircle2 size={14} className="text-emerald-500" /> Tezos 메인넷 NFT 보유 여부를 실시간으로 확인합니다. / Real-time verification of Tezos Mainnet NFT ownership.
      </p>
    </div>
  );
};

const OfficialPromoSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-2xl text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#3b82f60a_0%,_transparent_70%)]" />
        <div className="relative z-10 space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
            <Sparkles size={16} /> Official Promo
          </div>
          
          <div className="max-w-4xl mx-auto aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black relative group">
            <video 
              src="/promo-video.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-10">
              <p className="text-white font-black italic uppercase tracking-widest text-sm">Wristory Cinematic Universe</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
              Experience the <br/>
              <span className="text-blue-500">Wristory Universe</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              Wristory의 시네마틱 홍보 영상을 확인하세요. <br/>
              <span className="text-sm opacity-70">Check out our cinematic promo video.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FxhashMintSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-08-15T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsLive(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-br from-purple-950/40 via-slate-950 to-indigo-950/40 border border-slate-800 rounded-[4rem] p-10 md:p-16 relative overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.15)]">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] rotate-12 pointer-events-none">
          <Sparkles size={500} className="text-white" />
        </div>

        <div className="relative z-10 space-y-12">
          {/* Header Area */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="px-5 py-2 rounded-full bg-purple-600 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-purple-600/20">
                {isLive ? 'LIVE ON FXHASH' : 'NOW COMING ON FXHASH'}
              </span>
              <span className="px-5 py-2 rounded-full bg-slate-800 text-slate-400 text-[11px] font-black uppercase tracking-widest border border-slate-700">
                Double Release
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none pt-2">
              The Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Generative Era</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              독립의 불꽃과 기개의 역사가 현대 제너레이티브 아카이브로 재탄생합니다. <br />
              <span className="text-sm opacity-75">Visualizing Korean independence struggle and patriotic spirit in celestial generative wave forms.</span>
            </p>
          </div>

          {/* Countdown Area */}
          {!isLive && (
            <div className="max-w-2xl mx-auto bg-slate-900/80 border border-white/5 p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Timer className="text-purple-400 animate-pulse" size={28} />
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-none">LAUNCH COUNTDOWN</p>
                  <p className="text-sm text-white font-black uppercase tracking-wide mt-1">Countdown to 15 Aug 2026 at 00:00</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 text-center w-full md:w-auto self-stretch">
                <div className="bg-slate-950/80 px-4 py-3 rounded-2xl border border-white/5 flex flex-col justify-center min-w-[70px]">
                  <p className="text-xl font-black text-white leading-none">{timeLeft.days}</p>
                  <p className="text-[8px] text-slate-500 font-black uppercase mt-1">Days</p>
                </div>
                <div className="bg-slate-950/80 px-4 py-3 rounded-2xl border border-white/5 flex flex-col justify-center min-w-[70px]">
                  <p className="text-xl font-black text-white leading-none">{timeLeft.hours}</p>
                  <p className="text-[8px] text-slate-500 font-black uppercase mt-1">Hours</p>
                </div>
                <div className="bg-slate-950/80 px-4 py-3 rounded-2xl border border-white/5 flex flex-col justify-center min-w-[70px]">
                  <p className="text-xl font-black text-white leading-none">{timeLeft.minutes}</p>
                  <p className="text-[8px] text-slate-500 font-black uppercase mt-1">Mins</p>
                </div>
                <div className="bg-slate-950/80 px-4 py-3 rounded-2xl border border-white/5 flex flex-col justify-center min-w-[70px]">
                  <p className="text-xl font-black text-purple-400 leading-none">{timeLeft.seconds}</p>
                  <p className="text-[8px] text-slate-500 font-black uppercase mt-1">Secs</p>
                </div>
              </div>
            </div>
          )}

          {/* Dual Projects Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4">
            {/* Project 1 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] p-8 md:p-12 space-y-8 hover:border-purple-500/30 transition-all group flex flex-col justify-between">
              <div className="space-y-6">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl bg-black">
                  <img 
                    src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeicey3fp3obxmfudp2lua7eftk4zxjxlfsshgjrcbvlqb6igj6xkxi" 
                    alt="The Flame of Jongno" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white font-black italic uppercase tracking-tighter">
                    <span className="text-xs">THE FLAME OF JONGNO</span>
                    <span className="text-purple-400 text-xs">종로의 불꽃</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic leading-none">The Flame of Jongno</h3>
                  <p className="text-slate-300 text-sm font-bold">"종로의 외침과 치열했던 투쟁의 불꽃, 테조스 위에서 깨어나다."</p>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">
                    독립 투사들의 맹렬한 용기와 종로의 밤하늘을 덮은 붉은 만세 운동의 에너지를 제너레이티브 입자로 재구성한 디지털 명작입니다.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://www.fxhash.xyz/project/the-flame-of-jongno" 
                  target="_blank"
                  className="flex-1 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black text-center text-sm transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 active:scale-95"
                >
                  민팅 참여하기 / Go to Mint <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] p-8 md:p-12 space-y-8 hover:border-indigo-500/30 transition-all group flex flex-col justify-between">
              <div className="space-y-6">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl bg-black">
                  <img 
                    src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeifmpdjsm6intedpfdk5tq5nyv7qgxc6mbmaqm7hmg2rt7mlucddwu" 
                    alt="WRISTORY: The Admiral's Resolve" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white font-black italic uppercase tracking-tighter">
                    <span className="text-xs">THE ADMIRAL'S RESOLVE</span>
                    <span className="text-indigo-400 text-xs">장군의 결의</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic leading-none">WRISTORY: The Admiral's Resolve</h3>
                  <p className="text-slate-300 text-sm font-bold">"우리가 백번 싸워도 꺾이지 않을 영웅의 맹세, 블록체인에서 복원되다."</p>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">
                    이순신 장군의 숭고한 보국의 마음과 필사즉생의 위대한 결의를 현대적인 제너레이티브 웨이브 아트로 정밀하게 고증한 기념비적 에디션입니다.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/23" 
                  target="_blank"
                  className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-center text-sm transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 active:scale-95"
                >
                  작품 상세보기 / View Token <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPageView: React.FC<Props> = ({ onNavigate, hasApiKey }) => {
  const contractAddress = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const githubUrl = 'https://github.com/yesoklab/wristory-portal-v2';
  const quipuSwapUrl = 'https://quipuswap.com/liquidity/cpmm/add/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH-KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0';
  const walletTxUrl = 'https://tzkt.io/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/operations/';
  
  const fighters = [
    { 
      name: '김향화선생 / Kim Hyang-hwa', 
      desc: '대한독립만세 - 여성 독립운동가 컬렉션 / Female independence activist collection', 
      img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibrkejqmvqquzgeiykq7g2hl4vis4xu7uqeyj2thy2f5liykdozzq', 
      url: 'https://objkt.com/tokens/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU/33'
    },
    { 
      name: '백범 김구선생 / Kim Ku', 
      desc: '나의 소원은 우리나라 대한의 완전한 자주독립이오 / My wish is the complete independence of Korea', 
      img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeie5a3ll3ox7w5wew7jvff652iivtjbtrqkizeyl3f4pf55hg5wopq',
      url: 'https://objkt.com/tokens/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU/31'
    },
    { 
      name: '안중근의사 / An Jung-geun', 
      desc: '동양평화론 - 하얼빈의 영웅 / Hero of Harbin - On Peace in the East', 
      img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeifztp6gm27ny2qcybnednr4cqy7ty74rklyv2qmqv77qwzx5twuk4',
      url: 'https://objkt.com/tokens/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU/32'
    },
    { name: 'FORK PROJECT', desc: '역사의 분기점을 시각화한 컬렉션 / Visualizing historical forks on Tezos', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigcx2qgsd7p3f7ijjoksgtvjrw3ed74da5x3a4ndqxsuw5hppb4yy', url: 'https://objkt.com/collections/KT1XMCJGLo9vnHRAf5LQdw9z3BF9yGVfffnm' },
    { name: 'WRISTORY UNIVERSE', desc: '이재명 대통령 디지털 유산 / Digital Heritage of President Lee Jae-myeong', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiega3qk3oh3r6u6uwqr2f4uvkynpdpmsrmcwrdlld3oqjmawk62ya' },
    { name: 'HERITAGE SYNC', desc: 'Where Tradition Meets the Future', img: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibjx5wokivdjsvwli6gbzju7fdkzatdw3kylkqw2jtr6qp5ylufvu', url: 'https://objkt.com/collections/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU' },
  ];

  return (
    <div className="animate-in fade-in duration-1000 pb-20">
      {/* fxhash Minting Special Banner */}
      <div className="bg-gradient-to-r from-purple-500 via-white to-indigo-600 p-[1px] mb-10 shadow-2xl shadow-indigo-500/10">
        <div className="bg-[#0F111A] px-6 py-5 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500/10 rounded-full flex items-center justify-center border border-indigo-500/20">
              <Sparkles size={20} className="text-indigo-400 animate-pulse" />
            </div>
            <div className="flex flex-col items-start translate-y-0.5">
              <span className="text-sm font-black text-white uppercase tracking-[0.2em] leading-tight text-left">Wristory New Releases</span>
              <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest text-left">Mainnet Live on Tezos</span>
            </div>
          </div>
          <div className="hidden md:block w-[1px] h-10 bg-slate-800" />
          <p className="text-slate-400 text-[11px] font-bold max-w-xl leading-relaxed text-left">
            "역사를 밝히는 눈부신 불꽃과 영웅의 영혼" - 신규 제너레이티브 컬렉션인 '종로의 불꽃' & '이순신 장군의 결의' 작품들이 블록체인 상에 정밀하게 기록되었습니다.
          </p>
          <div className="flex flex-wrap gap-2">
            <a 
              href="https://www.fxhash.xyz/project/the-flame-of-jongno" 
              target="_blank" 
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center gap-1 shadow-lg shadow-purple-600/20"
            >
              종로의 불꽃 / Jongno <ArrowUpRight size={12} />
            </a>
            <a 
              href="https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/23" 
              target="_blank" 
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center gap-1 shadow-lg shadow-indigo-600/20"
            >
              이순신 장군의 결의 / Admiral <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10 bg-[#0b0f19]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e3a8a33_0%,_transparent_70%)] opacity-60" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl space-y-10">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-black uppercase tracking-[0.4em] text-emerald-400">
              <ShieldCheck size={16} className="animate-pulse" /> Mainnet Successfully Merged & Deployed
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800">
                 <span className="text-[10px] font-mono text-slate-500">{contractAddress}</span>
                 <a href={`https://tzkt.io/${contractAddress}`} target="_blank" className="text-blue-400 hover:text-white"><ExternalLink size={12}/></a>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20">
                 <Globe size={12} className="text-blue-400" />
                 <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Vercel Optimized</span>
              </div>
            </div>
          </div>

          <h1 className="glitch-text text-5xl md:text-8xl font-black italic tracking-tighter text-white leading-none uppercase" data-text="THE BRIDGE OF TIME">
            THE BRIDGE OF TIME
          </h1>
          
          <div className="flex justify-center">
            <h2 className="typing-effect text-lg md:text-2xl text-[#00ffcc] font-bold uppercase tracking-widest">
              WRISTORY : 역사는 블록체인 위에서 영원히 살아 숨 쉽니다. <br/>
              <span className="text-sm opacity-80">History lives forever on the Tezos blockchain.</span>
            </h2>
          </div>

          <div className="stats-container flex flex-wrap items-center justify-center gap-4 md:gap-8 text-[#00ffcc] font-black text-sm md:text-lg uppercase tracking-widest pt-4">
             <span>Total Supply: 51,169,148 $WR</span>
             <span className="hidden md:inline text-slate-700">|</span>
             <span>Holders: 630+</span>
             <span className="hidden md:inline text-slate-700">|</span>
             <span>Collections: 21</span>
          </div>
          
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <CheckCircle2 size={18} className="text-emerald-400" />
              </div>
              <p className="text-[10px] text-slate-400 font-bold text-left leading-tight">
                <span className="text-white block">Wallet & Exchange Integration Complete</span>
                Temple, Kukai 등 모든 테조스 지갑과 QuipuSwap에서 WR 토큰 로고가 완벽하게 적용되었습니다.
              </p>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-blue-600/20 rounded text-[8px] text-blue-400 border border-blue-500/30 font-black">Temple (Partner)</div>
                <div className="px-2 py-1 bg-slate-800 rounded text-[8px] text-slate-400 border border-slate-700">Kukai</div>
                <div className="px-2 py-1 bg-slate-800 rounded text-[8px] text-slate-400 border border-slate-700">QuipuSwap</div>
              </div>
            </div>
          </div>
        </section>

      {/* CoinGecko Listing Track Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-emerald-500/10 via-slate-900/40 to-blue-500/10 border border-emerald-500/30 rounded-[3rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500/20 to-lime-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30 text-emerald-400">
                <BarChart3 size={32} className="animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                    Listing App Registered
                  </span>
                  <span className="text-slate-500 text-xs font-bold">Tezos Token / WR</span>
                </div>
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">
                  CoinGecko Listing Status Tracker
                </h3>
                <p className="text-slate-400 text-sm font-medium">
                  WR 토큰의 글로벌 시세 추적 및 유동성 연동을 위한 코인게코(CoinGecko) 등록 심사가 접수되어 활발히 진행 중입니다.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 bg-slate-900/80 border border-slate-800 p-6 rounded-[2rem] w-full lg:w-auto justify-between lg:justify-start">
              <div className="space-y-1 pr-6 border-r border-slate-800">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Coingecko Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-extrabold text-sm text-emerald-400 uppercase tracking-wider">Reviewing (심사 중)</span>
                </div>
              </div>
              <div className="space-y-1 pr-4 pl-4">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Listing Asset</p>
                <span className="font-extrabold text-sm text-white uppercase tracking-wider">$WR (Wristory)</span>
              </div>
              <a 
                href="https://quipuswap.com/liquidity/cpmm/add/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH-KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0" 
                target="_blank" 
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2"
              >
                Provide Liquidity <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fxhash Mint Section */}
      <FxhashMintSection />

      {/* Official Promo Section */}
      <OfficialPromoSection />

      {/* Contract Verification Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-500/20 text-blue-400">
                 <ShieldCheck size={32} />
              </div>
              <div>
                 <h3 className="text-xl font-black text-white italic uppercase tracking-tight">Verified Smart Contract</h3>
                 <p className="text-slate-500 text-sm font-medium">테조스 메인넷에 배포된 정식 FA2 컨트랙트입니다. / Official FA2 Contract on Tezos Mainnet.</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <a href={`https://better-call.dev/mainnet/${contractAddress}`} target="_blank" className="px-6 py-3 bg-slate-800 hover:bg-slate-750 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2">
                 BCD Explorer <ExternalLink size={14} />
              </a>
              <a href={`https://tzkt.io/${contractAddress}`} target="_blank" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
                 TzKT Insight <ArrowUpRight size={14} />
              </a>
           </div>
        </div>
      </section>

      {/* Today's NFT Mint - Artwork of the Month */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-slate-800" />
          <h2 className="text-2xl font-black italic uppercase text-white tracking-widest px-4">Today's NFT Mint</h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 space-y-6 hover:border-blue-500/30 transition-all group">
            <div className="aspect-video overflow-hidden rounded-2xl relative">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigcx2qgsd7p3f7ijjoksgtvjrw3ed74da5x3a4ndqxsuw5hppb4yy" 
                alt="FORK PROJECT" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">FORK PROJECT</div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white italic uppercase leading-tight">The Ghost — Bitcoin Chronicles III</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                FORK PROJECT 컬렉션의 세 번째 에디션. 역사의 분기점을 시각화합니다.
              </p>
              <a 
                href="https://objkt.com/collections/KT1XMCJGLo9vnHRAf5LQdw9z3BF9yGVfffnm" 
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors"
              >
                View Collection <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 space-y-6 hover:border-emerald-500/30 transition-all group">
            <div className="aspect-video overflow-hidden rounded-2xl relative">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiesb5nbzjpyccgjhba44pkyhjtwlgbfybmt3q3oh3mjnoemmd5u6y" 
                alt="Genesis Chronicles" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">Chronicle Series</div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white italic uppercase leading-tight">The Ghost — Bitcoin Chronicles' III</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                Blockchain Genesis Chronicles 컬렉션의 핵심 작품입니다.
              </p>
              <a 
                href="https://objkt.com/collections/KT1A687BCmwpCLmzFWMRbKKwQGoqZzrgx97y" 
                target="_blank"
                className="inline-flex items-center gap-2 text-emerald-400 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors"
              >
                View Collection <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 space-y-6 hover:border-purple-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12 group-hover:rotate-0 transition-transform"><Sparkles size={100} className="text-purple-500" /></div>
            <div className="aspect-video overflow-hidden rounded-2xl relative bg-black">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeicey3fp3obxmfudp2lua7eftk4zxjxlfsshgjrcbvlqb6igj6xkxi" 
                alt="The Flame of Jongno" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-purple-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">New on fxhash</div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white italic uppercase tracking-tight">The Flame of Jongno</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                종로의 독립 투쟁과 꺼지지 않는 애국의 불꽃을 제너레이티브 아트로 시각화한 컬렉션입니다. <br/>
                <span className="text-purple-400/80 font-bold uppercase tracking-widest text-[9px]">Generative Art Launching on fxhash</span>
              </p>
              <a 
                href="https://www.fxhash.xyz/project/the-flame-of-jongno" 
                target="_blank"
                className="inline-flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors border-b border-purple-500/30 pb-1"
              >
                View Collection <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 space-y-6 hover:border-amber-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12 group-hover:rotate-0 transition-transform"><Sparkles size={100} className="text-amber-500" /></div>
            <div className="aspect-video overflow-hidden rounded-2xl relative bg-black">
              <img 
                src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeid37iunpfzsrlynb47qyynjxhsczjxa4jwdfywxeuze43yjksngzi" 
                alt="WRISTORY: Spirit of Kim Gu" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-amber-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">Spirit of Kim Gu</div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-black text-white italic uppercase tracking-tight">WRISTORY: Spirit of Kim Gu - 소원 (Wish)</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                백범 김구 선생의 세 가지 소원이자 우리나라의 완전한 자주독립 염원을 숭고한 예술 혼으로 주조해 낸 대표적 디지털 컬렉션입니다. <br/>
                <span className="text-amber-400/80 font-bold uppercase tracking-widest text-[9px]">"나의 첫째 소원은 대한 독립이오"</span>
              </p>
              <a 
                href="https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/16" 
                target="_blank"
                className="inline-flex items-center gap-2 text-amber-400 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors border-b border-amber-500/30 pb-1"
              >
                View on objkt.com <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Artwork of the Month */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-slate-800" />
          <h2 className="text-2xl font-black italic uppercase text-white tracking-widest px-4">Recommended Artwork</h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>
        
        <div className="bg-slate-900/60 border border-slate-800 rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl group">
          <div className="lg:w-1/2 aspect-square lg:aspect-auto overflow-hidden">
            <img 
              src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiega3qk3oh3r6u6uwqr2f4uvkynpdpmsrmcwrdlld3oqjmawk62ya" 
              alt="President Lee Jae-myeong Calligraphy" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={14} /> 이달의 추천 작품
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-tight">
                이재명 대통령 캘리그래피 — <br/>
                <span className="text-blue-500">집과 시간의 언어</span>
              </h3>
              <div className="space-y-2">
                <p className="text-white text-xl font-black italic">"집은 사는 곳이지 사는 것이 아닙니다."</p>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  최승균 작가님이 이재명 대통령의 어록을 캘리그래피로 승화시킨 작품입니다. <br/>
                  <span className="text-sm opacity-70">Calligraphy artwork by Choi Seung-gyun, capturing the spirit of President Lee's quotes.</span>
                </p>
              </div>
            </div>
            <a 
              href="https://objkt.com/tokens/KT1A77WVak4yMFoHDNzpAf8PGA7YLmh5wMJ8/52?ref=tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16" 
              target="_blank"
              className="w-fit px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg flex items-center gap-3 transition-all shadow-xl shadow-blue-600/20"
            >
              작품 상세보기 <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Collector Access Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-950 border border-slate-800 rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#3b82f611_0%,_transparent_50%)]" />
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
                <Lock size={16} /> Collector Access Only
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
                🔒 홀더 전용 워치페이스 혜택 / Holder Exclusive Benefits
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                WRISTORY NFT 보유자분들께는 YesOkLab에서 제작한 프리미엄 워치페이스를 무료로 제공합니다. <br/>
                <span className="text-sm opacity-70">Premium watchfaces by YesOkLab for WRISTORY NFT holders. Verify and download.</span>
              </p>
            </div>

            <CollectorAccess />
          </div>
        </div>
      </section>

      {/* Liquidity Pool Section */}
      <LiquidityPoolSection />

      {/* Grid Collections */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-16 border-b border-slate-800 pb-8">
          <div>
            <h2 className="text-4xl font-black italic uppercase text-white">Mainnet Archive</h2>
            <p className="text-slate-500 font-medium">실제 토큰과 결합된 대한민국 독립운동가 컬렉션 / Independence Activists Collection</p>
          </div>
          <button 
            onClick={() => onNavigate('AI')}
            className="text-blue-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
          >
            AI 큐레이터에게 질문하기 / Ask AI Curator <ChevronRight size={14}/>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {fighters.map((item, i) => (
            <div 
              key={i} 
              onClick={() => item.url && window.open(item.url, '_blank')}
              className={`group relative bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-4 shadow-2xl ${item.url ? 'cursor-pointer' : ''}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-6 right-6 px-3 py-1 bg-blue-600 rounded-full text-[9px] font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  ID: {i}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black text-white italic tracking-tighter mb-2 leading-tight">{item.name}</h3>
                <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* GitHub Synergy Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-[4rem] p-16 md:p-24 text-center space-y-10 relative overflow-hidden border border-white/5">
           <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none opacity-20"><Github size={400}/></div>
           <div className="space-y-4 relative z-10">
             <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">Open Source Heritage</h2>
             <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
               WRISTORY 프로젝트의 모든 소스코드는 GitHub에 공개되어 있습니다. <br/>
               <span className="text-sm opacity-70">All source code is public on GitHub. Check transparency and technical integrity.</span>
             </p>
           </div>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
             <a href={githubUrl} target="_blank" className="bg-white text-slate-950 px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform">
               <Github size={24}/> GitHub
             </a>
             <div className="flex flex-wrap justify-center gap-4">
               <a href="https://x.com/wakk5252" target="_blank" className="bg-slate-800 text-white p-6 rounded-[2.5rem] hover:bg-blue-500 transition-all shadow-xl" title="Twitter">
                 <Twitter size={24}/>
               </a>
               <a href="https://t.me/Yes_OkLab" target="_blank" className="bg-slate-800 text-white p-6 rounded-[2.5rem] hover:bg-blue-600 transition-all shadow-xl" title="Telegram">
                 <Send size={24}/>
               </a>
               <a href="https://blog.naver.com/yesoklab/224290230057" target="_blank" className="bg-slate-800 text-white p-6 rounded-[2.5rem] hover:bg-emerald-600 transition-all shadow-xl" title="Naver Blog">
                 <Globe size={24}/>
               </a>
               <a href="https://www.reddit.com/user/cocoon96/" target="_blank" className="bg-slate-800 text-white p-6 rounded-[2.5rem] hover:bg-orange-700 transition-all shadow-xl" title="Reddit">
                 <Share2 size={24}/>
               </a>
               <a href="https://farcaster.xyz/cocoon9611" target="_blank" className="bg-slate-800 text-white p-6 rounded-[2.5rem] hover:bg-purple-600 transition-all shadow-xl" title="Farcaster">
                 <Radio size={24}/>
               </a>
               <a href="mailto:YesOkLab@gmail.com" className="bg-slate-800 text-white p-6 rounded-[2.5rem] hover:bg-red-600 transition-all shadow-xl" title="Gmail: YesOkLab@gmail.com">
                 <Mail size={24}/>
               </a>
               <div className="bg-slate-800 text-white p-6 rounded-[2.5rem] hover:bg-indigo-600 transition-all shadow-xl cursor-help" title="Discord: cocoon5547 (#WRISTORY_NFT)">
                 <Gamepad2 size={24}/>
               </div>
             </div>
             <button onClick={() => onNavigate('AI')} className="bg-blue-600 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl flex items-center gap-4 hover:bg-blue-500 transition-all">
               <Sparkles size={24}/> AI 기술 상담
             </button>
           </div>
           
           <div className="pt-12 flex items-center justify-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] relative z-10">
             <Globe size={12} /> Optimized for Vercel Deployment
           </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageView;
