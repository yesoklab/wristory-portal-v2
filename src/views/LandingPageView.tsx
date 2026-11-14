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
  Coins,  
  ShieldCheck,
  ChevronRight,
  Share2,
  Check,
  CheckCircle2,
  Heart,
  Info,
  Globe,
  Mail,
  BookOpen,
  User,
  Download,
  FileText
} from 'lucide-react';
import { translations, Lang } from '../lib/translations';
import { 
  WR_TOKEN_CONFIG, 
  BRAHMS_TOKEN_CONFIG 
} from '../lib/metamask';
import { forceDownloadFile } from '../lib/download';

interface LandingPageViewProps {
  lang: Lang;
  onNavigate: (tab: any) => void;
  hasApiKey?: boolean;
}

const LandingPageView: React.FC<LandingPageViewProps> = ({ lang, onNavigate }) => {
  const t = translations[lang] || translations.ko;

  // WRISTORY Official Company / Project Logo (Hero, Navbar, Footer)
  const COMPANY_LOGO_URL = 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreid77edatmd2n2bizvm5e3cvguzbi34ioi7zh5vsc4uikmwqvch3y4';
  const COMPANY_LOGO_FALLBACK = 'https://ipfs.io/ipfs/bafkreid77edatmd2n2bizvm5e3cvguzbi34ioi7zh5vsc4uikmwqvch3y4';

  const BASE_CONTRACT = WR_TOKEN_CONFIG.address;
  const UNISWAP_SWAP_URL = 'https://app.uniswap.org/swap?outputCurrency=0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7&chain=base';
  
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

  // Active Token Tab in On-Chain Verification Card ('WR' | 'BRAHMS')
  const [selectedTokenTab, setSelectedTokenTab] = useState<'WR' | 'BRAHMS'>('WR');

  const currentTokenConfig = selectedTokenTab === 'WR' ? WR_TOKEN_CONFIG : BRAHMS_TOKEN_CONFIG;

  const handleCopyContract = () => {
    navigator.clipboard.writeText(currentTokenConfig.address);
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
                  src={COMPANY_LOGO_URL} 
                  alt="WRISTORY Official Brandmark" 
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-white/20 shadow-xl bg-slate-950"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = COMPANY_LOGO_FALLBACK;
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

      {/* 3. Essential On-Chain Verification & Liquidity Card (With MetaMask Token WatchAsset) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900/80 border border-blue-500/30 p-6 sm:p-8 shadow-2xl text-left space-y-6 relative overflow-hidden">
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Token Switcher Tabs for WR and BRAHMS */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedTokenTab('WR')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  selectedTokenTab === 'WR'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>WRISTORY ($WR)</span>
              </button>
              <button
                onClick={() => setSelectedTokenTab('BRAHMS')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  selectedTokenTab === 'BRAHMS'
                    ? 'bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>불암스BRAHMS ($BRAHMS)</span>
                <span className="text-[9px] bg-yellow-400 text-slate-950 font-black px-1.5 py-0.2 rounded-full uppercase">NEW</span>
              </button>
            </div>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Base L2 Official Tokens
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            {/* Left: Token Logo & Information */}
            <div className="flex items-start sm:items-center gap-4">
              {/* Official Token Logo Frame */}
              <div className="relative group shrink-0">
                <div className={`absolute -inset-1 rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition duration-300 ${
                  selectedTokenTab === 'WR'
                    ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400'
                    : 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400'
                }`} />
                <img 
                  key={selectedTokenTab}
                  src={currentTokenConfig.image} 
                  alt={`${currentTokenConfig.symbol} Official Token Logo`} 
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-white/20 shadow-xl bg-slate-950"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = currentTokenConfig.fallbackImage;
                  }}
                />
                <span className="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.2 bg-blue-600 text-white text-[9px] font-black rounded-md uppercase font-mono shadow">
                  BASE
                </span>
              </div>

              {/* Token Details */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${
                    selectedTokenTab === 'WR'
                      ? 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                      : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                  }`}>
                    Base Mainnet ERC-20 (${currentTokenConfig.symbol})
                  </span>
                  {selectedTokenTab === 'WR' ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Uniswap v4 Verified
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-bold flex items-center gap-1">
                      <Sparkles size={11} className="text-yellow-300" />
                      {lang === 'ko' ? '최불암 헤리티지 & 아티스트 기금' : 'Choi Bool-am Heritage & Charity'}
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  <span>
                    {selectedTokenTab === 'WR' 
                      ? (lang === 'ko' ? 'WRISTORY ($WR) 공식 토큰' : 'Official WRISTORY ($WR) Token')
                      : (lang === 'ko' ? '불암스BRAHMS ($BRAHMS) 헤리티지 토큰' : 'BRAHMS ($BRAHMS) Heritage Token')}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    (Decimals: 18 · {selectedTokenTab === 'WR' ? 'Max Supply: 51,169,148' : 'Max Supply: 193,906,150'})
                  </span>
                </h3>
                <div className="flex items-center gap-2 pt-0.5">
                  <code className="text-xs font-mono text-[#00ffcc] bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 select-all">
                    {currentTokenConfig.address}
                  </code>
                  <button 
                    onClick={handleCopyContract}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors flex items-center gap-1 text-xs"
                    title={lang === 'ko' ? '컨트랙트 주소 복사' : 'Copy Contract Address'}
                  >
                    {copiedContract ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                    <span className="text-[11px]">{copiedContract ? (lang === 'ko' ? '복사됨' : 'Copied') : (lang === 'ko' ? '복사' : 'Copy')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Verified On-Chain Explorer & DEX Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto shrink-0">
              <a
                href={`https://basescan.org/token/${currentTokenConfig.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-black text-xs sm:text-sm tracking-tight transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95"
              >
                <ExternalLink size={15} className="text-cyan-200" />
                <span>BaseScan Explorer</span>
                <ArrowUpRight size={14} />
              </a>

              {selectedTokenTab === 'WR' && (
                <a
                  href={UNISWAP_SWAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3 bg-emerald-600/90 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 active:scale-95"
                >
                  <Coins size={15} />
                  <span>Uniswap v4</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>

          {/* Bottom Row: BaseScan Verification Status & Direct Official Logo Assets */}
          <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] relative z-10 w-full">
            <div className="flex items-center gap-2 text-slate-400 text-center md:text-left">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span>
                {lang === 'ko'
                  ? 'BaseScan 공식 토큰 정보 업데이트 심사 진행 중 · 원클릭 지갑(MetaMask) 등록 서비스는 BaseScan 심사 완료 후 오픈됩니다.'
                  : 'BaseScan official token verification in progress · 1-Click MetaMask wallet import will launch after BaseScan approval.'}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end shrink-0">
              {/* Direct Token Logo Download Buttons for BaseScan submission */}
              <button
                onClick={() => forceDownloadFile(
                  selectedTokenTab === 'WR' ? '/assets/tokens/wr_logo_256.png' : '/assets/tokens/brahms_logo_256.png',
                  `${selectedTokenTab.toLowerCase()}_logo_256.png`
                )}
                className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-bold transition-all flex items-center gap-1 active:scale-95 cursor-pointer shadow-sm"
                title={lang === 'ko' ? '공식 토큰 로고 PNG 다운로드 (256x256)' : 'Download Official Token Logo PNG (256x256)'}
              >
                <Download size={11} className="text-amber-400" />
                <span>{selectedTokenTab} 로고 (256 PNG)</span>
              </button>

              <button
                onClick={() => forceDownloadFile(
                  selectedTokenTab === 'WR' ? '/assets/tokens/wr_icon_32.svg' : '/assets/tokens/brahms_icon_32.svg',
                  `${selectedTokenTab.toLowerCase()}_icon_32.svg`
                )}
                className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-bold transition-all flex items-center gap-1 active:scale-95 cursor-pointer shadow-sm"
                title={lang === 'ko' ? '공식 토큰 아이콘 SVG 다운로드 (32x32 BaseScan 규격)' : 'Download Official SVG (32x32 BaseScan standard)'}
              >
                <Download size={11} className="text-cyan-400" />
                <span>{selectedTokenTab} 아이콘 (32 SVG)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 불암스BRAHMS ($BRAHMS) Digital Cultural Heritage & Memorial Initiative */}
      <section className="mb-20">
        <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

          {/* Section Header */}
          <div className="relative z-10 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Heart size={13} className="text-cyan-400" />
              <span>Base Mainnet Digital Cultural Tribute</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex flex-wrap items-center gap-3">
              <span>불암스BRAHMS ($BRAHMS)</span>
              <span className="text-base sm:text-lg font-semibold text-cyan-300 font-mono">
                Digital Heritage & Memorial Initiative
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              {lang === 'ko'
                ? '한국 현대 대중문화의 영원한 상징인 배우 최불암 선생의 예술혼과 따뜻한 인류애를 기리며, 차세대 예술가 양성 및 소외 아동 지원을 온체인 상에 영구 기록하는 문화 헌정 프로젝트입니다.'
                : 'A permanent on-chain cultural memorial tribute honoring the artistic legacy and humanism of Korean icon Choi Bool-am, supporting youth creators and children in need on Base L2.'}
            </p>
          </div>

          {/* Core Pillars: Tribute, Non-Infringement & Tokenomics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10 mb-8">
            {/* Pillar 1: Cultural Purpose */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-4">
                <Heart size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {lang === 'ko' ? '1. 헌정 취지 및 인류애 계승' : '1. Cultural Legacy & Humanism'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'ko'
                  ? '반세기 동안 국민적 사랑을 받으며 서민의 애환을 어루만져 온 배우 최불암 선생의 헌신과, 40여 년간 실천해온 아동 복지(초록우산 어린이재단 전국후원회장 등)의 철학을 블록체인 상에 영구 보존합니다.'
                  : 'Commemorates over 50 years of cultural contribution and four decades of child welfare patronage by actor Choi Bool-am, permanently archived on Base blockchain.'}
              </p>
            </div>

            {/* Pillar 2: Non-Infringement & Public Tribute */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {lang === 'ko' ? '2. 상표권 및 비영리 고지' : '2. Non-Infringement Statement'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'ko'
                  ? '본 프로젝트는 영리 목적의 무단 상업적 브랜딩이나 사칭이 아니며, 인류 문화유산의 공익적 영구 보존을 지향하는 순수 문화 헌정(Tribute) 및 커뮤니티 이니셔티브입니다.'
                  : 'This initiative is a non-profit cultural tribute and community endeavor to archive artistic heritage, with no commercial misrepresentation or copyright infringement.'}
              </p>
            </div>

            {/* Pillar 3: On-Chain Utility & Social Impact */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 mb-4">
                <Coins size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {lang === 'ko' ? '3. 토크노믹스 및 배분 구조' : '3. Tokenomics & Distribution'}
              </h3>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between items-center py-0.5 border-b border-slate-800">
                  <span className="text-slate-400">{lang === 'ko' ? '총 공급량 (Max Total Supply)' : 'Max Total Supply'}</span>
                  <span className="font-mono font-bold text-cyan-300">193,906,150 BRAHMS</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-slate-800">
                  <span className="text-slate-400">{lang === 'ko' ? '문화 아카이브 (Heritage Archive)' : 'Cultural Heritage Archive'}</span>
                  <span className="font-mono font-bold text-slate-200">51.58% (100,010,000)</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-slate-800">
                  <span className="text-slate-400">{lang === 'ko' ? '아동 복지 & 청년 예술가 지원' : 'Youth & Child Welfare Support'}</span>
                  <span className="font-mono font-bold text-emerald-400">25.00% (48,476,537)</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-400">{lang === 'ko' ? 'Base 유동성 & 생태계 운영' : 'Base Liquidity & Operations'}</span>
                  <span className="font-mono font-bold text-amber-400">23.42% (45,419,613)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick On-Chain Token Reference Box with Direct Download */}
          <div className="bg-slate-950/90 border border-cyan-500/20 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={BRAHMS_TOKEN_CONFIG.image} 
                alt="BRAHMS Logo" 
                className="w-10 h-10 rounded-full border border-cyan-400/50 object-cover shrink-0 bg-slate-900" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = BRAHMS_TOKEN_CONFIG.fallbackImage;
                }}
              />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white font-bold text-sm">불암스BRAHMS ($BRAHMS)</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-md">
                    Base Mainnet ERC-20
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-md font-bold">
                    Max Supply: 193,906,150
                  </span>
                </div>
                <div className="text-xs font-mono text-cyan-300 select-all break-all mt-0.5">
                  {BRAHMS_TOKEN_CONFIG.address}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-end shrink-0">
              {/* Direct Asset Download Buttons for BaseScan */}
              <button
                onClick={() => forceDownloadFile('/assets/tokens/brahms_logo_256.png', 'brahms_logo_256.png')}
                className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1 active:scale-95 shadow-sm cursor-pointer"
                title="Download BRAHMS 256x256 PNG Logo"
              >
                <Download size={12} className="text-amber-400" />
                <span>256 PNG</span>
              </button>
              <button
                onClick={() => forceDownloadFile('/assets/tokens/brahms_icon_32.svg', 'brahms_icon_32.svg')}
                className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1 active:scale-95 shadow-sm cursor-pointer"
                title="Download BRAHMS 32x32 SVG Icon"
              >
                <Download size={12} className="text-cyan-400" />
                <span>32 SVG</span>
              </button>
              {/* PRIMARY ACTION: Download Official Whitepaper in PDF format */}
              <button
                onClick={() => forceDownloadFile('/BRAHMS_Whitepaper_v1.0.pdf', 'BRAHMS_Whitepaper_v1.0.pdf')}
                className="px-3 py-1.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white border border-red-500/50 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 active:scale-95 shadow-md shadow-red-600/30 cursor-pointer"
                title="Download BRAHMS Official Whitepaper (PDF)"
              >
                <FileText size={13} className="text-white" />
                <span>{lang === 'ko' ? 'BRAHMS 백서 (PDF)' : 'BRAHMS Whitepaper (PDF)'}</span>
                <Download size={11} />
              </button>
              <button
                onClick={() => forceDownloadFile('/BRAHMS_Whitepaper_v1.0.md', 'BRAHMS_Whitepaper_v1.0.md')}
                className="px-2.5 py-1.5 bg-slate-800/90 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1 active:scale-95 shadow-sm cursor-pointer"
                title="Download BRAHMS Markdown Whitepaper (.md)"
              >
                <FileText size={12} className="text-slate-400" />
                <span>{lang === 'ko' ? '백서 (.md)' : 'Whitepaper (.md)'}</span>
              </button>
              <a
                href={`https://basescan.org/token/${BRAHMS_TOKEN_CONFIG.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/30 active:scale-95"
              >
                <span>BaseScan Explorer</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. YesOkLab Project Leadership & Core Team Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-700/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Section Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <User size={13} className="text-blue-400" />
              <span>{lang === 'ko' ? 'BaseScan 적격성 및 검증 팀 정보 공개' : 'BaseScan Compliance & Verified Team Disclosure'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <span>{lang === 'ko' ? 'YesOkLab 프로젝트 리더십 & 핵심 팀' : 'YesOkLab Project Leadership & Core Team'}</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              {lang === 'ko'
                ? 'BaseScan 및 블록체인 생태계의 엄격한 투명성 기준을 준수하며, 프로젝트의 개발·운영 주체인 YesOkLab과 창립자의 공개 프로필 및 공식 소통 채널을 투명하게 공개합니다.'
                : 'In full accordance with BaseScan verification standards, here is the transparent disclosure of YesOkLab project leadership, core team profiles, and official channels.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Founder Card */}
            <div className="lg:col-span-2 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 blur opacity-40 group-hover:opacity-75 transition duration-300" />
                  <img 
                    src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreif6wcjc22dl3e7cd6ofteudzfzqxbjpfw5aoxa3svqwlrm6zwhjdu" 
                    alt="Kim Kyung-koo (김경구)" 
                    className="relative w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/50 shadow-xl bg-slate-900"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://ipfs.io/ipfs/bafkreif6wcjc22dl3e7cd6ofteudzfzqxbjpfw5aoxa3svqwlrm6zwhjdu';
                    }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl font-bold text-white">
                      {lang === 'ko' ? '김경구 (Kim Kyung-koo)' : 'Kim Kyung-koo'}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold font-mono">
                      Founder & Chief Technology Architect
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {lang === 'ko'
                      ? 'YesOkLab 창립자 & 수석 Web3 엔지니어 · 대한민국 서울'
                      : 'YesOkLab Founder & Lead Web3 Engineer · Seoul, Republic of Korea'}
                  </p>
                </div>
              </div>

              <div className="py-4 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
                <p>
                  • <strong>{lang === 'ko' ? '경력 및 전문성:' : 'Career & Expertise:'}</strong>{' '}
                  {lang === 'ko'
                    ? '블록체인 기반 문화유산 온체인 아카이빙 솔루션 아키텍트. Base L2 메인넷 스마트 컨트랙트(ERC-20, Uniswap v4 Hook 연동) 및 Tezos 온체인 제너러티브 아트 아카이빙 총괄 설계.'
                    : 'Blockchain cultural heritage architect. Lead designer of Base L2 ERC-20 smart contracts, Uniswap v4 hooks, and permanent on-chain generative art archiving on Tezos & Base.'}
                </p>
                <p>
                  • <strong>{lang === 'ko' ? '주요 추진 프로젝트:' : 'Key Initiatives:'}</strong>{' '}
                  {lang === 'ko'
                    ? 'WRISTORY ($WR) 문학·역사 디지털 보존 프로젝트, 불암스BRAHMS ($BRAHMS) 문화 헌정 토큰, Tezos-Base 1:1 온체인 마이그레이션 포털.'
                    : 'WRISTORY ($WR) literary & historical digital preservation, 불암스BRAHMS ($BRAHMS) digital cultural tribute token, and Tezos-to-Base 1:1 on-chain migration portal.'}
                </p>
              </div>

              {/* Public Profiles Required by BaseScan */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {lang === 'ko' ? '공개 검증 프로필 (Public Professional Profiles)' : 'Public Verified Professional Profiles'}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <a
                    href="https://medium.com/@wakk5252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/60 rounded-xl font-bold text-slate-200 transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <BookOpen size={13} className="text-amber-400 shrink-0" />
                    <span>Medium</span>
                    <ExternalLink size={10} className="ml-auto text-slate-500" />
                  </a>

                  <a
                    href="https://blog.naver.com/yesoklab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/60 rounded-xl font-bold text-emerald-400 transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <Globe size={13} className="text-emerald-400 shrink-0" />
                    <span>{lang === 'ko' ? '네이버 블로그' : 'Naver Blog'}</span>
                    <ExternalLink size={10} className="ml-auto text-slate-500" />
                  </a>

                  <a
                    href="https://x.com/wakk5252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/60 rounded-xl font-bold text-sky-400 transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <Share2 size={13} className="text-sky-400 shrink-0" />
                    <span>X (Twitter)</span>
                    <ExternalLink size={10} className="ml-auto text-slate-500" />
                  </a>

                  <a
                    href="https://github.com/yesoklab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/60 rounded-xl font-bold text-purple-300 transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <ExternalLink size={13} className="text-purple-400 shrink-0" />
                    <span>GitHub</span>
                    <ExternalLink size={10} className="ml-auto text-slate-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Organization & Official Contact Card */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Globe size={16} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {lang === 'ko' ? 'YesOkLab (예스오케이랩)' : 'YesOkLab'}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {lang === 'ko' ? '블록체인 헤리티지 랩' : 'Blockchain Heritage Lab'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 mt-4">
                  <div className="pb-2 border-b border-slate-800">
                    <span className="text-slate-400 block text-[11px]">
                      {lang === 'ko' ? '공식 대표 웹사이트 (Official Domain)' : 'Official Primary Domain'}
                    </span>
                    <a 
                      href="https://www.wristory.co.kr" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-cyan-400 font-bold hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <span>https://www.wristory.co.kr</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>

                  <div className="pb-2 border-b border-slate-800">
                    <span className="text-slate-400 block text-[11px]">
                      {lang === 'ko' ? '오픈소스 코드 저장소 (GitHub Repo)' : 'Open-Source Code Repository'}
                    </span>
                    <a 
                      href="https://github.com/yesoklab/wristory-portal-v2" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-200 font-mono hover:underline flex items-center gap-1 mt-0.5 break-all"
                    >
                      <span>github.com/yesoklab/wristory-portal-v2</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>

                  <div className="pb-2 border-b border-slate-800">
                    <span className="text-slate-400 block text-[11px]">
                      {lang === 'ko' ? '공식 검증 및 문의 이메일 (Official Email)' : 'Official Verification & Inquiries Email'}
                    </span>
                    <a 
                      href="mailto:yesoklab@gmail.com" 
                      className="text-amber-400 font-mono font-bold hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <Mail size={12} />
                      <span>yesoklab@gmail.com</span>
                    </a>
                  </div>

                  <div className="pb-2 border-b border-slate-800">
                    <span className="text-slate-400 block text-[11px]">
                      {lang === 'ko' ? '본부 소재지 (Location)' : 'Headquarters Location'}
                    </span>
                    <span className="text-slate-300 font-medium">
                      {lang === 'ko' ? '대한민국 서울특별시' : 'Seoul, Republic of Korea'}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] mb-2 font-bold">
                      {lang === 'ko' ? '공식 프로젝트 백서 다운로드 (Official Whitepapers)' : 'Official Project Whitepapers (PDF & MD)'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {/* BRAHMS PDF */}
                      <button
                        onClick={() => forceDownloadFile('/BRAHMS_Whitepaper_v1.0.pdf', 'BRAHMS_Whitepaper_v1.0.pdf')}
                        className="inline-flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-r from-red-600/90 to-rose-600/90 hover:from-red-500 hover:to-rose-500 text-white border border-red-500/50 text-xs font-black transition-all active:scale-95 cursor-pointer shadow-md shadow-red-600/20"
                        title="Download BRAHMS Official Whitepaper (PDF)"
                      >
                        <span className="flex items-center gap-1.5">
                          <FileText size={13} className="text-white" />
                          <span>BRAHMS 백서 (PDF)</span>
                        </span>
                        <Download size={12} />
                      </button>

                      {/* WRISTORY PDF */}
                      <button
                        onClick={() => forceDownloadFile('/WRISTORY_Whitepaper_v2.0_Base.pdf', 'WRISTORY_Whitepaper_v2.0_Base.pdf')}
                        className="inline-flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600/90 to-cyan-600/90 hover:from-blue-500 hover:to-cyan-500 text-white border border-blue-500/50 text-xs font-black transition-all active:scale-95 cursor-pointer shadow-md shadow-blue-600/20"
                        title="Download WRISTORY Official Whitepaper (PDF)"
                      >
                        <span className="flex items-center gap-1.5">
                          <FileText size={13} className="text-white" />
                          <span>WR 백서 (PDF)</span>
                        </span>
                        <Download size={12} />
                      </button>

                      {/* BRAHMS MD */}
                      <button
                        onClick={() => forceDownloadFile('/BRAHMS_Whitepaper_v1.0.md', 'BRAHMS_Whitepaper_v1.0.md')}
                        className="inline-flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-bold transition-all active:scale-95 cursor-pointer"
                        title="Download BRAHMS Whitepaper (.md)"
                      >
                        <span className="flex items-center gap-1">
                          <FileText size={11} className="text-emerald-400" />
                          <span>BRAHMS (.md)</span>
                        </span>
                        <Download size={10} />
                      </button>

                      {/* WRISTORY MD */}
                      <button
                        onClick={() => forceDownloadFile('/WHITEPAPER.md', 'WRISTORY_Whitepaper_v2.0_Base.md')}
                        className="inline-flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-[11px] font-bold transition-all active:scale-95 cursor-pointer"
                        title="Download WRISTORY Whitepaper (.md)"
                      >
                        <span className="flex items-center gap-1">
                          <FileText size={11} className="text-blue-400" />
                          <span>WRISTORY (.md)</span>
                        </span>
                        <Download size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>
                  {lang === 'ko'
                    ? 'BaseScan 심사관 공식 정보 열람 및 토큰 업데이트 검증 완료'
                    : 'BaseScan reviewer information disclosure and verification ready'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HD Lightbox Modal with Zoom & Live Interactive Canvas */}
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
