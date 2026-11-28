import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  Coins,
  ShieldCheck,
  ChevronDown,
  Share2,
  Check,
  CheckCircle2,
  Heart,
  Globe,
  Mail,
  BookOpen,
  User,
  Download,
  FileText,
  Linkedin,
  Layers
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

  // WRISTORY Project Banner
  const PROJECT_BANNER_URL = 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeihuqcc3qkbpyg6y6thlxhc2qaoec655yrowz6n5wzdswoipxwgs2m';
  const PROJECT_BANNER_FALLBACK = 'https://ipfs.io/ipfs/bafybeihuqcc3qkbpyg6y6thlxhc2qaoec655yrowz6n5wzdswoipxwgs2m';

  const UNISWAP_SWAP_URL = 'https://app.uniswap.org/swap?outputCurrency=0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7&chain=base';

  // Latest Minted Spotlight: Echoes of Harbin: Ahn Jung-geun (1909.10.26) — 1-Bit Pixel Art
  const AHN_GIF = 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreictf5iv6wmhkd556sbfpqvqa4fipq63zslnok3iylv2ryvuokuvwe';
  const AHN_GIF_FALLBACK = 'https://ipfs.io/ipfs/bafkreictf5iv6wmhkd556sbfpqvqa4fipq63zslnok3iylv2ryvuokuvwe';
  const AHN_OPENSEA = 'https://opensea.io/item/base/0x7fd83bf061878f7c8c1b07dbae14ce639f3dce43/1';
  const AHN_OBJKT = 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/46';

  // Connected Archive Links
  const PARAGRAPH_URL = 'https://paragraph.com/@wristory-portal-v2';
  const PARAGRAPH_ARCHIVE_02_URL = 'https://paragraph.com/@wristory-portal-v2/[-archive-02]-sitting-on-the-living-room-floor-the';
  const NAVER_BLOG_URL = 'https://blog.naver.com/yesoklab';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/yesoklab';
  const X_URL = 'https://x.com/wakk5252';
  const GITHUB_URL = 'https://github.com/yesoklab/wristory-portal-v2';

  // Prior Curated Collections (Direct Marketplace Index)
  const archiveCollections = [
    {
      id: 'homeland',
      chain: 'Base · Tezos',
      title: lang === 'ko' ? '조국아 울지 마라 (Do Not Cry, Homeland)' : 'Do Not Cry, Homeland (조국아 울지 마라)',
      spec: lang === 'ko' ? '3D 기념우표 공익 아트 · 수익 100% 굿네이버스 기증' : '3D Charity Stamp · 100% Donated to Good Neighbors',
      links: [
        { label: 'OpenSea', url: 'https://opensea.io/collection/do-not-cry-homeland-2026/overview' },
        { label: 'Objkt (#43)', url: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/43' },
        { label: 'Good Neighbors', url: 'https://www.goodneighbors.kr/campaign/diaspora24a' }
      ]
    },
    {
      id: 'hunmin',
      chain: 'Tezos FA2',
      title: lang === 'ko' ? 'SOUND ALIGNMENT v2 — 훈민정음: 소리의 기하학' : 'SOUND ALIGNMENT v2 — Geometry of Hunminjeongeum',
      spec: lang === 'ko' ? '1446 해례본 3단계 형태 진화 알고리즘 · 14 Editions' : '1446 Haerye Three-Stage Algorithm · 14 Editions',
      links: [
        { label: 'Objkt (#45)', url: 'https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/45' },
        { label: 'IPFS Master', url: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiax5f365c2roqeyyvpuxxlt2zjp27e445oldekyte2gy7aec6keau' }
      ]
    },
    {
      id: 'buckwheat',
      chain: 'Base L2',
      title: lang === 'ko' ? '이효석 — 메밀꽃 필 무렵' : 'Lee Hyo-seok — When Buckwheat Flowers Bloom',
      spec: lang === 'ko' ? 'Perlin Noise 결정론적 문학 제너러티브 아트' : 'Deterministic Literary Generative Flow Fields',
      links: [
        { label: 'Highlight', url: 'https://highlight.xyz/mint/01a09a4c-618c-77a8-9065-0604b9428efa' },
        { label: 'OpenSea', url: 'https://opensea.io/collection/wristory-moonlit-heritage' },
        { label: 'Zora', url: 'https://zora.co/coin/base:0x5ea3b56bad0b76ad6d9855581ff15e66afdce993?referrer=0x58346be51802b17a3c5bb110df14f5487a92dbd6' }
      ]
    },
    {
      id: 'pizza',
      chain: 'Tezos FA2',
      title: lang === 'ko' ? '비트코인 피자 — Bitcoin Pizza Day' : 'Bitcoin Pizza — 10,000 BTC Heritage',
      spec: lang === 'ko' ? '2010.05.22 최초 실물 거래 온체인 아카이브' : 'May 22, 2010 Historic Transaction Archive',
      links: [
        { label: 'Objkt Collection', url: 'https://objkt.com/collections/KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq' }
      ]
    }
  ];

  // Serialized Essays (Paragraph + Cross-Posted Channels)
  const archiveEssays = [
    {
      issue: 'Archive #02',
      date: '2026.11.28',
      title: 'Sitting on the Living Room Floor: The Cypherpunks',
      subtitle: '"Privacy is necessary for an open society" — The people who chose code over petitions',
      url: PARAGRAPH_ARCHIVE_02_URL
    },
    {
      issue: 'Archive #01',
      date: '2026.11.27',
      title: "15 Years Before Bitcoin: Citibank's EMS and David Chaum's DigiCash",
      subtitle: 'Centralized Switches vs. Cryptographic Freedom — The Forgotten Pioneers of Digital Cash',
      url: PARAGRAPH_URL
    },
    {
      issue: 'Archive #00',
      date: '2026.11.27',
      title: lang === 'ko' ? "두 바퀴로 가는 자동차: 우리는 왜 '암호화폐'의 뿌리를 다시 묻는가?" : "Asking Again About the Roots of Cryptocurrency",
      subtitle: lang === 'ko' ? 'YesOkLab 암호화폐 역사 아카이브 연재 서문' : 'YesOkLab Archive Serialization Prologue',
      url: PARAGRAPH_URL
    },
    {
      issue: 'Special',
      date: '2026.11.28',
      title: 'YesOkLab Archive 10 Years Before Bitcoin',
      subtitle: 'The Cypherpunks Who Tried to Kill the Central Switch',
      url: PARAGRAPH_URL
    }
  ];

  // HD Lightbox Inspection State
  const [activeModalItem, setActiveModalItem] = useState<{
    id: string;
    title: string;
    subtitle: string;
    image: string;
    fallbackImage: string;
    ipfsUrl: string;
    mediaType?: 'image' | 'video';
    poster?: string;
    primaryAction: { label: string; url: string };
  } | null>(null);

  const [zoomScale, setZoomScale] = useState<number>(1);
  const [isInteractiveMode, setIsInteractiveMode] = useState<boolean>(false);
  const [copiedContract, setCopiedContract] = useState<boolean>(false);

  // Collapsed-by-default Disclosures for Token Details ($WR / $BRAHMS) and Verification Docs
  const [isTokenSpecsOpen, setIsTokenSpecsOpen] = useState<boolean>(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState<boolean>(false);
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
    primaryUrl: string,
    mediaType: 'image' | 'video' = 'image',
    poster?: string
  ) => {
    setActiveModalItem({
      id,
      title,
      subtitle,
      image,
      fallbackImage,
      ipfsUrl: image,
      mediaType,
      poster,
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
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* 1. Hero Section: Minimal & Technical */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 text-center">
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 space-y-6">
          <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/5] min-h-[120px] sm:min-h-[160px]">
            <img
              src={PROJECT_BANNER_URL}
              alt="WRISTORY Official Project Banner"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).src = PROJECT_BANNER_FALLBACK;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="space-y-2.5 max-w-3xl mx-auto">
            <p className="text-xs font-mono text-cyan-300 tracking-wide">
              {t.hero.tagline}
            </p>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight [text-wrap:balance]">
              {t.hero.title}
            </h1>
            <p className="text-sm sm:text-lg font-semibold text-slate-200">
              {t.hero.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {t.hero.description}
            </p>
          </div>

          {/* Technical Spec Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-b border-slate-800/80 py-4 text-center max-w-4xl mx-auto tabular-nums">
            <div>
              <p className="text-[11px] text-slate-400 font-medium">{t.metrics.chains}</p>
              <p className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5 font-mono">{t.metrics.chainsVal}</p>
            </div>
            <div className="sm:border-l border-slate-800/80">
              <p className="text-[11px] text-slate-400 font-medium">{t.metrics.masterpieces}</p>
              <p className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5 font-mono">{t.metrics.masterpiecesVal}</p>
            </div>
            <div className="sm:border-l border-slate-800/80">
              <p className="text-[11px] text-slate-400 font-medium">{t.metrics.curation}</p>
              <p className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5 font-mono">{t.metrics.curationVal}</p>
            </div>
            <div className="sm:border-l border-slate-800/80">
              <p className="text-[11px] text-slate-400 font-medium">{t.metrics.storage}</p>
              <p className="text-xs sm:text-sm font-bold text-slate-100 mt-0.5 font-mono">{t.metrics.storageVal}</p>
            </div>
          </div>

          {/* Primary & Secondary Action */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#latest-mint"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Sparkles size={14} className="text-amber-300" />
              <span>{t.hero.exploreMasterpieces}</span>
            </a>
            <a
              href={PARAGRAPH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs sm:text-sm font-bold transition-colors border border-slate-700 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <BookOpen size={14} className="text-cyan-400" />
              <span>{t.hero.viewOpenSea}</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Latest Minting Spotlight (Focused Single Work: Ahn Jung-geun 1-Bit Pixel Art) */}
      <section id="latest-mint" className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-4">
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
              <span>{t.dualSection.badge}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Nov 26, 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t.dualSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.dualSection.subtitle}
            </p>
          </div>
          <button
            onClick={() => onNavigate('COLLECTIONS')}
            className="text-xs font-bold text-cyan-300 hover:text-cyan-200 flex items-center gap-1 whitespace-nowrap shrink-0 self-start sm:self-end cursor-pointer"
          >
            <Layers size={13} />
            <span>{lang === 'ko' ? '전체 아카이브 (5작품) 보기' : 'Full Archive (5 Works)'}</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Single Focal Work Showcase */}
        <article className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 sm:p-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-stretch">
            {/* Left: Crisp 1-Bit Pixel Art GIF Viewer */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              <div
                onClick={() => openLightbox(
                  'ahn',
                  t.artworks.ahn.title,
                  t.artworks.ahn.subtitle,
                  AHN_GIF,
                  AHN_GIF_FALLBACK,
                  t.artworks.ahn.openseaBtn,
                  AHN_OPENSEA
                )}
                className="relative aspect-[3/4] max-h-[460px] w-full rounded-xl bg-black overflow-hidden border border-slate-800 cursor-pointer group"
                title={lang === 'ko' ? '클릭하여 확대 보기' : 'Click to inspect in HD'}
              >
                <img
                  src={AHN_GIF}
                  alt={t.artworks.ahn.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain bg-black"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = AHN_GIF_FALLBACK;
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-200">240×320 · 1-BIT · 64-FRAME LOOP</span>
                  <span className="inline-flex items-center gap-1 text-white font-semibold bg-black/70 px-2.5 py-1 rounded-md border border-white/15">
                    <Maximize2 size={12} className="text-amber-400" />
                    <span>HD</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Direct Marketplace Links */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-blue-400 font-semibold">Base ERC-721 (Token #1)</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-300 font-semibold">Tezos FA2 (Objkt #46)</span>
                  <span aria-hidden="true">·</span>
                  <span>Zero External Assets</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                    {t.artworks.ahn.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                    {t.artworks.ahn.subtitle}
                  </p>
                </div>

                <blockquote className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl text-xs sm:text-sm text-amber-200/95 italic leading-relaxed">
                  {t.artworks.ahn.quote}
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.artworks.ahn.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 tabular-nums">
                  <div className="truncate">{t.artworks.ahn.detail1}</div>
                  <div className="truncate">{t.artworks.ahn.detail2}</div>
                </div>
              </div>

              {/* Action Links */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={AHN_OPENSEA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Sparkles size={14} className="text-amber-300" />
                    <span>{t.artworks.ahn.openseaBtn}</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={AHN_OBJKT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>{t.artworks.ahn.objktBtn}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <a
                    href={AHN_GIF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold transition-colors border border-slate-700 flex items-center gap-1.5"
                  >
                    <span>{t.artworks.ahn.ipfsBtn}</span>
                    <ExternalLink size={11} />
                  </a>
                  <button
                    onClick={() => openLightbox(
                      'ahn',
                      t.artworks.ahn.title,
                      t.artworks.ahn.subtitle,
                      AHN_GIF,
                      AHN_GIF_FALLBACK,
                      t.artworks.ahn.openseaBtn,
                      AHN_OPENSEA
                    )}
                    className="py-2 px-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold transition-colors border border-slate-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 size={11} className="text-amber-400" />
                    <span>{t.modal.hdView}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Compact External Marketplace Directory for Previous Collections */}
        <div className="rounded-2xl bg-slate-900/50 border border-slate-800/90 divide-y divide-slate-800/80 text-left">
          <div className="px-5 py-3.5 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-300">
              {lang === 'ko' ? '기존 온체인 컬렉션 바로 연결 (External Collections Index)' : 'On-Chain Collections Directory'}
            </span>
            <button
              onClick={() => onNavigate('COLLECTIONS')}
              className="text-xs text-cyan-300 hover:underline font-semibold cursor-pointer"
            >
              {lang === 'ko' ? '갤러리 뷰 →' : 'Gallery View →'}
            </button>
          </div>
          {archiveCollections.map((col) => (
            <div
              key={col.id}
              className="px-5 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-2.5 hover:bg-slate-900/80 transition-colors"
            >
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400">{col.chain}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <h4 className="text-sm font-bold text-white">{col.title}</h4>
                </div>
                <p className="text-xs text-slate-400">{col.spec}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={11} className="text-slate-400" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Connected Technical Essays & Archive Serialization (Paragraph × Naver Blog × LinkedIn × X) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 text-left">
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <BookOpen size={13} />
                <span>YESOKLAB ARCHIVE SERIALIZATION</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">Paragraph Primary Hub</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {lang === 'ko'
                  ? '암호화폐 원류 아카이브 연재 · 멀티채널 연결'
                  : 'Crypto-History Archive Serialization · Multi-Channel'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                {lang === 'ko'
                  ? 'Paragraph를 중심으로 네이버 공식 블로그, LinkedIn, X(Twitter) 아티클에 동일한 기술·역사 아카이브를 연결 연재합니다.'
                  : 'Primary long-form technical archives published on Paragraph and synchronized across Naver Blog, LinkedIn, and X Articles.'}
              </p>
            </div>

            {/* 4 Connected Publication Channels */}
            <div className="flex flex-wrap items-center gap-2 shrink-0 text-xs">
              <a
                href={PARAGRAPH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <BookOpen size={12} />
                <span>Paragraph</span>
                <ExternalLink size={11} />
              </a>
              <a
                href={NAVER_BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 rounded-lg font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>{lang === 'ko' ? '공식 블로그' : 'Naver Blog'}</span>
                <ExternalLink size={11} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 rounded-lg font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Linkedin size={12} />
                <span>LinkedIn</span>
                <ExternalLink size={11} />
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 rounded-lg font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>X Articles</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Serialized Articles List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {archiveEssays.map((essay) => (
              <a
                key={essay.title}
                href={essay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col justify-between gap-2 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 tabular-nums">
                    <span className="text-cyan-300 font-semibold">{essay.issue}</span>
                    <span>{essay.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {essay.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {essay.subtitle}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-300 flex items-center gap-1 pt-1">
                  <span>{lang === 'ko' ? 'Paragraph에서 전문 읽기' : 'Read on Paragraph'}</span>
                  <ArrowUpRight size={11} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Collapsed-by-Default Technical Token Disclosures ($WR & $BRAHMS) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4 text-left">
        {/* Drawer 1: $WR & $BRAHMS Token Specifications, BaseScan & Asset Downloads */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
          <button
            type="button"
            onClick={() => setIsTokenSpecsOpen((prev) => !prev)}
            aria-expanded={isTokenSpecsOpen}
            className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-900/90 transition-colors cursor-pointer text-left"
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Coins size={15} className="text-cyan-400 shrink-0" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {lang === 'ko'
                    ? '온체인 토큰 세부 사양 ($WR · $BRAHMS) 및 공식 에셋'
                    : 'On-Chain Token Specifications ($WR · $BRAHMS) & Brand Assets'}
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {lang === 'ko'
                  ? '토큰 컨트랙트, BaseScan 링크, 로고(PNG/SVG) 다운로드 및 불암스BRAHMS 세부 내용이 궁금하신 분은 열어보세요.'
                  : 'Expand for Base ERC-20 contracts, BaseScan explorer links, PNG/SVG downloads, and BRAHMS tokenomics.'}
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 whitespace-nowrap shrink-0">
              <span>{isTokenSpecsOpen ? (lang === 'ko' ? '접기' : 'Hide') : (lang === 'ko' ? '세부 정보 열기' : 'Expand')}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isTokenSpecsOpen ? 'rotate-180' : ''}`} />
            </span>
          </button>

          {isTokenSpecsOpen && (
            <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-slate-800 space-y-6">
              {/* Token Switcher Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setSelectedTokenTab('WR')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      selectedTokenTab === 'WR'
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    WRISTORY ($WR)
                  </button>
                  <button
                    onClick={() => setSelectedTokenTab('BRAHMS')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      selectedTokenTab === 'BRAHMS'
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    불암스BRAHMS ($BRAHMS)
                  </button>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Base Mainnet ERC-20 (Chain ID: 8453)
                </span>
              </div>

              {/* Token Details Card */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 bg-slate-950/70 border border-slate-800 rounded-xl p-5">
                <div className="flex items-start sm:items-center gap-4">
                  <img
                    key={selectedTokenTab}
                    src={currentTokenConfig.image}
                    alt={`${currentTokenConfig.symbol} Official Token Logo`}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover border border-slate-700 bg-slate-900 shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = currentTokenConfig.fallbackImage;
                    }}
                  />
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="text-cyan-300 font-semibold">ERC-20 (${currentTokenConfig.symbol})</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">Decimals: 18</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">
                        {selectedTokenTab === 'WR' ? 'Max Supply: 51,169,148' : 'Max Supply: 193,906,150'}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {selectedTokenTab === 'WR'
                        ? (lang === 'ko' ? 'WRISTORY ($WR) 공식 토큰' : 'Official WRISTORY ($WR) Token')
                        : (lang === 'ko' ? '불암스BRAHMS ($BRAHMS) 문화 헌정 토큰' : 'BRAHMS ($BRAHMS) Cultural Tribute Token')}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <code className="text-xs font-mono text-[#00ffcc] bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 select-all break-all">
                        {currentTokenConfig.address}
                      </code>
                      <button
                        onClick={handleCopyContract}
                        className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-md text-xs flex items-center gap-1 cursor-pointer"
                      >
                        {copiedContract ? <Check size={12} className="text-emerald-400" /> : <Share2 size={12} />}
                        <span>{copiedContract ? (lang === 'ko' ? '복사됨' : 'Copied') : (lang === 'ko' ? '복사' : 'Copy')}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <a
                    href={`https://basescan.org/token/${currentTokenConfig.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-xs flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <ExternalLink size={13} />
                    <span>BaseScan Explorer</span>
                  </a>
                  {selectedTokenTab === 'WR' && (
                    <a
                      href={UNISWAP_SWAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <Coins size={13} />
                      <span>Uniswap v4</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Asset Downloads Row (Inside Drawer Only) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>
                    {lang === 'ko'
                      ? 'BaseScan 검증용 공식 로고 및 SVG 에셋'
                      : 'Official PNG (256x256) and BaseScan SVG (32x32) assets'}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => forceDownloadFile(
                      selectedTokenTab === 'WR' ? '/assets/tokens/wr_logo_256.png' : '/assets/tokens/brahms_logo_256.png',
                      `${selectedTokenTab.toLowerCase()}_logo_256.png`
                    )}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download size={12} className="text-amber-400" />
                    <span>{selectedTokenTab} 256 PNG</span>
                  </button>
                  <button
                    onClick={() => forceDownloadFile(
                      selectedTokenTab === 'WR' ? '/assets/tokens/wr_icon_32.svg' : '/assets/tokens/brahms_icon_32.svg',
                      `${selectedTokenTab.toLowerCase()}_icon_32.svg`
                    )}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download size={12} className="text-cyan-400" />
                    <span>{selectedTokenTab} 32 SVG</span>
                  </button>
                </div>
              </div>

              {/* BRAHMS Cultural Tribute & Tokenomics Reference (Inside Drawer Only) */}
              <div className="pt-4 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Heart size={14} className="text-cyan-400" />
                      <span>불암스BRAHMS ($BRAHMS) — Digital Heritage & Memorial Initiative</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {lang === 'ko'
                        ? '배우 최불암 선생의 예술혼과 아동 복지 철학을 기리며 차세대 예술가 지원을 기록하는 비영리 문화 헌정 프로젝트입니다.'
                        : 'Non-profit cultural memorial initiative honoring actor Choi Bool-am and supporting youth creators and child welfare on Base.'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => forceDownloadFile('/BRAHMS_Whitepaper_v1.0.pdf', 'BRAHMS_Whitepaper_v1.0.pdf')}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileText size={12} className="text-rose-400" />
                      <span>BRAHMS 백서 (PDF)</span>
                    </button>
                    <button
                      onClick={() => forceDownloadFile('/BRAHMS_Whitepaper_v1.0.md', 'BRAHMS_Whitepaper_v1.0.md')}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>.md</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                    <p className="font-bold text-white">
                      {lang === 'ko' ? '1. 헌정 취지 및 인류애 계승' : '1. Cultural Legacy & Humanism'}
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      {lang === 'ko'
                        ? '반세기 동안 서민의 애환을 어루만져 온 최불암 선생의 헌신과 40여 년 아동 복지 철학을 온체인에 보존합니다.'
                        : 'Preserves over 50 years of artistic legacy and four decades of child welfare patronage on Base.'}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                    <p className="font-bold text-white">
                      {lang === 'ko' ? '2. 상표권 및 비영리 고지' : '2. Non-Infringement Statement'}
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      {lang === 'ko'
                        ? '무단 상업적 브랜딩이나 사칭이 아닌, 문화유산의 공익적 영구 보존을 지향하는 순수 커뮤니티 헌정입니다.'
                        : 'Non-profit cultural tribute initiative with zero commercial misrepresentation or infringement.'}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5 tabular-nums">
                    <p className="font-bold text-white">
                      {lang === 'ko' ? '3. 배분 구조 (193,906,150)' : '3. Supply (193,906,150)'}
                    </p>
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'ko' ? '문화 아카이브' : 'Heritage Archive'}</span>
                      <span className="font-mono text-slate-200">51.58%</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'ko' ? '복지 & 청년 지원' : 'Welfare & Youth'}</span>
                      <span className="font-mono text-emerald-400">25.00%</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'ko' ? 'Base 유동성/운영' : 'Liquidity & Ops'}</span>
                      <span className="font-mono text-amber-300">23.42%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer 2: Project Leadership, Whitepapers & Official Verification */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
          <button
            type="button"
            onClick={() => setIsVerificationOpen((prev) => !prev)}
            aria-expanded={isVerificationOpen}
            className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-900/90 transition-colors cursor-pointer text-left"
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <User size={15} className="text-blue-400 shrink-0" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {lang === 'ko'
                    ? 'YesOkLab 리더십 · 백서 다운로드 및 공식 검증 채널'
                    : 'YesOkLab Leadership, Whitepapers & Verification Channels'}
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {lang === 'ko'
                  ? 'Kim Kyung-koo (YesOkLab) · WRISTORY v2.0 백서(PDF/MD) · GitHub · 공식 이메일'
                  : 'Kim Kyung-koo (YesOkLab) · WRISTORY v2.0 Whitepapers · GitHub · Official Contact'}
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 whitespace-nowrap shrink-0">
              <span>{isVerificationOpen ? (lang === 'ko' ? '접기' : 'Hide') : (lang === 'ko' ? '세부 정보 열기' : 'Expand')}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isVerificationOpen ? 'rotate-180' : ''}`} />
            </span>
          </button>

          {isVerificationOpen && (
            <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreif6wcjc22dl3e7cd6ofteudzfzqxbjpfw5aoxa3svqwlrm6zwhjdu"
                    alt="Kim Kyung-koo (김경구)"
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover border border-slate-700 bg-slate-900 shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://ipfs.io/ipfs/bafkreif6wcjc22dl3e7cd6ofteudzfzqxbjpfw5aoxa3svqwlrm6zwhjdu';
                    }}
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {lang === 'ko' ? '김경구 (Kim Kyung-koo · Gyeonggu Kim)' : 'Kim Kyung-koo (Gyeonggu Kim)'}
                    </h4>
                    <p className="text-xs text-cyan-300 font-mono">
                      Founder & Chief Technology Architect · YesOkLab
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {lang === 'ko' ? '대한민국 서울특별시 · 한국방송통신대학교' : 'Seoul, Republic of Korea · Korea National Open Univ.'}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'ko'
                    ? 'Base L2 스마트 컨트랙트(ERC-20/721, Uniswap v4 Hook) 및 Tezos 온체인 제너러티브 아트 아키텍트. WRISTORY($WR) 1:1 마이그레이션 포털과 순수 온체인 1-Bit 픽셀·한글 기하학 아카이브를 설계하고 있습니다.'
                    : 'Architect of Base L2 smart contracts and Tezos on-chain generative art, building pure on-chain pixel/Hangul preservation systems and serialized crypto-history archives.'}
                </p>
                <div className="flex flex-wrap gap-2 text-xs pt-2 border-t border-slate-800">
                  <a href={PARAGRAPH_URL} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-cyan-300 font-semibold flex items-center gap-1">
                    <span>Paragraph</span><ExternalLink size={10} />
                  </a>
                  <a href={NAVER_BLOG_URL} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-emerald-300 font-semibold flex items-center gap-1">
                    <span>{lang === 'ko' ? '네이버 블로그' : 'Naver Blog'}</span><ExternalLink size={10} />
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-blue-300 font-semibold flex items-center gap-1">
                    <span>LinkedIn</span><ExternalLink size={10} />
                  </a>
                  <a href={X_URL} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-sky-300 font-semibold flex items-center gap-1">
                    <span>X</span><ExternalLink size={10} />
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg text-slate-200 font-semibold flex items-center gap-1">
                    <span>GitHub</span><ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-200 font-bold">
                    <Globe size={14} className="text-cyan-400" />
                    <span>https://www.wristory.co.kr</span>
                  </div>
                  <a href="mailto:yesoklab@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 font-mono">
                    <Mail size={14} className="text-amber-400" />
                    <span>yesoklab@gmail.com</span>
                  </a>
                </div>
                <div className="space-y-2 pt-3 border-t border-slate-800">
                  <p className="text-[11px] text-slate-400 font-bold">
                    {lang === 'ko' ? '공식 백서 다운로드' : 'Official Whitepapers'}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      onClick={() => forceDownloadFile('/WRISTORY_Whitepaper_v2.0_Base.pdf', 'WRISTORY_Whitepaper_v2.0_Base.pdf')}
                      className="py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Download size={12} />
                      <span>WR PDF</span>
                    </button>
                    <button
                      onClick={() => forceDownloadFile('/WHITEPAPER.md', 'WRISTORY_Whitepaper_v2.0_Base.md')}
                      className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-semibold flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>WR (.md)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. HD Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={closeLightbox}
        >
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
                onClick={() => setZoomScale((prev) => Math.max(1, prev - 0.5))}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                title={t.modal.zoomOut}
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-xs font-mono text-amber-400 font-bold px-1">{Math.round(zoomScale * 100)}%</span>
              <button
                onClick={() => setZoomScale((prev) => Math.min(3, prev + 0.5))}
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

          <div
            className="flex-1 max-w-6xl mx-auto w-full flex items-center justify-center overflow-auto my-3 p-2 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative transition-transform duration-200 origin-center flex items-center justify-center max-w-full max-h-full"
              style={{ transform: `scale(${zoomScale})` }}
            >
              {activeModalItem.mediaType === 'video' ? (
                isInteractiveMode ? (
                  <img
                    src={activeModalItem.poster || activeModalItem.fallbackImage}
                    alt={activeModalItem.title}
                    referrerPolicy="no-referrer"
                    className="max-w-[90vw] max-h-[72vh] object-contain rounded-xl border border-white/10"
                  />
                ) : (
                  <video
                    src={activeModalItem.image}
                    poster={activeModalItem.poster || activeModalItem.fallbackImage}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="max-w-[90vw] max-h-[72vh] object-contain rounded-xl border border-white/10 bg-black"
                  >
                    <source src={activeModalItem.image} type="video/webm" />
                  </video>
                )
              ) : (
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  referrerPolicy="no-referrer"
                  className="max-w-[90vw] max-h-[72vh] object-contain rounded-xl border border-white/10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = activeModalItem.fallbackImage;
                  }}
                />
              )}
            </div>
          </div>

          <div
            className="max-w-6xl mx-auto w-full pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={activeModalItem.ipfsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
            >
              <span>{t.modal.ipfsLink}</span>
              <ExternalLink size={12} />
            </a>

            <a
              href={activeModalItem.primaryAction.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center gap-1"
            >
              <Sparkles size={13} className="text-amber-300" />
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
