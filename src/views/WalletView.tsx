import React, { useState } from 'react';
import { 
  Wallet, 
  ArrowRightLeft, 
  RefreshCw, 
  ExternalLink, 
  ShieldCheck, 
  Smartphone, 
  AlertCircle,
  Send,
  History,
  CheckCircle2,
  Loader2,
  Crown,
  Shield,
  Leaf,
  Gem,
  Star,
  ChevronRight,
  Lock,
} from 'lucide-react';
import { wallet, getWRBalance, transferWR } from '../lib/tezos';

// ─────────────────────────────────────────────────────────────
// Grade definitions
// ─────────────────────────────────────────────────────────────
const GRADES = [
  {
    id: 'founder',
    label: 'Founder',
    labelKo: '파운더',
    min: 100000,
    color: 'from-yellow-500/20 to-amber-600/10',
    border: 'border-yellow-500/40',
    text: 'text-yellow-400',
    activeBg: 'bg-yellow-500',
    glow: 'shadow-yellow-500/20',
    icon: Crown,
    benefits: [
      { ko: '모든 등급 혜택 포함', en: 'All tier benefits included' },
      { ko: 'YesOkLab 공식 크레딧 등재', en: 'Listed in YesOkLab official credits' },
      { ko: '신작 1/1 우선 구매권 (영구)', en: 'Permanent priority 1/1 access' },
      { ko: '분기별 한정 에디션 무료 증정', en: 'Quarterly limited edition gift' },
    ],
  },
  {
    id: 'heritage',
    label: 'Heritage',
    labelKo: '헤리티지',
    min: 10000,
    color: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/40',
    text: 'text-cyan-400',
    activeBg: 'bg-cyan-500',
    glow: 'shadow-cyan-500/20',
    icon: Gem,
    benefits: [
      { ko: '1/1 작품 우선 접근권', en: 'Priority access to 1/1 works' },
      { ko: 'wristory.co.kr 명예 홀더 등재', en: 'Listed as honor holder on wristory.co.kr' },
      { ko: '신작 48시간 선구매권', en: '48hr early access to new drops' },
      { ko: 'Guardian 혜택 포함', en: 'Includes Guardian benefits' },
    ],
  },
  {
    id: 'guardian',
    label: 'Guardian',
    labelKo: '가디언',
    min: 1000,
    color: 'from-blue-500/20 to-indigo-600/10',
    border: 'border-blue-500/40',
    text: 'text-blue-400',
    activeBg: 'bg-blue-500',
    glow: 'shadow-blue-500/20',
    icon: Shield,
    benefits: [
      { ko: '신작 24시간 선구매권', en: '24hr early access to new drops' },
      { ko: '한정 컬렉션 접근 가능', en: 'Access to limited collections' },
      { ko: '거버넌스 투표 참여권', en: 'Governance voting rights' },
      { ko: 'Seed 혜택 포함', en: 'Includes Seed benefits' },
    ],
  },
  {
    id: 'seed',
    label: 'Seed',
    labelKo: '씨드',
    min: 100,
    color: 'from-emerald-500/20 to-green-600/10',
    border: 'border-emerald-500/40',
    text: 'text-emerald-400',
    activeBg: 'bg-emerald-500',
    glow: 'shadow-emerald-500/20',
    icon: Leaf,
    benefits: [
      { ko: '신작 알림 우선 수신', en: 'Priority new drop notifications' },
      { ko: 'WRISTORY 커뮤니티 멤버십', en: 'WRISTORY community membership' },
      { ko: '$WR 에어드롭 이벤트 참여 자격', en: 'Eligible for $WR airdrop events' },
    ],
  },
] as const;

type Grade = (typeof GRADES)[number];

function getCurrentGrade(balance: number | null): Grade | null {
  if (balance === null) return null;
  for (const g of GRADES) {
    if (balance >= g.min) return g;
  }
  return null;
}

function getNextGrade(balance: number | null): Grade | null {
  if (balance === null) return GRADES[GRADES.length - 1];
  for (let i = GRADES.length - 1; i >= 0; i--) {
    if (balance < GRADES[i].min) return GRADES[i];
  }
  return null;
}

