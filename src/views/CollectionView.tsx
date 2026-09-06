import React, { useState } from 'react';
import { 
  ExternalLink, Tag, Users, ArrowUpRight, ShieldCheck, 
  Sparkles, Maximize2, X, ZoomIn, ZoomOut, Eye, Layers
} from 'lucide-react';

export interface CollectionItem {
  id: string;
  name: string;
  price: string;
  count: number | string;
  image: string;
  ipfsUrl?: string;
  url: string;
  zoraUrl?: string;
  isNew?: boolean;
  isMasterpiece?: boolean;
  isRecentMint?: boolean;
  editionBadge?: string;
  category?: 'RECENT' | 'ARCHIVE';
  desc?: string;
}

const collections: CollectionItem[] = [
  { 
    id: 'muju-firefly', 
    name: 'Muju Firefly — 무주 반딧불이 (부제: A Gentle Wishing Star)', 
    price: '30 XTZ', 
    count: '29 EDS', 
    editionBadge: '29 EDS 한정판',
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibqgtl447tihtspgfjpiau2njb26lfjlygyazidbp2otb2tph62yy', 
    ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibqgtl447tihtspgfjpiau2njb26lfjlygyazidbp2otb2tph62yy',
    url: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/34?ref=tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16',
    zoraUrl: 'https://zora.co/@yesoklab',
    isNew: true,
    isMasterpiece: true,
    isRecentMint: true,
    category: 'RECENT',
    desc: '무주 반딧불이 축제 30주년 기념 헌정작. 잃어버린 손톱이 밤하늘 초승달이 되는 헌시(원고지 자율 타이핑)와 청정 무주 밤하늘을 수놓는 반딧불이 무리의 유기적 비행을 구현한 순수 Canvas 제너러티브 마스터피스. (수익금 100% 무주 청소년 시설 기부)'
  },
  { 
    id: 'mugunghwa-bloomed-by-fallen-patriots', 
    name: '순국선열(殉國先烈)들이 피워낸 나라 꽃 무궁화', 
    price: '3 XTZ', 
    count: '80 EDS', 
    editionBadge: '80 EDS 한정판',
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigxi55r2jipqmhi6pobqqxfjsermyenccuxctgmtq4r3vb6hiqo7i', 
    ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigxi55r2jipqmhi6pobqqxfjsermyenccuxctgmtq4r3vb6hiqo7i',
    url: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/32',
    zoraUrl: 'https://zora.co/@yesoklab',
    isNew: true,
    isMasterpiece: true,
    isRecentMint: true,
    category: 'RECENT',
    desc: '대한민국 독립운동가들의 넋과 한, 나라 사랑의 마음을 태극과 한지 위 먹빛 확산제한응집(DLA) 가지, 그리고 피어나는 무궁화로 형상화한 순수 십자수 스티치 제너러티브 마스터피스.'
  },
  { 
    id: 'han-hon-maek', 
    name: '恨·魂·脈 — Han, Hon, Maek / WRISTORY', 
    price: '3 XTZ', 
    count: '33 EDS', 
    editionBadge: '33 EDS 한정판',
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiho2c6bqxxhdpz6mixcjc3e6wxmamqnit5sntnrfqw5ugdzd5exum', 
    ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiho2c6bqxxhdpz6mixcjc3e6wxmamqnit5sntnrfqw5ugdzd5exum',
    url: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/31',
    zoraUrl: 'https://zora.co/@yesoklab',
    isNew: true,
    isMasterpiece: true,
    isRecentMint: true,
    category: 'RECENT',
    desc: '33인의 독립운동가의 역동과 숭고한 넋을 혈액이 유기적으로 맥동하듯 캔버스 위로 피어나는 제너러티브 성장 시뮬레이션(Growth Simulation) 기법으로 구현한 디지털 헤리티지 마스터피스.'
  },
  { 
    id: 'energy-drink-the-vitality', 
    name: 'energy // Drink the Vitality! (활력을 마시자!)', 
    price: '대표작', 
    count: '1.96K EDS', 
    editionBadge: 'YesOkLab 대표작',
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu', 
    ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu',
    url: 'https://objkt.com/tokens/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU/36',
    isNew: true,
    isMasterpiece: true,
    isRecentMint: true,
    category: 'RECENT',
    desc: '자양강장제 박카스(BACCHUS-D 1963) 오마주. 멈춰있던 톱니바퀴가 활력의 에너지를 만나 다시 힘차게 돌아가는 순수 HTML5 Canvas 제너러티브 아트 대표작.'
  },
  { 
    id: 'kim-chang-sook-sandals', 
    name: '미투리, 천리 — 心山 金昌淑 (A Thousand Li in Straw Sandals)', 
    price: '0.5 XTZ', 
    count: '82 EDS', 
    editionBadge: '82 EDS',
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigu3hj4bn57tiaspisityhze54sr2xzrckkkfmzk4lxfw7c4vpy3u', 
    ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigu3hj4bn57tiaspisityhze54sr2xzrckkkfmzk4lxfw7c4vpy3u',
    url: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/30',
    isNew: true,
    isRecentMint: true,
    category: 'RECENT',
    desc: '심산 김창숙(1879–1962) 선생의 무명(無名)의 여정을 시각화한 순수 Canvas 제너러티브 아트. 짚신(미투리) 발자국이 쌓이며 초상이 서서히 드러납니다.'
  },
  { 
    id: 'patriotic-legacy', 
    name: 'WRISTORY: PATRIOTIC LEGACY', 
    price: 'Collection', 
    count: 21, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreie4kz6obq6hjvwtrn5hi33yptemfch6kkjmwj5h22b7imipxjxd6u', 
    url: 'https://objkt.com/collections/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR',
    category: 'ARCHIVE',
    desc: '테조스 블록체인에서 보존되는 애국의 정신. Wristory의 메인넷 컬렉션입니다.'
  },
  { 
    id: 'wristory-the-admirals-resolve', 
    name: "WRISTORY: The Admiral's Resolve (장군의 결의)", 
    price: '1 Token', 
    count: 1, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeifmpdjsm6intedpfdk5tq5nyv7qgxc6mbmaqm7hmg2rt7mlucddwu', 
    url: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/23',
    category: 'ARCHIVE',
    desc: '이순신 장군의 숭고한 보국의 마음과 필사즉생의 위대한 결의를 현대적인 제너레이티브 웨이브 아트로 정밀하게 고증한 에디션입니다.'
  },
  { 
    id: 'heritage-sync', 
    name: 'HERITAGE SYNC : Tradition Meets Future', 
    price: 'Collection', 
    count: 21, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibjx5wokivdjsvwli6gbzju7fdkzatdw3kylkqw2jtr6qp5ylufvu', 
    url: 'https://objkt.com/collections/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU',
    category: 'ARCHIVE',
    desc: '전통과 미래가 만나는 지점. Wristory가 선보이는 메인넷 컬렉션입니다.'
  },
  { 
    id: 'pizza-100', 
    name: 'Bitcoin Pizza Genesis: 100', 
    price: '100 EDS', 
    count: 100, 
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop', 
    url: 'https://objkt.com/collections/KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq',
    category: 'ARCHIVE',
    desc: 'Commemorating the legendary Bitcoin Pizza transaction of May 22, 2010. Dynamic generative art powered by real Block #57043 data.'
  }
];

