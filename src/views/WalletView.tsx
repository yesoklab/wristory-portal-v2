import React, { useState, useEffect } from 'react';
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
  Loader2
} from 'lucide-react';
import { wallet, getWRBalance, transferWR } from '../lib/tezos';
import { addWRTokenToMetaMask, WR_TOKEN_CONFIG } from '../lib/metamask';

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
  const [txHash, setTxHash] = useState<string | null>(null);

  // MetaMask Add Token state
  const [isAddingToken, setIsAddingToken] = useState(false);
  const [tokenNotice, setTokenNotice] = useState<string | null>(null);

  const handleAddMetaMask = async () => {
    setIsAddingToken(true);
    setTokenNotice(lang === 'ko' ? '메타마스크 승인 대기 중...' : 'Confirming in MetaMask...');
    try {
      const res = await addWRTokenToMetaMask();
      setTokenNotice(res.message);
    } catch (e: any) {
      setTokenNotice(e?.message || '지갑 연동 오류');
    } finally {
      setIsAddingToken(false);
      setTimeout(() => setTokenNotice(null), 5000);
    }
  };

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
        {/* Wallet Dashboard */}
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

          {/* Recommended Mobile Wallets & Dual Chains */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] px-4">
              {lang === 'ko' ? '추천 지갑 (Base L2 & Tezos)' : 'Recommended Wallets'}
            </h3>
            
            {/* MetaMask Card with Direct One-Click Token & Logo Addition */}
            <div className="bg-gradient-to-br from-orange-500/10 via-slate-900 to-amber-950/20 border border-orange-500/40 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative group shrink-0">
                    <img 
                      src={WR_TOKEN_CONFIG.image} 
                      alt="WR Logo" 
                      className="w-12 h-12 rounded-2xl object-cover border border-white/20 shadow-md bg-slate-950" 
                      onError={(e) => { (e.target as HTMLImageElement).src = WR_TOKEN_CONFIG.fallbackImage; }}
                    />
                    <span className="absolute -bottom-1 -right-1 text-sm">🦊</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-lg italic uppercase tracking-tight">MetaMask</span>
                      <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-[10px] font-mono font-bold rounded">Base L2</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {lang === 'ko' ? '이더리움 L2 Base 메인넷 $WR 토큰 및 공식 로고 자동 등록' : 'Base L2 $WR Token & Official Logo WatchAsset'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleAddMetaMask}
                  disabled={isAddingToken}
                  className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/20 active:scale-95 disabled:opacity-70 shrink-0"
                >
                  {isAddingToken ? <Loader2 size={14} className="animate-spin" /> : <span>🦊</span>}
                  <span>{lang === 'ko' ? '메타마스크에 $WR 토큰 추가' : 'Add $WR to MetaMask'}</span>
                </button>
              </div>

              {tokenNotice && (
                <div className="p-3 bg-slate-950/80 border border-orange-500/30 rounded-xl text-xs font-bold text-amber-300">
                  {tokenNotice}
                </div>
              )}
            </div>

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
                        ? '테조스 생태계 표준 지갑 - WR 토큰 공식 지원 예정' 
                        : 'Standard Tezos Wallet - Official WR Token Support Coming Soon'}
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

        {/* Transfer Section */}
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
              <p className="text-slate-500 font-medium">지갑을 먼저 연결해 주세요.</p>
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
      </div>
    </div>
  );
};

export default WalletView;
