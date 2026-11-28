import React, { useState } from 'react';
import { 
  ExternalLink, ArrowUpRight, 
  Sparkles, Maximize2, X, ZoomIn, ZoomOut, Eye, Layers
} from 'lucide-react';
import { translations, Lang } from '../lib/translations';

export interface CollectionItem {
  id: string;
  name: string;
  chain: 'BASE' | 'TEZOS' | 'DUAL';
  price: string;
  count: string;
  editionBadge: string;
  image: string;
  fallbackImage: string;
  ipfsUrl: string;
  mediaType?: 'image' | 'video';
  fitContain?: boolean;
  poster?: string;
  url: string;
  ctaLabel?: string;
  highlightUrl?: string;
  openseaUrl?: string;
  zoraUrl?: string;
  objktUrl?: string;
  charityUrl?: string;
  isMasterpiece: boolean;
  desc: string;
}

interface CollectionViewProps {
  lang?: Lang;
}

const CollectionView: React.FC<CollectionViewProps> = ({ lang = 'ko' }) => {
  const t = translations[lang] || translations.ko;

  const curatedMasterpieces: CollectionItem[] = [
    {
      id: 'echoes-of-harbin-ahn',
      name: lang === 'ko' ? '하얼빈의 메아리: 안중근 의사 (1909.10.26) — 1-Bit 픽셀아트' : 'Echoes of Harbin: Ahn Jung-geun (1909.10.26) — 1-Bit Pixel Art',
      chain: 'DUAL',
      price: 'OpenSea (Base #1) · Objkt (#46)',
      count: 'Base ERC-721 × Tezos FA2',
      editionBadge: lang === 'ko' ? '최신 민팅 · Pure On-Chain 1-Bit' : 'Latest Mint · Pure On-Chain 1-Bit',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreictf5iv6wmhkd556sbfpqvqa4fipq63zslnok3iylv2ryvuokuvwe',
      fallbackImage: 'https://ipfs.io/ipfs/bafkreictf5iv6wmhkd556sbfpqvqa4fipq63zslnok3iylv2ryvuokuvwe',
      ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreictf5iv6wmhkd556sbfpqvqa4fipq63zslnok3iylv2ryvuokuvwe',
      fitContain: true,
      url: 'https://opensea.io/item/base/0x7fd83bf061878f7c8c1b07dbae14ce639f3dce43/1',
      ctaLabel: lang === 'ko' ? 'OpenSea (Base #1) 감상하기' : 'View on OpenSea (Base #1)',
      openseaUrl: 'https://opensea.io/item/base/0x7fd83bf061878f7c8c1b07dbae14ce639f3dce43/1',
      objktUrl: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/46',
      isMasterpiece: true,
      desc: lang === 'ko'
        ? '1909년 10월 26일 하얼빈 의거와 도마 안중근 의사의 단지 수인, 「大韓獨立」 유묵을 기리는 100% 순수 온체인 1-비트 디더링 픽셀아트. 240×320 비트맵과 64프레임 루프를 외부 의존성 없이 순수 코드에 Base64 내장했습니다.'
        : '100% pure on-chain 1-bit dithered pixel art honoring General Ahn Jung-geun (1909.10.26). Encodes the entire 240×320 bitmap and 64-frame seamless loop inside vanilla code with zero external dependencies.'
    },
    {
      id: 'do-not-cry-homeland',
      name: lang === 'ko' ? '조국아 울지 마라 (Do Not Cry, Homeland)' : 'Do Not Cry, Homeland (조국아 울지 마라)',
      chain: 'DUAL',
      price: '0.0019 ETH · 100% Charity',
      count: 'Base & Tezos Dual',
      editionBadge: lang === 'ko' ? '100% 굿네이버스 기증 · OpenSea & Objkt' : '100% Good Neighbors · Dual-Chain Drop',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeifctqeqhu4ktzgnmzfki4q4fp23hmgcjoik56vlcektscmwkc25me',
      fallbackImage: '/assets/aistudio/100_b03b9436.png',
      ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeifctqeqhu4ktzgnmzfki4q4fp23hmgcjoik56vlcektscmwkc25me',
      mediaType: 'video',
      poster: '/assets/aistudio/100_b03b9436.png',
      url: 'https://opensea.io/collection/do-not-cry-homeland-2026/overview',
      openseaUrl: 'https://opensea.io/collection/do-not-cry-homeland-2026/overview',
      objktUrl: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/43',
      charityUrl: 'https://www.goodneighbors.kr/campaign/diaspora24a',
      isMasterpiece: true,
      desc: lang === 'ko'
        ? '연해주 최재형·한창걸 부대·이종국 선생의 독립정신과 1937년 강제이주 6,500 km를 견딘 고려인, 후손 시인 이 스타니슬라브의 「조국아 울지 마라」를 담은 3D 기념우표 공익 아트. 판매 수익 및 로열티 100%를 굿네이버스 고려인 지원 캠페인에 기증합니다.'
        : '3D commemorative charity-seal generative artwork honoring Primorye independence heroes and 170,000+ Koryo-saram deported in 1937. 100% of primary sales and 10% royalties donated to Good Neighbors.'
    },
    {
      id: 'sound-alignment-v2',
      name: lang === 'ko' ? 'SOUND ALIGNMENT v2 — 훈민정음: 소리의 기하학' : 'SOUND ALIGNMENT v2 — Geometry of Hunminjeongeum',
      chain: 'TEZOS',
      price: '14 Editions · OBJKT #45',
      count: 'Tezos FA2',
      editionBadge: lang === 'ko' ? 'Tezos 신작 • OBJKT #45 (14 Eds)' : 'Tezos New Mint • OBJKT #45 (14 Eds)',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiax5f365c2roqeyyvpuxxlt2zjp27e445oldekyte2gy7aec6keau',
      fallbackImage: 'https://ipfs.io/ipfs/bafybeiax5f365c2roqeyyvpuxxlt2zjp27e445oldekyte2gy7aec6keau',
      ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiax5f365c2roqeyyvpuxxlt2zjp27e445oldekyte2gy7aec6keau',
      fitContain: true,
      url: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/45',
      ctaLabel: lang === 'ko' ? 'Tezos Objkt (#45) 감상하기' : 'View on OBJKT (#45)',
      objktUrl: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/45',
      isMasterpiece: true,
      desc: lang === 'ko'
        ? '1446년 「훈민정음 해례본」에서 영감을 받은 인터랙티브 제너러티브 아카이브. 천·지·인 삼재(·, ㅡ, ㅣ)의 입자 수렴부터 오음(ㄱ·ㄴ·ㅁ·ㅅ·ㅇ) 상형, 음절의 진화까지 한글의 철학과 소리의 기하학을 3단계 알고리즘으로 재구성합니다.'
        : 'Interactive generative archive inspired by the 1446 Hunminjeongeum Haerye, reconstructing Hangul’s cosmic triad (·, ㅡ, ㅣ), five basic consonants, and phonetic geometry across three progressive stages.'
    },
    {
      id: 'buckwheat-flowers',
      name: lang === 'ko' ? '이효석 — 메밀꽃 필 무렵' : 'Lee Hyo-seok — When Buckwheat Flowers Bloom',
      chain: 'BASE',
      price: 'Highlight / Zora',
      count: 'Base L2',
      editionBadge: lang === 'ko' ? 'Base 대표작 • Highlight 신작' : 'Base Curated Masterpiece',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeidesvpxsy24eciyqyinzq6nvokokgnm7chqy7w64xv3s3jw3w7r7q',
      fallbackImage: 'https://ipfs.io/ipfs/bafybeidesvpxsy24eciyqyinzq6nvokokgnm7chqy7w64xv3s3jw3w7r7q',
      ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeidesvpxsy24eciyqyinzq6nvokokgnm7chqy7w64xv3s3jw3w7r7q',
      url: 'https://highlight.xyz/mint/01a09a4c-618c-77a8-9065-0604b9428efa',
      highlightUrl: 'https://highlight.xyz/mint/01a09a4c-618c-77a8-9065-0604b9428efa',
      openseaUrl: 'https://opensea.io/collection/wristory-moonlit-heritage',
      zoraUrl: 'https://zora.co/coin/base:0x5ea3b56bad0b76ad6d9855581ff15e66afdce993?referrer=0x58346be51802b17a3c5bb110df14f5487a92dbd6',
      isMasterpiece: true,
      desc: lang === 'ko'
        ? '한국 근대 서정문학의 백미 가산(可山) 이효석 선생의 소설을 온체인 자율 생성 예술로 승화. 달빛 아래 소금을 뿌린 듯 흐뭇이 하얗게 핀 메밀꽃밭의 정취를 블록체인에 영구 보존합니다.'
        : 'Translating Lee Hyo-seok’s 1936 literary masterpiece into on-chain generative art. Preserving the moonlit buckwheat fields forever upon Ethereum Layer-2 (Base).'
    },
    {
      id: 'bitcoin-pizza',
      name: lang === 'ko' ? '비트코인 피자 — Bitcoin Pizza Day' : 'Bitcoin Pizza — 10,000 BTC Heritage',
      chain: 'TEZOS',
      price: 'OBJKT Collection',
      count: 'Tezos FA2',
      editionBadge: lang === 'ko' ? 'Tezos 대표작 • OBJKT 공식' : 'Tezos Curated Masterpiece',
      image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigaagzodoc3kivyp6n5evy24cr5s45ymxhs3eh7jll4f4maafsbk4',
      fallbackImage: 'https://ipfs.io/ipfs/bafybeigaagzodoc3kivyp6n5evy24cr5s45ymxhs3eh7jll4f4maafsbk4',
      ipfsUrl: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigaagzodoc3kivyp6n5evy24cr5s45ymxhs3eh7jll4f4maafsbk4',
      url: 'https://objkt.com/collections/KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq',
      isMasterpiece: true,
      desc: lang === 'ko'
        ? '2010년 5월 22일 10,000 BTC로 피자 2판을 교환한 암호화폐 실물 거래의 역사적 시초를 기리는 온체인 제너러티브 마스터피스. 테조스(Tezos) 메인넷 위에서 영구히 기록되었습니다.'
        : 'Commemorating the first real-world Bitcoin transaction on May 22, 2010 (10,000 BTC for two pizzas). Rendered as an eternal generative heritage on Tezos.'
    }
  ];

  // HD Modal inspection state
  const [selectedArtwork, setSelectedArtwork] = useState<CollectionItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [viewLiveInteractive, setViewLiveInteractive] = useState<boolean>(false);

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
    <div className="space-y-10 pb-16 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles size={13} className="text-yellow-300" />
          {lang === 'ko' ? 'WRISTORY 공식 듀얼 큐레이션' : 'WRISTORY Curated Dual Showcase'}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {lang === 'ko' ? 'WRISTORY 온체인 컬렉션 아카이브 (5대 대표작)' : 'WRISTORY On-Chain Archive (5 Curated Works)'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          {lang === 'ko'
            ? '최신작 「안중근 의사 1-Bit 픽셀아트」부터 「조국아 울지 마라」, 「훈민정음 SOUND ALIGNMENT v2」, 「메밀꽃 필 무렵」, 「비트코인 피자」까지 공식 마켓플레이스로 연결됩니다.'
            : 'Direct on-chain marketplace archive: Echoes of Harbin (Ahn Jung-geun), Do Not Cry Homeland, SOUND ALIGNMENT v2, Buckwheat Flowers, and Bitcoin Pizza.'}
        </p>
      </div>

      {/* Masterpieces Showcase: Latest Featured + 2x2 Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
        {curatedMasterpieces.map((item, idx) => (
          <div 
            key={item.id}
            className={`${idx === 0 ? 'md:col-span-2' : ''} rounded-2xl bg-slate-900/90 border p-6 flex flex-col justify-between transition-colors ${
              item.chain === 'DUAL'
                ? 'border-amber-500/35 hover:border-amber-400/70'
                : item.chain === 'BASE' 
                ? 'border-emerald-500/35 hover:border-emerald-400/70' 
                : 'border-cyan-500/35 hover:border-cyan-400/70'
            }`}
          >
            <div className="space-y-4">
              {/* Media Frame */}
              <div 
                onClick={() => openHdModal(item)}
                className="relative aspect-[16/10] rounded-2xl bg-black overflow-hidden cursor-pointer group/img border border-white/10"
                title={lang === 'ko' ? '클릭하여 무손실 고화질(HD) 확대' : 'Click to inspect in HD'}
              >
                {item.mediaType === 'video' ? (
                  <video
                    src={item.image}
                    poster={item.poster || item.fallbackImage}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain bg-black group-hover/img:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className={`w-full h-full ${item.fitContain ? 'object-contain bg-black' : 'object-cover'} group-hover/img:scale-105 transition-transform duration-500`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = item.fallbackImage;
                    }}
                  />
                )}
                <span className={`absolute top-3 left-3 px-3 py-1 text-white text-[10px] font-black uppercase rounded-full shadow ${
                  item.chain === 'DUAL' ? 'bg-rose-600' : item.chain === 'BASE' ? 'bg-emerald-600' : 'bg-amber-600'
                }`}>
                  {item.editionBadge}
                </span>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-[2px]">
                  <Maximize2 size={16} className="text-amber-400" />
                  <span>{lang === 'ko' ? 'HD 확대 보기' : 'HD Inspect'}</span>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  {item.chain === 'DUAL' ? 'BASE × TEZOS DUAL CHAIN' : item.chain === 'BASE' ? 'BASE MAINNET' : 'TEZOS MAINNET'}
                </span>
                <h2 className="text-xl font-black text-white italic tracking-tight">{item.name}</h2>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 space-y-2 mt-4">
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 text-white rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 shadow-lg active:scale-95 ${
                  item.chain === 'DUAL'
                    ? 'bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500'
                    : item.chain === 'BASE' 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500' 
                    : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500'
                }`}
              >
                <Sparkles size={14} className="text-yellow-300" />
                <span>
                  {item.ctaLabel
                    ? item.ctaLabel
                    : item.chain === 'DUAL'
                    ? (lang === 'ko' ? 'OpenSea 민팅 (0.0019 ETH)' : 'Mint on OpenSea (0.0019 ETH)')
                    : item.chain === 'BASE'
                    ? (lang === 'ko' ? 'Highlight 신작 민팅하기' : 'Mint on Highlight')
                    : (lang === 'ko' ? 'OBJKT 대표 컬렉션 감상' : 'View on OBJKT')}
                </span>
                <ArrowUpRight size={14} />
              </a>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {item.id === 'echoes-of-harbin-ahn' && item.objktUrl ? (
                  <a 
                    href={item.objktUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-white rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-amber-500/30"
                  >
                    <span>Tezos Objkt (#46)</span>
                    <ExternalLink size={11} />
                  </a>
                ) : item.charityUrl ? (
                  <a 
                    href={item.charityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-emerald-500/30"
                  >
                    <span>{lang === 'ko' ? '굿네이버스 캠페인' : 'Good Neighbors'}</span>
                    <ExternalLink size={11} />
                  </a>
                ) : item.openseaUrl ? (
                  <a 
                    href={item.openseaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-blue-500/30"
                  >
                    <span>OpenSea</span>
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <a 
                    href={item.ipfsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-slate-700"
                  >
                    <span>IPFS 원본</span>
                    <ExternalLink size={11} />
                  </a>
                )}
                <button 
                  onClick={() => openHdModal(item)}
                  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-slate-700"
                >
                  <Maximize2 size={12} className="text-amber-400" />
                  <span>HD View</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* HD Lightbox Inspection Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeHdModal}
        >
          <div 
            className="max-w-6xl mx-auto w-full flex items-center justify-between pb-3 border-b border-white/10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="text-base sm:text-lg font-bold">{selectedArtwork.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{selectedArtwork.editionBadge}</p>
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

          <div 
            className="flex-1 max-w-6xl mx-auto w-full flex items-center justify-center overflow-auto my-3 p-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="relative transition-transform duration-200 origin-center flex items-center justify-center max-w-full max-h-full"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {selectedArtwork.mediaType === 'video' ? (
                viewLiveInteractive ? (
                  <img 
                    src={selectedArtwork.poster || selectedArtwork.fallbackImage} 
                    alt={selectedArtwork.name} 
                    className="max-w-[90vw] max-h-[72vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  />
                ) : (
                  <video
                    src={selectedArtwork.image}
                    poster={selectedArtwork.poster || selectedArtwork.fallbackImage}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="max-w-[90vw] max-h-[72vh] object-contain rounded-xl shadow-2xl border border-white/10 bg-black"
                  >
                    <source src={selectedArtwork.image} type="video/webm" />
                  </video>
                )
              ) : viewLiveInteractive ? (
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
                    (e.target as HTMLImageElement).src = selectedArtwork.fallbackImage;
                  }}
                />
              )}
            </div>
          </div>

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
                {selectedArtwork.mediaType === 'video'
                  ? (viewLiveInteractive ? (lang === 'ko' ? 'WEBC 영상으로 보기' : 'View WEBC Video') : (lang === 'ko' ? '고화질 스틸 보기' : 'View Static Image'))
                  : (viewLiveInteractive ? (lang === 'ko' ? '정적 이미지 보기' : 'View Static Image') : (lang === 'ko' ? '라이브 캔버스 인터랙티브 모드' : 'Interactive Live Canvas'))}
              </button>
              <a 
                href={selectedArtwork.ipfsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
              >
                <span>IPFS 원본</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <a 
              href={selectedArtwork.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-lg text-xs transition-colors flex items-center gap-1 shadow-md shadow-blue-600/30"
            >
              <Sparkles size={13} className="text-yellow-300" />
              <span>{lang === 'ko' ? '공식 페이지 바로가기' : 'Visit Official Page'}</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionView;
