import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight, 
  Maximize2, 
  X, 
  ZoomIn, 
  ZoomOut, 
  Layers, 
  TrendingUp, 
  Coins, 
  ShieldCheck,
  ChevronRight,
  Share2,
  Check
} from 'lucide-react';
import { translations, Lang } from '../lib/translations';

interface LandingPageViewProps {
  lang: Lang;
  onNavigate: (tab: any) => void;
  hasApiKey?: boolean;
}

const LandingPageView: React.FC<LandingPageViewProps> = ({ lang, onNavigate }) => {
  const t = translations[lang] || translations.ko;

  // External Links
  const LOGO_URL = 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeihlabi2xoajwvf2sabiiltszjqawxuayvux22iarkaifckk7ruwei';
  const BASE_CONTRACT = '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7';
  const UNISWAP_V4_POSITION_URL = 'https://app.uniswap.org/positions/v4/base/2953119';
  const GECKOTERMINAL_TOKEN_URL = 'https://www.geckoterminal.com/base/tokens/0x9de688b818d1755f4daf82d25662da1bbedd17b7';
  
  // Base Masterpiece Links (When Buckwheat Flowers Bloom)
  const BUCKWHEAT_IMAGE = 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeidesvpxsy24eciyqyinzq6nvokokgnm7chqy7w64xv3s3jw3w7r7q';
  const BUCKWHEAT_FALLBACK = 'https://ipfs.io/ipfs/bafybeidesvpxsy24eciyqyinzq6nvokokgnm7chqy7w64xv3s3jw3w7r7q';
  const BUCKWHEAT_HIGHLIGHT = 'https://highlight.xyz/mint/01a09a4c-618c-77a8-9065-0604b9428efa';
  const BUCKWHEAT_OPENSEA = 'https://opensea.io/collection/wristory-moonlit-heritage';
  const BUCKWHEAT_ZORA = 'https://zora.co/coin/base:0x5ea3b56bad0b76ad6d9855581ff15e66afdce993?referrer=0x58346be51802b17a3c5bb110df14f5487a92dbd6';

  // Tezos Masterpiece Links (Bitcoin Pizza Day)
  const PIZZA_IMAGE = 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigaagzodoc3kivyp6n5evy24cr5s45ymxhs3eh7jll4f4maafsbk4';
  const PIZZA_FALLBACK = 'https://ipfs.io/ipfs/bafybeigaagzodoc3kivyp6n5evy24cr5s45ymxhs3eh7jll4f4maafsbk4';
  const PIZZA_OBJKT = 'https://objkt.com/collections/KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq';

  // HD Lightbox Inspection State
  const [activeModalItem, setActiveModalItem] = useState<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
    fallbackImage: string;
    ipfsUrl: string;
    primaryAction: { label: string; url: string };
  } | null>(null);

  const [zoomScale, setZoomScale] = useState<number>(1);
  const [isInteractiveMode, setIsInteractiveMode] = useState<boolean>(false);
  const [copiedContract, setCopiedContract] = useState<boolean>(false);

  const handleCopyContract = () => {
    navigator.clipboard.writeText(BASE_CONTRACT);
    setCopiedContract(true);
    setTimeout(() => setCopiedContract(false), 2000);
  };

  const openLightbox = (
    id: string,
    title: string,
    subtitle: string,
    image: string,
    fallbackImage: string,
    primaryLabel: string,
    primaryUrl: string
  ) => {
    setActiveModalItem({
      id,
      title,
      subtitle,
      image,
      fallbackImage,
      ipfsUrl: image,
      primaryAction: { label: primaryLabel, url: primaryUrl }
    });
    setZoomScale(1);
    setIsInteractiveMode(false);
  };

  const closeLightbox = () => {
    setActiveModalItem(null);
    setZoomScale(1);
    setIsInteractiveMode(false);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 animate-in fade-in duration-500">
      {/* 1. Hero Section: Refined, Elegant & Impactful */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 text-center">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-slate-800/80 p-6 sm:p-12 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#3b82f61a_0%,_transparent_65%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* WRISTORY Official Logo Badge */}
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
                <img 
                  src={LOGO_URL} 
                  alt="WRISTORY Official Brandmark" 
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-white/20 shadow-xl bg-slate-950"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ipfs.io/ipfs/bafybeihlabi2xoajwvf2sabiiltszjqawxuayvux22iarkaifckk7ruwei';
                  }}
                />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-[11px] font-bold tracking-wider uppercase">
                <ShieldCheck size={13} className="text-[#00ffcc]" />
                {t.hero.tagline}
              </span>
            </div>

            {/* Typography */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase italic leading-none">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] to-blue-400">
                {t.hero.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto pt-1">
                {t.hero.description}
              </p>
            </div>

            {/* Curated 4-Pillars Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 bg-slate-950/70 border border-slate-800/80 p-3.5 sm:p-4 rounded-2xl text-center">
              <div>
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">{t.metrics.chains}</p>
                <p className="text-xs sm:text-sm font-black text-cyan-300 mt-0.5">{t.metrics.chainsVal}</p>
              </div>
              <div className="border-l border-slate-800">
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">{t.metrics.masterpieces}</p>
                <p className="text-xs sm:text-sm font-black text-amber-400 mt-0.5">{t.metrics.masterpiecesVal}</p>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-slate-800">
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">{t.metrics.curation}</p>
                <p className="text-xs sm:text-sm font-black text-emerald-400 mt-0.5">{t.metrics.curationVal}</p>
              </div>
              <div className="border-t sm:border-t-0 border-l border-slate-800">
                <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase">{t.metrics.storage}</p>
                <p className="text-xs sm:text-sm font-black text-purple-300 mt-0.5">{t.metrics.storageVal}</p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#masterpieces"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs sm:text-sm font-black uppercase transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles size={15} className="text-yellow-300" />
                {t.hero.exploreMasterpieces}
              </a>
              <a
                href={BUCKWHEAT_OPENSEA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs sm:text-sm font-bold transition-all border border-slate-700 flex items-center justify-center gap-2 active:scale-95"
              >
                <span>{t.hero.viewOpenSea}</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Focused Dual Masterpieces Section (Base 1 + Tezos 1) */}
      <section id="masterpieces" className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 scroll-mt-24">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
            <Sparkles size={12} className="text-yellow-300" />
            {t.dualSection.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white italic uppercase tracking-tight">
            {t.dualSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            {t.dualSection.subtitle}
          </p>
        </div>

        {/* The Two Masterpieces Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Masterpiece 1: Base Chain (Lee Hyo-seok - When Buckwheat Flowers Bloom) */}
          <div className="relative rounded-3xl bg-slate-900/80 border-2 border-emerald-500/40 p-5 sm:p-7 shadow-2xl flex flex-col justify-between group hover:border-emerald-400 transition-all text-left">
            <div className="space-y-5">
              {/* Image Frame with HD Zoom Action */}
              <div 
                onClick={() => openLightbox(
                  'buckwheat',
                  t.artworks.buckwheat.title,
                  t.artworks.buckwheat.subtitle,
                  BUCKWHEAT_IMAGE,
                  BUCKWHEAT_FALLBACK,
                  t.artworks.buckwheat.mintBtn,
                  BUCKWHEAT_HIGHLIGHT
                )}
                className="relative aspect-[16/10] rounded-2xl bg-black overflow-hidden cursor-pointer group/img border border-white/10 shadow-lg"
                title={lang === 'ko' ? '클릭하여 무손실 고화질(HD) 확대' : 'Click to inspect in HD'}
              >
                <img 
                  src={BUCKWHEAT_IMAGE} 
                  alt={t.artworks.buckwheat.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = BUCKWHEAT_FALLBACK;
                  }}
                />
                
                {/* Chain Badge overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-[10px] font-black uppercase rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles size={11} className="text-yellow-300" />
                    BASE L2
                  </span>
                  <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-[10px] font-bold rounded-full">
                    Highlight & OpenSea
                  </span>
                </div>

                {/* Inspect Overlay Prompt */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-[2px]">
                  <Maximize2 size={16} className="text-amber-400" />
                  <span>{t.modal.hdView}</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <div>
                  <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest block">
                    {t.dualSection.baseChain}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white italic tracking-tight mt-0.5">
                    {t.artworks.buckwheat.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">{t.artworks.buckwheat.subtitle}</p>
                </div>

                {/* Literary Quote Box */}
                <div className="bg-slate-950/70 border border-slate-800 p-3 sm:p-4 rounded-xl text-xs text-amber-200/90 italic leading-relaxed">
                  {t.artworks.buckwheat.quote}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.artworks.buckwheat.desc}
                </p>

                <div className="text-[11px] text-slate-400 space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60 font-mono">
                  <p className="truncate">✦ {t.artworks.buckwheat.detail1}</p>
                  <p className="truncate">✦ {t.artworks.buckwheat.detail2}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons Hub */}
            <div className="space-y-2 pt-5 border-t border-slate-800/80 mt-5">
              {/* Primary Minting CTA */}
              <a
                href={BUCKWHEAT_HIGHLIGHT}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/30 active:scale-95"
              >
                <Sparkles size={14} className="text-yellow-300" />
                <span>{t.artworks.buckwheat.mintBtn}</span>
                <ArrowUpRight size={14} />
              </a>

              {/* Secondary Clean Action Pair */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                <a
                  href={BUCKWHEAT_OPENSEA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-blue-500/30 active:scale-95 text-center truncate"
                >
                  <span>OpenSea</span>
                  <ExternalLink size={11} />
                </a>
                <a
                  href={BUCKWHEAT_ZORA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-purple-500/30 active:scale-95 text-center truncate"
                >
                  <span>Zora</span>
                  <ExternalLink size={11} />
                </a>
                <button
                  onClick={() => openLightbox(
                    'buckwheat',
                    t.artworks.buckwheat.title,
                    t.artworks.buckwheat.subtitle,
                    BUCKWHEAT_IMAGE,
                    BUCKWHEAT_FALLBACK,
                    t.artworks.buckwheat.mintBtn,
                    BUCKWHEAT_HIGHLIGHT
                  )}
                  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-slate-700 active:scale-95 text-center truncate"
                >
                  <Maximize2 size={11} className="text-amber-400" />
                  <span>HD View</span>
                </button>
              </div>
            </div>
          </div>

          {/* Masterpiece 2: Tezos Chain (Bitcoin Pizza Day) */}
          <div className="relative rounded-3xl bg-slate-900/80 border-2 border-amber-500/40 p-5 sm:p-7 shadow-2xl flex flex-col justify-between group hover:border-amber-400 transition-all text-left">
            <div className="space-y-5">
              {/* Image Frame with HD Zoom Action */}
              <div 
                onClick={() => openLightbox(
                  'pizza',
                  t.artworks.pizza.title,
                  t.artworks.pizza.subtitle,
                  PIZZA_IMAGE,
                  PIZZA_FALLBACK,
                  t.artworks.pizza.objktBtn,
                  PIZZA_OBJKT
                )}
                className="relative aspect-[16/10] rounded-2xl bg-black overflow-hidden cursor-pointer group/img border border-white/10 shadow-lg"
                title={lang === 'ko' ? '클릭하여 무손실 고화질(HD) 확대' : 'Click to inspect in HD'}
              >
                <img 
                  src={PIZZA_IMAGE} 
                  alt={t.artworks.pizza.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = PIZZA_FALLBACK;
                  }}
                />
                
                {/* Chain Badge overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-orange-500 text-white text-[10px] font-black uppercase rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles size={11} className="text-yellow-200" />
                    TEZOS FA2
                  </span>
                  <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[10px] font-bold rounded-full">
                    OBJKT.com
                  </span>
                </div>

                {/* Inspect Overlay Prompt */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-[2px]">
                  <Maximize2 size={16} className="text-amber-400" />
                  <span>{t.modal.hdView}</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <div>
                  <span className="text-[11px] font-black text-amber-400 uppercase tracking-widest block">
                    {t.dualSection.tezosChain}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white italic tracking-tight mt-0.5">
                    {t.artworks.pizza.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">{t.artworks.pizza.subtitle}</p>
                </div>

                {/* Historical Quote Box */}
                <div className="bg-slate-950/70 border border-slate-800 p-3 sm:p-4 rounded-xl text-xs text-amber-200/90 italic leading-relaxed">
                  {t.artworks.pizza.quote}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.artworks.pizza.desc}
                </p>

                <div className="text-[11px] text-slate-400 space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60 font-mono">
                  <p className="truncate">✦ {t.artworks.pizza.detail1}</p>
                  <p className="truncate">✦ {t.artworks.pizza.detail2}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons Hub */}
            <div className="space-y-2 pt-5 border-t border-slate-800/80 mt-5">
              {/* Primary OBJKT CTA */}
              <a
                href={PIZZA_OBJKT}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-amber-600/30 active:scale-95"
              >
                <Sparkles size={14} className="text-yellow-200" />
                <span>{t.artworks.pizza.objktBtn}</span>
                <ArrowUpRight size={14} />
              </a>

              {/* Secondary Clean Action Pair */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={PIZZA_IMAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-slate-700 active:scale-95 text-center truncate"
                >
                  <span>{t.artworks.pizza.ipfsBtn}</span>
                  <ExternalLink size={11} />
                </a>
                <button
                  onClick={() => openLightbox(
                    'pizza',
                    t.artworks.pizza.title,
                    t.artworks.pizza.subtitle,
                    PIZZA_IMAGE,
                    PIZZA_FALLBACK,
                    t.artworks.pizza.objktBtn,
                    PIZZA_OBJKT
                  )}
                  className="py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold transition-all flex items-center justify-center gap-1 border border-slate-700 active:scale-95 text-center truncate"
                >
                  <Maximize2 size={11} className="text-amber-400" />
                  <span>HD View</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Essential On-Chain Verification & Liquidity Card (Concise & Focused) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-left">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] font-mono font-bold">
                Base Mainnet ERC-20 ($WR)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-bold">
                Uniswap v4 Verified
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {lang === 'ko' ? '공식 스마트 컨트랙트 및 DEX 유동성' : 'Verified Smart Contract & DEX Liquidity'}
            </h3>
            <div className="flex items-center gap-2 pt-1">
              <code className="text-xs sm:text-sm font-mono text-[#00ffcc] bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 select-all">
                {BASE_CONTRACT}
              </code>
              <button 
                onClick={handleCopyContract}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                title={lang === 'ko' ? '주소 복사' : 'Copy Address'}
              >
                {copiedContract ? <Check size={15} className="text-emerald-400" /> : <Share2 size={15} />}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={GECKOTERMINAL_TOKEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              <TrendingUp size={14} className="text-amber-400" />
              <span>GeckoTerminal ($WR)</span>
              <ExternalLink size={11} />
            </a>
            <a
              href={UNISWAP_V4_POSITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/30 active:scale-95"
            >
              <Coins size={14} />
              <span>Uniswap v4 (#2953119)</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. HD Lightbox Modal with Zoom & Live Interactive Canvas */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Header */}
          <div 
            className="max-w-6xl mx-auto w-full flex items-center justify-between pb-3 border-b border-white/10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="text-base sm:text-xl font-bold">{activeModalItem.title}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{activeModalItem.subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setZoomScale(prev => Math.max(1, prev - 0.5))}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                title={t.modal.zoomOut}
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-xs font-mono text-amber-400 font-bold px-1">{Math.round(zoomScale * 100)}%</span>
              <button 
                onClick={() => setZoomScale(prev => Math.min(3, prev + 0.5))}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                title={t.modal.zoomIn}
              >
                <ZoomIn size={16} />
              </button>
              <button 
                onClick={closeLightbox}
                className="p-2 bg-red-600/30 hover:bg-red-600 rounded-lg text-white transition-colors ml-2"
                title={t.modal.close}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body Viewer */}
          <div 
            className="flex-1 max-w-6xl mx-auto w-full flex items-center justify-center overflow-auto my-3 p-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="relative transition-transform duration-200 origin-center flex items-center justify-center max-w-full max-h-full"
              style={{ transform: `scale(${zoomScale})` }}
            >
              {isInteractiveMode ? (
                <iframe 
                  src={activeModalItem.ipfsUrl} 
                  title={activeModalItem.title}
                  className="w-[85vw] max-w-[800px] h-[70vh] max-h-[600px] border border-white/20 rounded-xl bg-black shadow-2xl"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <img 
                  src={activeModalItem.image} 
                  alt={activeModalItem.title} 
                  className="max-w-[90vw] max-h-[72vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = activeModalItem.fallbackImage;
                  }}
                />
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div 
            className="max-w-6xl mx-auto w-full pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsInteractiveMode(!isInteractiveMode)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  isInteractiveMode 
                    ? 'bg-amber-500 text-black border-amber-400' 
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                }`}
              >
                {isInteractiveMode ? t.modal.staticView : t.modal.interactive}
              </button>
              <a 
                href={activeModalItem.ipfsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
              >
                <span>{t.modal.ipfsLink}</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <a 
              href={activeModalItem.primaryAction.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-lg text-xs transition-colors flex items-center gap-1 shadow-md shadow-blue-600/30"
            >
              <Sparkles size={13} className="text-yellow-300" />
              <span>{activeModalItem.primaryAction.label}</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageView;