// ─────────────────────────────────────────────────────────────
// Grade Panel sub-component
// ─────────────────────────────────────────────────────────────
interface GradePanelProps {
  balance: number | null;
  address: string | null;
  lang: 'ko' | 'en';
}

const GradePanel: React.FC<GradePanelProps> = ({ balance, address, lang }) => {
  const currentGrade = getCurrentGrade(balance);
  const nextGrade = getNextGrade(balance);
  const isConnected = !!address;

  const progressPct = (() => {
    if (!isConnected || balance === null || !nextGrade) return 100;
    const prevMin = currentGrade?.min ?? 0;
    const range = nextGrade.min - prevMin;
    return Math.min(100, Math.max(0, ((balance - prevMin) / range) * 100));
  })();

  const needed = nextGrade && balance !== null ? Math.max(0, nextGrade.min - balance) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-400">
          <Star size={16} />
        </div>
        <div>
          <h3 className="text-xs font-black text-white uppercase tracking-widest">
            {lang === 'ko' ? '$WR 홀더 등급' : '$WR Holder Grade'}
          </h3>
          <p className="text-[10px] text-slate-500 font-medium">
            {lang === 'ko' ? '보유량에 따른 멤버십 혜택' : 'Membership benefits by holdings'}
          </p>
        </div>
      </div>

      {/* Current grade card */}
      {isConnected ? (
        <div
          className={`bg-gradient-to-br ${currentGrade?.color ?? 'from-slate-800/50 to-slate-900/50'}
            border ${currentGrade?.border ?? 'border-slate-700'}
            rounded-3xl p-8 shadow-xl ${currentGrade?.glow ?? ''} relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

          {/* Grade + balance */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                {lang === 'ko' ? '현재 등급' : 'Current Grade'}
              </p>
              {currentGrade ? (
                <div className="flex items-center gap-2">
                  <currentGrade.icon size={28} className={currentGrade.text} />
                  <span className={`text-3xl font-black italic uppercase tracking-tighter ${currentGrade.text}`}>
                    {lang === 'ko' ? currentGrade.labelKo : currentGrade.label}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-black italic text-slate-500 uppercase tracking-tighter">
                  {lang === 'ko' ? '등급 없음' : 'No Grade'}
                </span>
              )}
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Balance</p>
              <p className="text-2xl font-black italic text-white tracking-tighter">
                {balance !== null ? balance.toLocaleString() : '0'}
                <span className="text-sm text-blue-400 ml-1">WR</span>
              </p>
            </div>
          </div>

          {/* Benefits list */}
          {currentGrade && (
            <div className="space-y-2 mb-6">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                {lang === 'ko' ? '현재 혜택' : 'Current Benefits'}
              </p>
              {currentGrade.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <ChevronRight size={12} className={currentGrade.text} />
                  {lang === 'ko' ? b.ko : b.en}
                </div>
              ))}
            </div>
          )}

          {/* Progress bar to next grade */}
          {nextGrade && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  {lang === 'ko' ? `다음: ${nextGrade.labelKo}` : `Next: ${nextGrade.label}`}
                </p>
                <p className="text-[10px] font-black text-slate-400">
                  {lang === 'ko'
                    ? `${needed.toLocaleString()} WR 더 필요`
                    : `${needed.toLocaleString()} WR needed`}
                </p>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${currentGrade?.activeBg ?? 'bg-emerald-500'}`}
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          )}

          {!currentGrade && (
            <p className="text-[10px] text-slate-500 italic">
              {lang === 'ko'
                ? '100 WR 이상 보유 시 Seed 등급이 활성화됩니다.'
                : 'Hold 100+ WR to activate Seed grade.'}
            </p>
          )}
        </div>
      ) : (
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
          <Lock size={32} className="text-slate-700 mx-auto" />
          <p className="text-slate-500 text-sm font-medium">
            {lang === 'ko'
              ? '지갑 연결 후 등급을 확인할 수 있습니다.'
              : 'Connect your wallet to check your grade.'}
          </p>
        </div>
      )}

      {/* All tier list */}
      <div className="space-y-3">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">
          {lang === 'ko' ? '전체 등급 구조' : 'All Grade Tiers'}
        </p>
        {GRADES.map((grade) => {
          const isActive = currentGrade?.id === grade.id;
          const isUnlocked = balance !== null && balance >= grade.min;
          const Icon = grade.icon;
          return (
            <div
              key={grade.id}
              className={`flex items-center gap-4 p-5 rounded-2xl border transition-all
                ${isActive
                  ? `bg-gradient-to-r ${grade.color} ${grade.border} shadow-lg ${grade.glow}`
                  : isUnlocked
                  ? `bg-slate-900/80 ${grade.border} opacity-70`
                  : 'bg-slate-900/30 border-slate-800 opacity-40'
                }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/10' : 'bg-slate-800'}`}>
                <Icon size={20} className={isActive || isUnlocked ? grade.text : 'text-slate-600'} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-black italic uppercase tracking-tight ${isActive ? grade.text : isUnlocked ? 'text-white' : 'text-slate-600'}`}>
                    {lang === 'ko' ? grade.labelKo : grade.label}
                  </span>
                  {isActive && (
                    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 ${grade.text}`}>
                      {lang === 'ko' ? '현재' : 'Now'}
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-500 font-medium">
                  {grade.min.toLocaleString()}+ WR
                </p>
              </div>
              {!isConnected && <Lock size={14} className="text-slate-700 shrink-0" />}
            </div>
          );
        })}
      </div>

      {/* QuipuSwap CTA */}
      {isConnected && nextGrade && (
        <a
          href="https://quipuswap.com/swap?from=tez&to=KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full p-5 bg-blue-600/10 border border-blue-500/30 rounded-2xl hover:border-blue-400/60 hover:bg-blue-600/20 transition-all group"
        >
          <div>
            <p className="text-xs font-black text-white uppercase tracking-widest">
              {lang === 'ko' ? `${nextGrade.labelKo} 등급 달성하기` : `Reach ${nextGrade.label} Grade`}
            </p>
            <p className="text-[10px] text-slate-500 font-medium mt-0.5">
              {lang === 'ko' ? 'QuipuSwap에서 $WR 구매' : 'Buy $WR on QuipuSwap'}
            </p>
          </div>
          <ChevronRight size={18} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Main WalletView
// ─────────────────────────────────────────────────────────────
interface Props {
  lang: 'ko' | 'en';
}

const WalletView: React.FC<Props> = ({ lang }) => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [txStatus, setTxStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      await wallet.requestPermissions();
      const pkh = await wallet.getPKH();
      setAddress(pkh);
      fetchBalance(pkh);
    } catch (error) {
      console.error('Connection failed:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const fetchBalance = async (pkh: string) => {
    setIsRefreshing(true);
    const bal = await getWRBalance(pkh);
    setBalance(bal);
    setIsRefreshing(false);
  };

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !amount) return;
    setTxStatus('SENDING');
    try {
      await transferWR(recipient, parseFloat(amount));
      setTxStatus('SUCCESS');
      if (address) fetchBalance(address);
    } catch (error) {
      console.error('Transfer failed:', error);
      setTxStatus('ERROR');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ── Left column: Wallet Dashboard ── */}
        <div className="space-y-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-10 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16" />

            <div className="flex justify-between items-start relative">
              <div className="space-y-1">
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tighter">My Wallet</h2>
                <p className="text-slate-500 text-xs font-black tracking-widest uppercase">Wristory Asset Manager</p>
              </div>
              <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400">
                <Wallet size={24} />
              </div>
            </div>

            {!address ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto flex items-center justify-center text-slate-600">
                  <ShieldCheck size={40} />
                </div>
                <p className="text-slate-400 font-medium">
                  {lang === 'ko' ? '지갑을 연결하여 자산을 확인하세요.' : 'Connect your wallet to view assets.'}
                </p>
                <button
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 disabled:opacity-50"
                >
                  {isConnecting ? <Loader2 size={16} className="animate-spin" /> : <Wallet size={16} />}
                  {lang === 'ko' ? '지갑 연결하기' : 'Connect Wallet'}
                </button>
              </div>
            ) : (
              <div className="space-y-8 animate-in zoom-in-95 duration-300">
                <div className="p-6 bg-slate-950/50 rounded-3xl border border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Address</span>
                    <span className="text-[10px] font-mono text-blue-400">{address.slice(0, 6)}...{address.slice(-6)}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">WR Balance</span>
                      <button
                        onClick={() => fetchBalance(address)}
                        disabled={isRefreshing}
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
                      </button>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black italic text-white tracking-tighter">
                        {balance !== null ? balance.toLocaleString() : '---'}
                      </span>
                      <span className="text-xl font-black text-blue-500 italic uppercase tracking-tighter">WR</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={`https://tzkt.io/${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    Explorer <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => { setAddress(null); setBalance(null); }}
                    className="py-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Recommended Wallets */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] px-4">Recommended Wallets</h3>
            <div className="grid grid-cols-1 gap-4">
              <a
                href="https://templewallet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-600/10 to-slate-900 border border-blue-500/30 p-6 rounded-3xl hover:border-blue-500 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-widest">
                  Official Partner
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <span className="font-black text-white text-lg italic uppercase tracking-tight block">Temple Wallet</span>
                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                      {lang === 'ko'
                        ? '테조스 생태계 표준 지갑 - WR 토큰 공식 지원'
                        : 'Standard Tezos Wallet - Official WR Token Support'}
                    </p>
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wallet.kukai.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Smartphone size={18} />
                    </div>
                    <span className="font-black text-white italic uppercase tracking-tight">Kukai</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Social Login & Web Wallet</p>
                </a>
                <a
                  href="https://airgap.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-emerald-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={18} />
                    </div>
                    <span className="font-black text-white italic uppercase tracking-tight">AirGap</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed">Secure Mobile Wallet</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right column: Transfer + Grade ── */}
        <div className="space-y-8">
          {/* Transfer */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-10 space-y-8 shadow-2xl relative">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tighter">Transfer WR</h2>
                <p className="text-slate-500 text-xs font-black tracking-widest uppercase">Send Assets Instantly</p>
              </div>
              <div className="w-12 h-12 bg-emerald-600/20 rounded-2xl flex items-center justify-center text-emerald-400">
                <Send size={24} />
              </div>
            </div>

            {!address ? (
              <div className="h-64 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                <ArrowRightLeft size={48} className="text-slate-700" />
                <p className="text-slate-500 font-medium">
                  {lang === 'ko' ? '지갑을 먼저 연결해 주세요.' : 'Connect wallet first.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleTransfer} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-4">Recipient Address</label>
                  <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="tz1..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white font-mono text-sm focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-4">Amount (WR)</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.000001"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white font-mono text-lg focus:border-blue-500 outline-none transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setAmount(balance?.toString() || '0')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-blue-500 hover:text-blue-400 uppercase tracking-widest"
                    >
                      Max
                    </button>
                  </div>
                </div>

                {txStatus === 'SUCCESS' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-3 text-emerald-500 animate-in zoom-in-95">
                    <CheckCircle2 size={20} />
                    <div className="text-xs font-bold">
                      {lang === 'ko' ? '전송이 완료되었습니다!' : 'Transfer Successful!'}
                    </div>
                  </div>
                )}
                {txStatus === 'ERROR' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-3 text-red-500 animate-in zoom-in-95">
                    <AlertCircle size={20} />
                    <div className="text-xs font-bold">
                      {lang === 'ko' ? '전송에 실패했습니다. 잔액을 확인해 주세요.' : 'Transfer Failed. Please check your balance.'}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={txStatus === 'SENDING'}
                  className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/20 disabled:opacity-50"
                >
                  {txStatus === 'SENDING' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {lang === 'ko' ? 'WR 토큰 보내기' : 'Send WR Token'}
                </button>
              </form>
            )}

            <div className="pt-6 border-t border-slate-800/50">
              <div className="flex items-center gap-3 text-slate-500">
                <History size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Recent Activity</span>
              </div>
              <p className="text-[10px] text-slate-600 mt-2 italic">No recent transactions found on this portal.</p>
            </div>
          </div>

          {/* ── NEW: Grade Panel ── */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-10 shadow-2xl">
            <GradePanel balance={balance} address={address} lang={lang} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WalletView;
