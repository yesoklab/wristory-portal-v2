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
  Wallet
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

const MigrationPortalView: React.FC<{ lang?: 'ko' | 'en' }> = ({ lang = 'ko' }) => {
  const [tezosAddress, setTezosAddress] = useState('');
  const [baseAddress, setBaseAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [txHash, setTxHash] = useState('');
  const [memo, setMemo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedContract, setCopiedContract] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Base Contract Address as provided in the screenshot
  const BASE_WR_CONTRACT = '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7';
  const TEZOS_VAULT_ADDRESS = 'tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tezosAddress.trim() || !baseAddress.trim() || !amount.trim()) {
      alert('필수 입력 항목을 모두 작성해 주세요.');
      return;
    }

    if (!baseAddress.startsWith('0x') || baseAddress.length !== 42) {
      alert('올바른 Base (이더리움 0x... 42자리) 지갑 주소를 입력해 주세요.');
      return;
    }

    if (!tezosAddress.startsWith('tz1') && !tezosAddress.startsWith('tz2') && !tezosAddress.startsWith('tz3') && !tezosAddress.startsWith('KT1')) {
      alert('올바른 Tezos 지갑 주소 (tz1/tz2/tz3...)를 입력해 주세요.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newRecord: MigrationRecord = {
        id: `MIG-${Math.floor(1000 + Math.random() * 9000)}`,
        tezosAddress: tezosAddress.substring(0, 5) + '...' + tezosAddress.substring(tezosAddress.length - 4),
        baseAddress: baseAddress.substring(0, 4) + '...' + baseAddress.substring(baseAddress.length - 4),
        amount: `${Number(amount).toLocaleString()} WR`,
        txHash: txHash.trim() ? (txHash.substring(0, 4) + '...' + txHash.substring(txHash.length - 4)) : 'Manual Verify',
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
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/30 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        
        <div className="relative z-10 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-black uppercase tracking-wider">
            <ArrowRightLeft size={14} className="animate-spin text-blue-400" />
            1:1 Token Migration to Base Mainnet (ERC-20)
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black italic text-white uppercase tracking-tight">
            Base 체인 확장 및 <span className="text-blue-400">$WR 마이그레이션 포털</span>
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
            테조스(Tezos) 메인넷의 1,063명 홀더분들과 함께 지켜온 우리의 디지털 헤리티지가 이더리움 Layer-2 <strong>Base 메인넷</strong>으로 본격 확장합니다. 
            QuipuSwap의 한계를 넘어 글로벌 유동성과 Uniswap V3 풀을 구축하기 위해 <strong>1 Tezos WR = 1 Base WR (1:1 비율)</strong> 교환을 안전하게 지원합니다.
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

            <div className="bg-blue-600/10 border border-blue-500/30 px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs text-blue-300 font-bold">
              <ShieldCheck size={16} className="text-blue-400" />
              총 발행량 51,169,148 WR 영구 고정 연동
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
          <h3 className="text-white font-black text-base uppercase">Base 지갑 주소 준비</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            메타마스크(MetaMask) 또는 코인베이스 월렛에서 네트워크를 <strong>Base Mainnet</strong>으로 설정 후, 본인의 <strong>0x...</strong> 지갑 주소를 복사합니다.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-3 relative">
          <div className="w-9 h-9 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-black text-sm">
            2
          </div>
          <h3 className="text-white font-black text-base uppercase">마이그레이션 신청서 제출</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            현재 테조스 지갑 주소, 교환받을 Base 지갑 주소(0x), 그리고 보유 수량을 아래 입력창에 입력하고 인증을 제출합니다.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-3 relative">
          <div className="w-9 h-9 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-black text-sm">
            3
          </div>
          <h3 className="text-white font-black text-base uppercase">1:1 Base $WR 수령</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            재단 및 관리팀 온체인 검증 완료 후, 제출하신 Base 지갑으로 1:1 동일 수량의 Base $WR 토큰이 자동 전송됩니다.
          </p>
        </div>
      </div>

      {/* Main Grid: Form + Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        {/* Migration Form (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 p-8 sm:p-10 rounded-[2.5rem] shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-white italic uppercase flex items-center gap-2">
              <Sparkles size={20} className="text-blue-400" />
              1:1 마이그레이션 신청 접수
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              1,063명의 테조스 홀더분들을 위한 공식 자동 접수 창구입니다.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-emerald-950/30 border border-emerald-500/40 p-8 rounded-3xl space-y-4 text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl font-black text-white">마이그레이션 신청이 정상 접수되었습니다!</h3>
              <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
                제출해주신 테조스 지갑 보유 정보와 트랜잭션을 검증 후, 등록하신 Base 지갑 주소(<span className="text-blue-400 font-mono font-bold">{baseAddress}</span>)로 1:1 $WR 토큰이 안전하게 지급됩니다.
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
                추가 신청서 작성하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Tezos Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-300 flex items-center justify-between">
                  <span>1. 현재 테조스 지갑 주소 (Tezos Address) *</span>
                  <span className="text-[10px] text-slate-500 font-mono">tz1 / tz2 / tz3...</span>
                </label>
                <input 
                  type="text" 
                  value={tezosAddress}
                  onChange={(e) => setTezosAddress(e.target.value)}
                  placeholder="예: tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all font-mono"
                />
              </div>

              {/* Base Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-300 flex items-center justify-between">
                  <span>2. 수령할 Base 지갑 주소 (Base 0x Address) *</span>
                  <span className="text-[10px] text-blue-400 font-mono">메타마스크 등 0x...</span>
                </label>
                <input 
                  type="text" 
                  value={baseAddress}
                  onChange={(e) => setBaseAddress(e.target.value)}
                  placeholder="예: 0xBc04a6D7...d24853abF"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all font-mono"
                />
              </div>

              {/* Amount */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase text-slate-300 flex items-center justify-between">
                  <span>3. 교환 신청 수량 (Amount of $WR) *</span>
                  <span className="text-[10px] text-slate-400">1 Tezos WR = 1 Base WR</span>
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="예: 500000"
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
                  <span>4. 테조스 트랜잭션 해시 또는 증빙 (선택 사항)</span>
                  <span className="text-[10px] text-slate-500 font-mono">Tx Hash / TzKT</span>
                </label>
                <input 
                  type="text" 
                  value={txHash}
                  onChange={(e) => setTxHash(e.target.value)}
                  placeholder="예: ooy4B4... (보관 지갑으로 $WR 전송한 트랜잭션 해시 or 생략 가능)"
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
                  <>신청서 검증 및 전송 중...</>
                ) : (
                  <>
                    <Send size={16} /> 1:1 마이그레이션 신청 제출하기
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
              필독 유의사항 & 보안 수칙
            </div>
            
            <ul className="space-y-3 text-xs text-slate-300 font-medium leading-relaxed divide-y divide-slate-800">
              <li className="pt-2">
                <strong className="text-white">1:1 절대 고정 교환:</strong><br />
                교환 비율은 정확히 1 Tezos WR = 1 Base WR 로 일치하며, 어떠한 수수료 차감도 없습니다.
              </li>
              <li className="pt-3">
                <strong className="text-white">총발행량 엄격 유지:</strong><br />
                테조스의 총발행량(51,169,148 WR)과 베이스 체인의 총발행량은 1:1로 철저히 연동 관리되며 추가 발행은 절대 없습니다.
              </li>
              <li className="pt-3">
                <strong className="text-white">Uniswap V3 페어 구축 예정:</strong><br />
                Base 체인 토큰 배포 완료 후 ETH / $WR 페어로 유니스왑 V3 유동성이 공급되어 자유로운 거래 및 시세 형성이 진행됩니다.
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase">
              <HelpCircle size={16} />
              공식 커뮤니티 지원 채널
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              마이그레이션 도중 문의사항이 있으시거나 빠른 확인을 원하시는 홀더분들은 공식 텔레그램 및 X(트위터)로 연락주시면 실시간 지원을 받으실 수 있습니다.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://t.me/Yes_OkLab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-xl text-xs font-bold transition-all border border-blue-500/30 flex items-center gap-1.5"
              >
                텔레그램 지원방 <ExternalLink size={12} />
              </a>
              <a 
                href="https://x.com/wakk5252" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
              >
                X (Twitter) <ExternalLink size={12} />
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
              <Clock size={18} className="text-blue-400" />
              실시간 마이그레이션 현황 (Live Tracker)
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">
              투명한 온체인 자산 이전을 위해 접수 및 전송 현황이 공개됩니다.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-3 text-slate-500" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="지갑 주소 또는 ID 검색"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3 px-4">신청 ID</th>
                <th className="py-3 px-4">테조스 주소 (Source)</th>
                <th className="py-3 px-4">Base 주소 (Destination)</th>
                <th className="py-3 px-4">수량 ($WR)</th>
                <th className="py-3 px-4">일시</th>
                <th className="py-3 px-4 text-right">상태</th>
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
                        전송 완료
                      </span>
                    )}
                    {rec.status === 'VERIFIED' && (
                      <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-[10px] font-black uppercase font-sans">
                        검증 완료
                      </span>
                    )}
                    {rec.status === 'PENDING' && (
                      <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg text-[10px] font-black uppercase font-sans">
                        접수 대기
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
