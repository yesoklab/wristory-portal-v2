import React, { useState } from 'react';
import { 
  ExternalLink, ArrowUpRight, 
  Sparkles, Maximize2, X, ZoomIn, ZoomOut, Eye, Layers
} from 'lucide-react';
import { translations, Lang } from '../lib/translations';

export interface CollectionItem {
  id: string;
  name: string;
  chain: 'BASE' | 'TEZOS';
  price: string;
  count: string;
  editionBadge: string;
  image: string;
  fallbackImage: string;
  ipfsUrl: string;
  url: string;
  highlightUrl?: string;
  openseaUrl?: string;
  zoraUrl?: string;
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
        <h1 className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tight">
          {lang === 'ko' ? '엄선된 2대 메인넷 대표작' : 'Curated Dual Mainnet Masterpieces'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          {lang === 'ko'
            ? '이더리움 Layer-2(Base)와 테조스(Tezos)의 역사적 가치를 대변하는 2개의 헤리티지 제너러티브 마스터피스'
            : 'Two generative fine art icons representing historical literature and blockchain origins.'}
        </p>
      </div>

      {/* Two Masterpieces Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
        {curatedMasterpieces.map((item) => (
          <div 
            key={item.id}
            className={`rounded-3xl bg-slate-900/90 border-2 p-6 flex flex-col justify-between shadow-2xl transition-all ${
              item.chain === 'BASE' 
                ? 'border-emerald-500/40 hover:border-emerald-400' 
                : 'border-amber-500/40 hover:border-amber-400'
            }`}
          >
            <div className="space-y-4">
              {/* Image Frame */}
              <div 
                onClick={() => openHdModal(item)}
                className="relative aspect-[16/10] rounded-2xl bg-black overflow-hidden cursor-pointer group/img border border-white/10"
                title={lang === 'ko' ? '클릭하여 무손실 고화질(HD) 확대' : 'Click to inspect in HD'}
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.fallbackImage;
                  }}
                />
                <span className={`absolute top-3 left-3 px-3 py-1 text-white text-[10px] font-black uppercase rounded-full shadow ${
                  item.chain === 'BASE' ? 'bg-emerald-600' : 'bg-amber-600'
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
                  {item.chain === 'BASE' ? 'BASE MAINNET' : 'TEZOS MAINNET'}
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
                  item.chain === 'BASE' 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500' 
                    : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500'
                }`}
              >
                <Sparkles size={14} className="text-yellow-300" />
                <span>{item.chain === 'BASE' ? (lang === 'ko' ? 'Highlight 신작 민팅하기' : 'Mint on Highlight') : (lang === 'ko' ? 'OBJKT 대표 컬렉션 감상' : 'View on OBJKT')}</span>
                <ArrowUpRight size={14} />
              </a>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {item.openseaUrl ? (
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
                {viewLiveInteractive ? (lang === 'ko' ? '정적 이미지 보기' : 'View Static Image') : (lang === 'ko' ? '라이브 캔버스 인터랙티브 모드' : 'Interactive Live Canvas')}
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