const CollectionView: React.FC = () => {
  // Default filter is strictly 'RECENT' to prevent endless mobile scroll
  const [filterMode, setFilterMode] = useState<'RECENT' | 'ARCHIVE'>('RECENT');
  // Fullscreen HD Inspection Modal state
  const [selectedArtwork, setSelectedArtwork] = useState<CollectionItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [viewLiveInteractive, setViewLiveInteractive] = useState<boolean>(false);

  const displayedCollections = collections.filter(item => {
    if (filterMode === 'RECENT') return item.isRecentMint === true;
    return true; // ARCHIVE shows all
  });

  const openHdModal = (item: CollectionItem) => {
    setSelectedArtwork(item);
    setZoomLevel(1);
    setViewLiveInteractive(false);
  };

  const closeHdModal = () => {
    setSelectedArtwork(null);
    setZoomLevel(1);
    setViewLiveInteractive(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black italic tracking-tight text-white uppercase flex items-center gap-2">
              <Sparkles className="text-amber-400 w-5 h-5" />
              Collections Hub
            </h2>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {filterMode === 'RECENT' ? '최근 민팅 엄선' : '전체 아카이브'}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            테조스 메인넷 검증 디지털 헤리티지 마스터피스 (작품 터치 시 고해상도 확대)
          </p>
        </div>

        {/* Filter Tabs: Recent vs All Archive */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setFilterMode('RECENT')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              filterMode === 'RECENT'
                ? 'bg-amber-500 text-black shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles size={12} />
            <span>최근 민팅 작품 (5)</span>
          </button>
          <button
            onClick={() => setFilterMode('ARCHIVE')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              filterMode === 'ARCHIVE'
                ? 'bg-blue-600 text-white shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers size={12} />
            <span>전체 아카이브 ({collections.length})</span>
          </button>
        </div>
      </div>

      {/* Notice Banner for Mobile Navigation Comfort */}
      <div className="bg-gradient-to-r from-amber-500/10 via-slate-900/40 to-blue-500/10 border border-amber-500/20 rounded-xl p-3 flex items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Eye size={14} className="text-amber-400 shrink-0" />
          <span>
            모바일 최적화 뷰가 적용되었습니다. 작품 이미지를 <strong>터치</strong>하면 <strong>고해상도 원본 뷰어</strong>로 선명하게 감상하실 수 있습니다.
          </span>
        </div>
        <a 
          href="https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created" 
          target="_blank" 
          rel="noopener noreferrer"
          className="shrink-0 text-amber-400 hover:underline font-bold text-[11px] flex items-center gap-1"
        >
          OBJKT 프로필 <ArrowUpRight size={11} />
        </a>
      </div>

      {/* Responsive Compact Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {displayedCollections.map((col) => (
          <div 
            key={col.id} 
            className={`bg-slate-900/70 border ${
              col.isMasterpiece 
                ? 'border-amber-400/60 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30' 
                : 'border-slate-800'
            } rounded-2xl overflow-hidden group hover:border-amber-400/80 transition-all flex flex-col justify-between`}
          >
            {/* Compact Image Container with Touch-to-Zoom Trigger */}
            <div 
              onClick={() => openHdModal(col)}
              className="relative aspect-[16/10] bg-black overflow-hidden cursor-pointer group/img"
              title="터치하여 고해상도 확대 (View HD)"
            >
              <img 
                src={col.image} 
                alt={col.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" 
                loading="lazy"
                onError={(e) => {
                  if (col.id === 'energy-drink-the-vitality') {
                    (e.target as HTMLImageElement).src = 'https://ipfs.io/ipfs/bafybeif45bgxlqtq6l52n3shheikn4zvfzdeub2az3v5qo3q7rofyqxftu';
                  }
                }}
              />

              {/* Badges */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md ${
                  col.isMasterpiece 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                    : 'bg-blue-600 text-white'
                }`}>
                  {col.isMasterpiece ? <ShieldCheck size={10} /> : <Sparkles size={10} />}
                  {col.editionBadge || (col.isMasterpiece ? '대표작' : 'Wristory')}
                </span>
              </div>

              {/* Price Tag Pill */}
              <div className="absolute bottom-2.5 left-2.5 bg-black/85 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[11px] font-mono font-bold text-amber-300 z-10">
                {col.price}
              </div>

              {/* Touch HD zoom hint on hover/touch */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs backdrop-blur-[1px]">
                <Maximize2 size={14} className="text-amber-300" />
                <span>터치하여 고해상도 확대</span>
              </div>

              {/* Mobile always-visible HD hint button */}
              <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-slate-900/90 text-[10px] font-bold text-slate-300 rounded border border-white/15 flex items-center gap-1 z-10">
                <Maximize2 size={10} className="text-amber-400" />
                <span>HD 확대</span>
              </div>
            </div>

            {/* Compact Info Section */}
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 
                  onClick={() => openHdModal(col)}
                  className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 cursor-pointer"
                >
                  {col.name}
                </h3>
                {col.desc && (
                  <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed line-clamp-2">
                    {col.desc}
                  </p>
                )}
              </div>

              {/* Specs & Action Buttons */}
              <div className="space-y-2 pt-1 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Tag size={11} className="text-amber-400" /> {col.price}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-slate-300">
                    <Users size={11} /> {col.count}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openHdModal(col)}
                    className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 border border-slate-700"
                  >
                    <Eye size={12} className="text-amber-400" />
                    <span>선명하게 보기</span>
                  </button>
                  <a 
                    href={col.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="py-1.5 px-2 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-black rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 border border-amber-500/30"
                  >
                    <span>OBJKT 토큰</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                {col.zoraUrl && (
                  <a 
                    href={col.zoraUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-1 text-center bg-blue-600/10 hover:bg-blue-600/20 text-blue-300 rounded text-[10px] font-bold transition-all flex items-center justify-center gap-1 border border-blue-500/20"
                  >
                    <span>Zora Base 온체인 코인 연동</span>
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* ULTRA-HD INTERACTIVE LIGHTBOX MODAL (고해상도 터치 뷰어) */}
      {/* ========================================================================= */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeHdModal();
          }}
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between gap-2 max-w-5xl w-full mx-auto pb-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="px-2 py-0.5 bg-amber-500 text-black text-[10px] font-extrabold uppercase rounded">
                HD Original
              </span>
              <h4 className="text-white text-xs sm:text-sm font-bold truncate">
                {selectedArtwork.name}
              </h4>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Toggle Live Canvas if available */}
              {selectedArtwork.ipfsUrl && (
                <button
                  onClick={() => setViewLiveInteractive(!viewLiveInteractive)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border ${
                    viewLiveInteractive
                      ? 'bg-emerald-600 text-white border-emerald-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                  title="실시간 캔버스 원본 구동"
                >
                  <Sparkles size={12} className={viewLiveInteractive ? 'text-yellow-300 animate-spin' : ''} />
                  <span className="hidden sm:inline">
                    {viewLiveInteractive ? '실시간 캔버스 실행 중' : '캔버스 원본 실행'}
                  </span>
                  <span className="sm:hidden">
                    {viewLiveInteractive ? '캔버스' : '원본'}
                  </span>
                </button>
              )}

              {/* Zoom Buttons (only for image mode) */}
              {!viewLiveInteractive && (
                <div className="flex items-center gap-1 bg-slate-900 border border-slate-700 rounded-lg p-0.5">
                  <button
                    onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.25))}
                    className="p-1 text-slate-300 hover:text-white rounded"
                    title="축소"
                  >
                    <ZoomOut size={14} />
                  </button>
                  <span className="text-[10px] font-mono text-slate-300 px-1">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={() => setZoomLevel(prev => Math.min(2.5, prev + 0.25))}
                    className="p-1 text-slate-300 hover:text-white rounded"
                    title="확대"
                  >
                    <ZoomIn size={14} />
                  </button>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={closeHdModal}
                className="p-1.5 bg-slate-800 hover:bg-red-600 text-white rounded-lg transition-colors border border-white/10"
                title="닫기 (ESC)"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Main Inspection View Area */}
          <div className="flex-1 flex items-center justify-center overflow-hidden my-2 relative">
            {viewLiveInteractive && selectedArtwork.ipfsUrl ? (
              <div className="w-full h-full max-w-4xl max-h-[75vh] bg-black rounded-xl overflow-hidden border border-emerald-500/40 shadow-2xl relative">
                <iframe
                  src={selectedArtwork.ipfsUrl}
                  title={selectedArtwork.name}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-[10px] font-mono text-emerald-400 rounded border border-emerald-500/40 pointer-events-none">
                  ⚡ 100% Vector/Retina Native Render
                </div>
              </div>
            ) : (
              <div 
                className="max-w-4xl max-h-[75vh] w-full h-full flex items-center justify-center p-2 overflow-auto transition-transform duration-200"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center'
                }}
              >
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.name}
                  className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                  style={{
                    imageRendering: 'auto',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                  onError={(e) => {
                    if (selectedArtwork.ipfsUrl) {
                      (e.target as HTMLImageElement).src = selectedArtwork.ipfsUrl;
                    }
                  }}
                />
              </div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="max-w-5xl w-full mx-auto pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="text-left w-full sm:w-auto">
              <p className="text-xs text-slate-300 font-medium line-clamp-1">
                {selectedArtwork.desc || selectedArtwork.name}
              </p>
              <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-0.5">
                <span className="text-amber-400 font-bold">{selectedArtwork.price}</span>
                <span>에디션: {selectedArtwork.count}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={selectedArtwork.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none py-2 px-4 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow"
              >
                <span>OBJKT 토큰 보기</span>
                <ArrowUpRight size={13} />
              </a>
              {selectedArtwork.ipfsUrl && (
                <a
                  href={selectedArtwork.ipfsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all flex items-center gap-1 border border-slate-700"
                >
                  <span>IPFS 원본</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionView;

