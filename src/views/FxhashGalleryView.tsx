import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight, 
  Flame, 
  Layers, 
  ShieldCheck, 
  Zap,
  Globe,
  Sliders,
  Maximize2
} from 'lucide-react';

interface Props {
  lang?: 'ko' | 'en';
}

interface FxhashProject {
  id: string;
  title: string;
  subtitle: string;
  contract: string;
  desc: string;
  longDesc: string;
  image: string;
  liveUrl: string;
  tags: string[];
  status: 'LIVE' | 'MINTING' | 'UPCOMING';
  supply: string;
  platform: string;
  features: string[];
}

const FxhashGalleryView: React.FC<Props> = () => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const projects: FxhashProject[] = [
    {
      id: 'the-flame-of-jongno',
      title: 'The Flame of Jongno',
      subtitle: '종로의 불꽃 — 제너레이티브 헤리티지 에디션',
      contract: 'KT1Bqu... (fxhash FA2)',
      desc: '1919년 종로 탑골공원에서 피어오른 자주독립의 외침과 타오르는 만세 운동의 에너지를 수학적 입자 알고리즘으로 시각화한 제너레이티브 아트.',
      longDesc: '독립 투사들의 맹렬한 용기와 꺼지지 않는 민족혼을 수천 개의 유기적인 코드 파티클로 재구성했습니다. 온체인 제너레이티브 파라미터에 따라 매 민팅마다 고유한 불꽃 궤적과 광채가 생성됩니다.',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeicey3fp3obxmfudp2lua7eftk4zxjxlfsshgjrcbvlqb6igj6xkxi',
      liveUrl: 'https://www.fxhash.xyz/project/the-flame-of-jongno',
      tags: ['fxhash', 'Generative', 'Heritage', 'Interactive'],
      status: 'LIVE',
      supply: 'Open / Generative',
      platform: 'fxhash Tezos Mainnet',
      features: [
        'Pure WebGL & Canvas on Tezos',
        'Unique Seeds per Mint',
        'Historic Jongno Coordinates Grounding',
        'Real-time Flow Physics'
      ]
    },
    {
      id: 'presidential-calligraphy',
      title: "President's Hour: 52 Million",
      subtitle: '대통령의 한 시간 — 5,200만의 시간 (Long-form)',
      contract: '0x8E33... / fxhash EVM & Tezos',
      desc: '"대통령의 한 시간은 5,200만의 시간입니다." 최승균 서예가의 필획과 온체인 코드가 융합된 21점의 제너레이티브 각인 에디션.',
      longDesc: '국가의 운명을 짊어진 지도자의 결단과 국민의 주권을 상징하는 캘리그래피를 제너레이티브 텍스처와 수학적 조형미로 해석한 프로젝트입니다.',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigdqnbztqqi7xmmxvjftpio2dvyjpatnzpv7gl77gu4sld4bcvvia',
      liveUrl: 'https://www.fxhash.xyz/create/project/success/0x8E3319261Db6790993F21122dE60b8Adf4C626aD',
      tags: ['fxhash', 'Calligraphy', 'Historic', '21 Iterations'],
      status: 'LIVE',
      supply: '21 Unique Iterations',
      platform: 'fxhash Protocol',
      features: [
        'Calligraphy by Master Choi Seung-gyun',
        '21 Unique On-chain Iterations',
        'Generative Engraving Texture',
        'Curated by YesOkLab'
      ]
    },
    {
      id: 'admirals-resolve',
      title: "The Admiral's Resolve",
      subtitle: '이순신 장군의 결의 — 필사즉생 (必死則生)',
      contract: 'KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/23',
      desc: '백번 싸워도 꺾이지 않을 장군의 숭고한 맹세와 한산도 달빛 아래 서린 기개를 제너레이티브 웨이브로 승화.',
      longDesc: '파도와 바람을 이겨낸 불멸의 전술, 12척의 배로 나라를 구한 필사즉생의 정신을 블록체인 상에 정밀한 파동 함수로 영구 기록했습니다.',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeifmpdjsm6intedpfdk5tq5nyv7qgxc6mbmaqm7hmg2rt7mlucddwu',
      liveUrl: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/23',
      tags: ['Generative', 'Admiral Yi', 'Hero', 'Tezos Mainnet'],
      status: 'LIVE',
      supply: 'Heritage Limited',
      platform: 'Tezos FA2 / fxhash Style',
      features: [
        'Harmonic Wave Vector Rendering',
        'Immutable Provenance on Tezos',
        'Dynamic Palette Transitions',
        'High-Resolution Vector Export'
      ]
    }
  ];

  const filteredProjects = selectedTag === 'ALL' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedTag));

  const tags = ['ALL', 'fxhash', 'Generative', 'Heritage', 'Interactive'];

  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* Header Area */}
      <div className="relative rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/20 p-6 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 text-purple-500/10 pointer-events-none">
          <Sparkles size={280} />
        </div>
        
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-black uppercase tracking-widest">
            <Flame size={14} className="text-purple-400" /> fxhash Generative Archive
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white italic tracking-tight uppercase">
            fxhash <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">전용 작품관</span>
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            살아 움직이는 코드와 역사적 기록이 융합된 제너레이티브 아트 전용 갤러리입니다. 
            매 회차마다 고유한 난수와 온체인 파라미터에 의해 세상에 단 하나뿐인 역사적 시각 작품이 탄생합니다.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 bg-slate-950/80 rounded-xl border border-white/5 text-xs text-slate-400 font-mono">
              Network: <b>Tezos Mainnet</b>
            </span>
            <span className="px-3 py-1 bg-slate-950/80 rounded-xl border border-white/5 text-xs text-slate-400 font-mono">
              Standard: <b>FA2 & fxhash</b>
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedTag === tag 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20' 
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {tag === 'ALL' ? '전체 보기 (All)' : `#${tag}`}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {filteredProjects.map((p) => (
          <div 
            key={p.id}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-purple-500/40 transition-all shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 group"
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative bg-black aspect-video lg:aspect-auto overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-purple-600 text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-md">
                  {p.status}
                </span>
                <span className="px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-slate-300 text-[10px] font-mono rounded-lg border border-white/10">
                  {p.supply}
                </span>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                    {p.platform}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white italic tracking-tight uppercase mt-1">
                    {p.title}
                  </h2>
                  <p className="text-sm font-semibold text-slate-300 mt-1">
                    {p.subtitle}
                  </p>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {p.longDesc}
                </p>

                {/* Features Pill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {p.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-950/50 px-3 py-1.5 rounded-lg border border-slate-800/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-purple-600/20 active:scale-95"
                >
                  작품 감상 & 민팅 바로가기 <ArrowUpRight size={14} />
                </a>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                >
                  fxhash 프로젝트 <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Curator Callout */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-500/20 text-center space-y-3">
        <h3 className="text-lg font-bold text-white">제너레이티브 아트 큐레이션 안내</h3>
        <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed">
          WRISTORY의 제너레이티브 작품들은 WebGL과 Tezos 블록체인 스마트 컨트랙트를 기반으로 구동됩니다.
          모바일과 데스크톱 모든 환경에서 실시간 렌더링을 지원합니다.
        </p>
      </div>
    </div>
  );
};

export default FxhashGalleryView;
