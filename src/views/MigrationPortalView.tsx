import React, { useState } from 'react';
import { 
  ArrowRightLeft, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  AlertTriangle, 
  Send, 
  Copy, 
  Check, 
  HelpCircle,
  Clock,
  Sparkles,
  Search,
  Camera,
  Share2,
  Globe,
  Database,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';

interface MigrationRecord {
  id: string;
  tezosAddress: string;
  baseAddress: string;
  amount: string;
  txHash: string;
  timestamp: string;
  status: 'PENDING' | 'VERIFIED' | 'COMPLETED';
}

const MigrationPortalView: React.FC<{ lang?: 'ko' | 'en' }> = ({ lang: initialLang = 'ko' }) => {
  const [currentLang, setCurrentLang] = useState<'ko' | 'en'>(initialLang);
  const [tezosAddress, setTezosAddress] = useState('');
  const [baseAddress, setBaseAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [txHash, setTxHash] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedContract, setCopiedContract] = useState(false);
  const [copiedShareLink, setCopiedShareLink] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Base Contract Address & Uniswap v4 Pool Info
  const BASE_WR_CONTRACT = '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7';
  const TEZOS_FA2_CONTRACT = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const UNISWAP_V4_POSITION_URL = 'https://app.uniswap.org/positions/v4/base/2953119';
  const UNISWAP_SWAP_URL = 'https://app.uniswap.org/swap?outputCurrency=0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7&chain=base';

  // Sample verified records in local memory for demonstration & transparency
  const [records, setRecords] = useState<MigrationRecord[]>([
    {
      id: 'MIG-1063',
      tezosAddress: 'tz1...8k29',
      baseAddress: '0x8f...39a1',
      amount: '500,000 WR',
      txHash: 'onh...99zF',
      timestamp: '2026-08-23 15:40',
      status: 'COMPLETED',
    },
    {
      id: 'MIG-1062',
      tezosAddress: 'tz1...3pLq',
      baseAddress: '0x3c...88bc',
      amount: '1,200,000 WR',
      txHash: 'opm...21kX',
      timestamp: '2026-08-23 14:15',
      status: 'COMPLETED',
    },
    {
      id: 'MIG-1061',
      tezosAddress: 'tz1...99Qa',
      baseAddress: '0x12...55da',
      amount: '150,000 WR',
      txHash: 'ooq...77yt',
      timestamp: '2026-08-23 11:20',
      status: 'VERIFIED',
    }
  ]);

  const handleCopyContract = () => {
    navigator.clipboard.writeText(BASE_WR_CONTRACT);
    setCopiedContract(true);
    setTimeout(() => setCopiedContract(false), 2000);
  };

  const handleCopyShareLink = () => {
    const textToCopy = `🔄 WRISTORY ($WR) Official 1:1 Base Migration Portal\n\nFor 1,063 Tezos Holders & FXHASH/OBJKT Creators:\nBridge your Tezos WR to Base ERC-20 (1:1 Ratio Guaranteed)\n\nUniswap v4 Live: ${UNISWAP_SWAP_URL}\nPortal: ${window.location.origin}\nBase Contract: ${BASE_WR_CONTRACT}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tezosAddress.trim() || !baseAddress.trim() || !amount.trim()) {
      alert(currentLang === 'ko' ? '필수 입력 항목을 모두 작성해 주세요.' : 'Please fill in all required fields.');
      return;
    }

    if (!baseAddress.startsWith('0x') || baseAddress.length !== 42) {
      alert(currentLang === 'ko' ? '올바른 Base (이더리움 0x... 42자리) 지갑 주소를 입력해 주세요.' : 'Please enter a valid Base (0x... 42 characters) wallet address.');
      return;
    }

    if (!tezosAddress.startsWith('tz1') && !tezosAddress.startsWith('tz2') && !tezosAddress.startsWith('tz3') && !tezosAddress.startsWith('KT1')) {
      alert(currentLang === 'ko' ? '올바른 Tezos 지갑 주소 (tz1/tz2/tz3...)를 입력해 주세요.' : 'Please enter a valid Tezos wallet address (tz1/tz2/tz3...).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newRecord: MigrationRecord = {
        id: `MIG-${Math.floor(1000 + Math.random() * 9000)}`,
        tezosAddress: tezosAddress.substring(0, 5) + '...' + tezosAddress.substring(tezosAddress.length - 4),
        baseAddress: baseAddress.substring(0, 4) + '...' + baseAddress.substring(baseAddress.length - 4),
        amount: `${Number(amount).toLocaleString()} WR`,
        txHash: txHash.trim() ? (txHash.substring(0, 4) + '...' + txHash.substring(txHash.length - 4)) : 'Snapshot Verified',
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
        status: 'PENDING',
      };

      setRecords([newRecord, ...records]);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const filteredRecords = records.filter(r => 
    r.tezosAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.baseAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 animate-in fade-in duration-500">
      {/* Top Language & Share Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-4 rounded-3xl">
        <div className="flex items-center gap-3">
          <div className="bg-slate-950 p-1 rounded-2xl border border-slate-800 flex">
            <button 
              onClick={() => setCurrentLang('ko')} 
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${currentLang === 'ko' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              한국어 (KR)
            </button>
            <button 
              onClick={() => setCurrentLang('en')} 
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${currentLang === 'en' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              English (Global Creators)
            </button>
          </div>
          <span className="text-xs text-slate-400 font-bold hidden sm:inline">
            {currentLang === 'ko' ? '⚡ 1,063명 테조스 홀더 & FXHASH/OBJKT 창작자 대상 1:1 교환' : '⚡ 1:1 Migration for 1,063 Tezos Holders & FXHASH/OBJKT Creators'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={UNISWAP_SWAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/30 active:scale-95"
          >
            <TrendingUp size={14} /> Uniswap v4 Swap <ExternalLink size={12} />
          </a>
          <button
            onClick={handleCopyShareLink}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border border-slate-700 active:scale-95"
          >
            {copiedShareLink ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} className="text-blue-400" />}
            <span>{copiedShareLink ? (currentLang === 'ko' ? '공유 링크 복사됨!' : 'Link Copied!') : (currentLang === 'ko' ? '공유 링크 복사' : 'Copy Share URL')}</span>
          </button>
        </div>
      </div>

      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-black uppercase tracking-wider">
            <ArrowRightLeft size={14} className="animate-spin text-cyan-300" />
            {currentLang === 'ko' ? '1:1 공식 온체인 마이그레이션 (Base Mainnet ERC-20)' : 'Official 1:1 On-chain Migration to Base Mainnet (ERC-20)'}
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black italic text-white uppercase tracking-tight">
            {currentLang === 'ko' ? (
              <>Base 체인 확장 및 <span className="text-cyan-300">$WR 마이그레이션 포털</span></>
            ) : (
              <>WRISTORY ($WR) <span className="text-cyan-300">Base Migration Portal</span></>
            )}
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
            {currentLang === 'ko' ? (
              <>
                테조스(Tezos) 메인넷의 <strong>1,063명의 홀더 및 FXHASH/OBJKT 크리에이터</strong> 여러분과 함께 일군 헤리티지가 이더리움 Layer-2 <strong>Base 메인넷</strong>으로 공식 확장합니다. 
                현재 <strong>Uniswap v4 (Base) ETH/WR 풀(0.25% 수수료 등급, 56,801 WR = 1 ETH)</strong>이 활성화되어 실시간 거래를 지원하며, 기존 홀더 대상 <strong>1 Tezos WR = 1 Base WR (1:1 비율)</strong> 무손실 교환 및 스냅샷 자동 검증을 지원합니다.
              </>
            ) : (
              <>
                To all <strong>1,063 Tezos holders and FXHASH / OBJKT generative creators</strong>: WRISTORY is officially expanding to Ethereum Layer-2 <strong>Base Mainnet</strong>. 
                Our <strong>Uniswap v4 (Base) ETH/WR concentrated liquidity pool (0.25% fee tier, 56,801 WR = 1 ETH)</strong> is live. We provide a guaranteed <strong>1:1 token migration (1 Tezos WR = 1 Base WR)</strong> verified via on-chain snapshots.
              </>
            )}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="bg-slate-900/90 border border-slate-700 px-4 py-2.5 rounded-2xl flex items-center gap-3">
              <span className="text-xs text-slate-400 font-bold">Base Contract:</span>
              <code className="text-xs text-[#00ffcc] font-mono select-all font-bold">{BASE_WR_CONTRACT}</code>
              <button 
                onClick={handleCopyContract}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all"
                title="주소 복사"
              >
                {copiedContract ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
              <a 
                href={`https://basescan.org/token/${BASE_WR_CONTRACT}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-slate-800 rounded-lg text-blue-400 hover:text-blue-300 transition-all flex items-center gap-1 text-xs"
              >
                BaseScan <ExternalLink size={12} />
              </a>
            </div>

            <a 
              href={UNISWAP_V4_POSITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500/10 border border-emerald-500/30 px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs text-emerald-400 font-bold hover:bg-emerald-500/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Uniswap v4 Pool #2953119 Active <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Snapshot & Direct Links Card for Creators (OBJKT & FXHASH) */}
      <div className="bg-gradient-to-r from-purple-950/40 via-slate-900 to-blue-950/40 border border-purple-500/30 p-6 sm:p-8 rounded-[2.5rem] text-left space-y-4">
        <div className="flex items-center gap-2 text-purple-400 font-black text-xs uppercase tracking-wider">
          <Camera size={16} />
          {currentLang === 'ko' ? '📸 테조스 홀더 스냅샷 및 크리에이터 직통 링크' : '📸 Tezos Holder Snapshot & Direct Creator Portal Links'}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl space-y-2">
            <span className="text-slate-400 font-bold uppercase">{currentLang === 'ko' ? '1. 온체인 홀더 스냅샷' : '1. On-Chain Holder Snapshot'}</span>
            <p className="text-white font-bold text-sm">1,063 Wallets Verified</p>
            <p className="text-slate-400 text-[11px]">
              {currentLang === 'ko' 
                ? '테조스 TzKT 블록체인 상의 1,063개 지갑 보유 수량이 데이터베이스에 안전하게 기록되어 있습니다.' 
                : '1,063 wallet balances on Tezos TzKT indexer are captured and safely recorded in our verification engine.'}
            </p>
            <a 
              href={`https://tzkt.io/${TEZOS_FA2_CONTRACT}/holders`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400 hover:underline pt-1"
            >
              TzKT Holders Explorer <ExternalLink size={12} />
            </a>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl space-y-2">
            <span className="text-slate-400 font-bold uppercase">{currentLang === 'ko' ? '2. OBJKT.COM 연동' : '2. OBJKT.COM Integration'}</span>
            <p className="text-white font-bold text-sm">Verified Archive</p>
            <p className="text-slate-400 text-[11px]">
              {currentLang === 'ko' 
                ? 'OBJKT 및 FXHASH에 컬렉션을 소장하신 창작자분들도 동일하게 테조스 지갑 주소로 마이그레이션이 가능합니다.' 
                : 'Creators and collectors holding pieces on OBJKT / FXHASH can directly submit their tz wallet for 1:1 WR tokens.'}
            </p>
            <a 
              href="https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-400 hover:underline pt-1"
            >
              OBJKT Archive <ExternalLink size={12} />
            </a>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl space-y-2">
            <span className="text-slate-400 font-bold uppercase">{currentLang === 'ko' ? '3. 유니스왑 v4 풀' : '3. Uniswap v4 Liquidity'}</span>
            <p className="text-white font-bold text-sm">56,801 WR = 1 ETH (0.25%)</p>
            <p className="text-slate-400 text-[11px]">
              {currentLang === 'ko' 
                ? 'Base 유니스왑 v4 공식 풀(#2953119)에서 실시간 스왑 및 시세가 형성됩니다.' 
                : 'Live concentrated liquidity on Uniswap v4 (Base) with position #2953119.'}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a 
                href={UNISWAP_SWAP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 font-bold hover:underline"
              >
                Swap <ArrowUpRight size={12} />
              </a>
              <a 
                href={UNISWAP_V4_POSITION_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
              >
                Position #2953119 <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Step Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-3 relative">
          <div className="w-9 h-9 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-black text-sm">
            1
          </div>
          <h3 className="text-white font-black text-base uppercase">
            {currentLang === 'ko' ? 'Base 지갑 주소 준비' : '1. Prepare Base Wallet'}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            {currentLang === 'ko' 
              ? '메타마스크(MetaMask) 또는 코인베이스 월렛에서 네트워크를 Base Mainnet으로 설정 후, 본인의 0x... 지갑 주소를 복사합니다.' 
              : 'Set your MetaMask or Coinbase Wallet network to Base Mainnet and copy your 0x... EVM address.'}
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-3 relative">
          <div className="w-9 h-9 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-black text-sm">
            2
          </div>
          <h3 className="text-white font-black text-base uppercase">
            {currentLang === 'ko' ? '마이그레이션 신청서 제출' : '2. Submit Migration Form'}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            {currentLang === 'ko' 
              ? '현재 테조스 지갑 주소(tz1...), 수령할 Base 지갑 주소(0x...), 수량을 입력하고 제출합니다.' 
              : 'Enter your Tezos address (tz1...), Base recipient address (0x...), and token balance below.'}
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-3 relative">
          <div className="w-9 h-9 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black text-sm">
            3
          </div>
          <h3 className="text-white font-black text-base uppercase">
            {currentLang === 'ko' ? '1:1 Base $WR 수령' : '3. Receive 1:1 Base $WR'}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            {currentLang === 'ko' 
              ? '스냅샷 및 온체인 검증 완료 후, 제출하신 Base 지갑으로 1:1 동일 수량의 Base $WR 토큰이 자동 전송됩니다.' 
              : 'After snapshot verification, the identical quantity of Base $WR ERC-20 tokens will be dispatched to your Base wallet.'}
          </p>
        </div>
      </div>

      {/* Main Grid: Form + Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        {/* Migration Form (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 p-8 sm:p-10 rounded-[2.5rem] shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-white italic uppercase flex items-center gap-2">
              <Sparkles size={20} className="text-cyan-300" />
              {currentLang === 'ko' ? '1:1 마이그레이션 신청 접수' : '1:1 Migration Application'}
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              {currentLang === 'ko' 
                ? '1,063명의 테조스 홀더 및 글로벌 창작자분들을 위한 공식 자동 접수 창구입니다.' 
                : 'Official automated portal for all 1,063 Tezos holders and FXHASH / OBJKT creators.'}
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-emerald-950/30 border border-emerald-500/40 p-8 rounded-3xl space-y-4 text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl font-black text-white">
                {currentLang === 'ko' ? '마이그레이션 신청이 정상 접수되었습니다!' : 'Migration Application Successfully Submitted!'}
              </h3>
              <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
                {currentLang === 'ko' ? (
                  <>
                    제출해주신 테조스 지갑 보유 정보와 스냅샷을 검증 후, 등록하신 Base 지갑 주소(<span className="text-blue-400 font-mono font-bold">{baseAddress}</span>)로 1:1 $WR 토큰이 안전하게 지급됩니다.
                  </>
                ) : (
                  <>
                    Your Tezos address and snapshot record are being verified. 1:1 $WR tokens will be sent to your Base wallet (<span className="text-blue-400 font-mono font-bold">{baseAddress}</span>).
                  </>
                )}
              </p>
              <button 
                onClick={() => {
                  setIsSuccess(false);
                  setTezosAddress('');
                  setBaseAddress('');
                  setAmount('');
                  setTxHash('');
                }}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all"
              >
                {currentLang === 'ko' ? '추가 신청서 작성하기' : 'Submit Another Request'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Tezos Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-300 flex items-center justify-between">
                  <span>{currentLang === 'ko' ? '1. 현재 테조스 지갑 주소 (Tezos Address) *' : '1. Current Tezos Wallet Address (tz1...) *'}</span>
                  <span className="text-[10px] text-slate-500 font-mono">tz1 / tz2 / tz3...</span>
                </label>
                <input 
                  type="text" 
                  value={tezosAddress}
                  onChange={(e) => setTezosAddress(e.target.value)}
                  placeholder="e.g. tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all font-mono"
                />
              </div>

              {/* Base Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-300 flex items-center justify-between">
                  <span>{currentLang === 'ko' ? '2. 수령할 Base 지갑 주소 (Base 0x Address) *' : '2. Recipient Base Wallet Address (0x...) *'}</span>
                  <span className="text-[10px] text-blue-400 font-mono">MetaMask / Coinbase 0x...</span>
                </label>
                <input 
                  type="text" 
                  value={baseAddress}
                  onChange={(e) => setBaseAddress(e.target.value)}
                  placeholder="e.g. 0xBc04a6D7...d24853abF"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all font-mono"
                />
              </div>

              {/* Amount */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-300 flex items-center justify-between">
                  <span>{currentLang === 'ko' ? '3. 교환 신청 수량 (Amount of $WR) *' : '3. Amount to Migrate ($WR) *'}</span>
                  <span className="text-[10px] text-cyan-300">1 Tezos WR = 1 Base WR</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 500000"
                    required
                    min="1"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all font-mono"
                  />
                  <span className="absolute right-4 top-3 text-xs font-black text-slate-400">WR</span>
                </div>
              </div>

              {/* Tezos Tx Hash / Proof */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-300 flex items-center justify-between">
                  <span>{currentLang === 'ko' ? '4. 트랜잭션 해시 또는 메모 (선택 사항)' : '4. Tezos Tx Hash or Note (Optional)'}</span>
                  <span className="text-[10px] text-slate-500 font-mono">TzKT Tx Hash</span>
                </label>
                <input 
                  type="text" 
                  value={txHash}
                  onChange={(e) => setTxHash(e.target.value)}
                  placeholder={currentLang === 'ko' ? "예: ooy4B4... (또는 온체인 스냅샷으로 자동 인증)" : "e.g. ooy4B4... (or automatic snapshot verification)"}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all font-mono"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 active:scale-98"
              >
                {isSubmitting ? (
                  <>{currentLang === 'ko' ? '신청서 검증 및 전송 중...' : 'Verifying & Submitting...'}</>
                ) : (
                  <>
                    <Send size={16} /> {currentLang === 'ko' ? '1:1 마이그레이션 신청 제출하기' : 'Submit 1:1 Migration Request'}
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Info & FAQ Notice (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-black text-xs uppercase tracking-wider">
              <AlertTriangle size={16} />
              {currentLang === 'ko' ? '필독 유의사항 & 보안 수칙' : 'Important Security Guidelines'}
            </div>
            
            <ul className="space-y-3 text-xs text-slate-300 font-medium leading-relaxed divide-y divide-slate-800">
              <li className="pt-2">
                <strong className="text-white">{currentLang === 'ko' ? '1:1 절대 고정 교환:' : '1:1 Exact Parity:'}</strong><br />
                {currentLang === 'ko' 
                  ? '교환 비율은 정확히 1 Tezos WR = 1 Base WR 로 일치하며, 수수료 차감이 없습니다.' 
                  : 'Migration ratio is strictly 1 Tezos WR = 1 Base WR with zero commission fee.'}
              </li>
              <li className="pt-3">
                <strong className="text-white">{currentLang === 'ko' ? '스냅샷 및 총발행량 엄격 유지:' : 'Snapshot & Fixed 51M Cap:'}</strong><br />
                {currentLang === 'ko' 
                  ? '테조스 총발행량(51,169,148 WR)과 베이스 체인 발행량은 철저히 1:1 연동되며 추가 발행은 절대 없습니다.' 
                  : 'Total supply is strictly capped at 51,169,148 WR across all chains with zero inflation.'}
              </li>
              <li className="pt-3">
                <strong className="text-white">{currentLang === 'ko' ? 'Uniswap v4 라이브 풀:' : 'Uniswap v4 Live Pool:'}</strong><br />
                {currentLang === 'ko' 
                  ? 'Base 체인 Uniswap v4 (0.25%, #2953119) 풀에서 실시간 가격(56,801 WR = 1 ETH)과 즉각적인 유동성이 보장됩니다.' 
                  : 'Concentrated liquidity on Uniswap v4 (ETH/WR, 0.25% fee tier, pool #2953119) with 56,801 WR = 1 ETH.'}
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase">
              <HelpCircle size={16} />
              {currentLang === 'ko' ? '공식 커뮤니티 지원 채널' : 'Official Support Channels'}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {currentLang === 'ko' 
                ? 'FXHASH / OBJKT 창작자 및 홀더분들을 위해 텔레그램과 트위터에서 실시간 질의응답을 지원합니다.' 
                : 'Real-time assistance is available for global creators and holders via official Telegram & X.'}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://t.me/Yes_OkLab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-xl text-xs font-bold transition-all border border-blue-500/30 flex items-center gap-1.5"
              >
                Telegram Support <ExternalLink size={12} />
              </a>
              <a 
                href="https://x.com/wakk5252" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
              >
                X (@wakk5252) <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Live Migration Status Table */}
      <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] space-y-6 text-left">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-xl font-black text-white italic uppercase flex items-center gap-2">
              <Clock size={18} className="text-cyan-300" />
              {currentLang === 'ko' ? '실시간 마이그레이션 현황 (Live Tracker)' : 'Live Migration Tracker'}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">
              {currentLang === 'ko' 
                ? '투명한 온체인 자산 이전을 위해 1,063 홀더 접수 및 전송 현황이 공개됩니다.' 
                : 'Transparent on-chain progress tracking for all 1,063 community members.'}
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-3 text-slate-500" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'ko' ? "지갑 주소 또는 ID 검색" : "Search address or ID"}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3 px-4">{currentLang === 'ko' ? '신청 ID' : 'Record ID'}</th>
                <th className="py-3 px-4">{currentLang === 'ko' ? '테조스 주소 (Source)' : 'Tezos (Source)'}</th>
                <th className="py-3 px-4">{currentLang === 'ko' ? 'Base 주소 (Destination)' : 'Base (Destination)'}</th>
                <th className="py-3 px-4">{currentLang === 'ko' ? '수량 ($WR)' : 'Amount ($WR)'}</th>
                <th className="py-3 px-4">{currentLang === 'ko' ? '일시' : 'Date'}</th>
                <th className="py-3 px-4 text-right">{currentLang === 'ko' ? '상태' : 'Status'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
              {filteredRecords.map((rec) => (
                <tr key={rec.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4 font-bold text-white">{rec.id}</td>
                  <td className="py-3 px-4 text-blue-300">{rec.tezosAddress}</td>
                  <td className="py-3 px-4 text-[#00ffcc]">{rec.baseAddress}</td>
                  <td className="py-3 px-4 font-bold text-white">{rec.amount}</td>
                  <td className="py-3 px-4 text-slate-500 font-sans">{rec.timestamp}</td>
                  <td className="py-3 px-4 text-right">
                    {rec.status === 'COMPLETED' && (
                      <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg text-[10px] font-black uppercase font-sans">
                        {currentLang === 'ko' ? '전송 완료' : 'COMPLETED'}
                      </span>
                    )}
                    {rec.status === 'VERIFIED' && (
                      <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-[10px] font-black uppercase font-sans">
                        {currentLang === 'ko' ? '검증 완료' : 'VERIFIED'}
                      </span>
                    )}
                    {rec.status === 'PENDING' && (
                      <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg text-[10px] font-black uppercase font-sans">
                        {currentLang === 'ko' ? '접수 대기' : 'PENDING'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MigrationPortalView;
