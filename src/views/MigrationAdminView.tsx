import React, { useState, useEffect } from 'react';
import { 
  ArrowRightLeft, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Copy, 
  Check, 
  Search, 
  Download, 
  Send, 
  ShieldAlert, 
  RefreshCw,
  Eye,
  Wallet,
  Coins
} from 'lucide-react';

export interface MigrationSubmission {
  id: string;
  tezosAddress: string;
  baseAddress: string;
  amount: string;
  txHash: string;
  timestamp: string;
  status: 'PENDING' | 'VERIFIED' | 'COMPLETED';
  memo?: string;
  completedTxHash?: string;
}

const MigrationAdminView: React.FC = () => {
  const [submissions, setSubmissions] = useState<MigrationSubmission[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'PENDING' | 'VERIFIED' | 'COMPLETED'>('ALL');
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<MigrationSubmission | null>(null);
  const [transferTxHashInput, setTransferTxHashInput] = useState('');

  const BASE_CONTRACT = '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7';

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = () => {
    try {
      const saved = localStorage.getItem('wristory_migration_records');
      if (saved) {
        setSubmissions(JSON.parse(saved));
      } else {
        // Initial sample records
        const initial: MigrationSubmission[] = [
          {
            id: 'MIG-1063',
            tezosAddress: 'tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb',
            baseAddress: '0x8fB13dE5539c368297b4a29a502f6A220d9139a1',
            amount: '500,000',
            txHash: 'onh99zF...tzkt',
            timestamp: '2026-08-23 15:40',
            status: 'COMPLETED',
            completedTxHash: '0x43b2...a891'
          },
          {
            id: 'MIG-1062',
            tezosAddress: 'tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16',
            baseAddress: '0x3c08927e1f4099435b5a7695D7eA9c3144A288bc',
            amount: '1,200,000',
            txHash: 'opm21kX...tzkt',
            timestamp: '2026-08-23 14:15',
            status: 'COMPLETED',
            completedTxHash: '0x77c1...33d2'
          },
          {
            id: 'MIG-1061',
            tezosAddress: 'tz2H251Q5x9P3V2A4W7R8S9D0F1G2H3J4K5L',
            baseAddress: '0x12a95c34Fe74b09b552391039da58f12a90155da',
            amount: '150,000',
            txHash: 'ooq77yt...tzkt',
            timestamp: '2026-08-24 10:20',
            status: 'PENDING'
          }
        ];
        setSubmissions(initial);
        localStorage.setItem('wristory_migration_records', JSON.stringify(initial));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(id);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const updateStatus = (id: string, newStatus: 'PENDING' | 'VERIFIED' | 'COMPLETED', completedTx?: string) => {
    const updated = submissions.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: newStatus,
          completedTxHash: completedTx || item.completedTxHash
        };
      }
      return item;
    });
    setSubmissions(updated);
    localStorage.setItem('wristory_migration_records', JSON.stringify(updated));
  };

  const handleCompleteTransfer = (sub: MigrationSubmission) => {
    updateStatus(sub.id, 'COMPLETED', transferTxHashInput.trim() || 'Direct On-Chain Transfer');
    setSelectedSubmission(null);
    setTransferTxHashInput('');
  };

  const exportToCSV = () => {
    const headers = 'ID,Tezos Address,Base Address,Amount ($WR),Tezos TxHash,Date,Status,Base Transfer Tx\n';
    const rows = submissions.map(s => 
      `"${s.id}","${s.tezosAddress}","${s.baseAddress}","${s.amount}","${s.txHash}","${s.timestamp}","${s.status}","${s.completedTxHash || ''}"`
    ).join('\n');
    
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `WRISTORY_Migration_Requests_${new Date().toISOString().substring(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = submissions.filter(item => {
    const matchesSearch = 
      item.tezosAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.baseAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterStatus === 'ALL') return matchesSearch;
    return matchesSearch && item.status === filterStatus;
  });

  const pendingCount = submissions.filter(s => s.status === 'PENDING').length;
  const verifiedCount = submissions.filter(s => s.status === 'VERIFIED').length;
  const completedCount = submissions.filter(s => s.status === 'COMPLETED').length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 text-left">
      {/* Title & Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase flex items-center gap-3">
            <ArrowRightLeft className="text-cyan-400" size={28} />
            Migration Management Hub (마이그레이션 신청 관리)
          </h2>
          <p className="text-slate-400 text-sm font-medium mt-1">
            홀더들이 신청한 1:1 토큰 교환 요청을 검증하고 Base 체인으로 $WR을 전송·관리합니다.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={exportToCSV}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border border-slate-700 active:scale-95"
          >
            <Download size={14} /> CSV 다운로드
          </button>
          <button 
            onClick={loadSubmissions}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30 active:scale-95"
          >
            <RefreshCw size={14} /> 새로고침
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
          <p className="text-xs font-bold text-slate-400 uppercase">총 접수 건수</p>
          <p className="text-2xl font-black text-white font-mono mt-1">{submissions.length} 건</p>
        </div>
        <div className="bg-amber-950/20 border border-amber-500/30 p-5 rounded-2xl">
          <p className="text-xs font-bold text-amber-400 uppercase flex items-center gap-1.5">
            <Clock size={14} /> 전송 대기 (PENDING)
          </p>
          <p className="text-2xl font-black text-amber-400 font-mono mt-1">{pendingCount} 건</p>
        </div>
        <div className="bg-blue-950/20 border border-blue-500/30 p-5 rounded-2xl">
          <p className="text-xs font-bold text-blue-400 uppercase">검증 완료 (VERIFIED)</p>
          <p className="text-2xl font-black text-blue-400 font-mono mt-1">{verifiedCount} 건</p>
        </div>
        <div className="bg-emerald-950/20 border border-emerald-500/30 p-5 rounded-2xl">
          <p className="text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
            <CheckCircle2 size={14} /> 전송 완료 (COMPLETED)
          </p>
          <p className="text-2xl font-black text-emerald-400 font-mono mt-1">{completedCount} 건</p>
        </div>
      </div>

      {/* How to Transfer Guide Box */}
      <div className="bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-blue-500/30 p-6 rounded-3xl space-y-3">
        <h4 className="text-sm font-black text-white uppercase flex items-center gap-2">
          <Coins size={16} className="text-[#00ffcc]" />
          운영자 토큰 전송(출금) 3단계 가이드
        </h4>
        <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-300">
          <li>
            <strong>1단계 온체인 소각/스냅샷 확인:</strong> 신청된 테조스 주소(TzKT 링크 클릭)에서 $WR 보유 및 전송 내역을 대조합니다.
          </li>
          <li>
            <strong>2단계 Base 메타마스크에서 전송:</strong> Base 네트워크 지갑에서 대상 Base 주소(클릭하여 복사)로 신청된 $WR 수량을 전송합니다.
          </li>
          <li>
            <strong>3단계 상태를 [전송 완료]로 변경:</strong> 아래 목록에서 <b>[전송 완료 처리]</b> 버튼을 누르고 트랜잭션 해시를 기록합니다.
          </li>
        </ol>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
        <div className="flex items-center gap-2">
          {(['ALL', 'PENDING', 'VERIFIED', 'COMPLETED'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilterStatus(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterStatus === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-400 hover:text-white bg-slate-800/50'
              }`}
            >
              {tab === 'ALL' ? '전체' : tab}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={14} className="absolute left-3 top-3 text-slate-500" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="주소 또는 신청 ID 검색"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono"
          />
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/70 text-slate-400 uppercase tracking-wider font-bold">
                <th className="py-4 px-4">신청 ID</th>
                <th className="py-4 px-4">테조스 주소 (Source)</th>
                <th className="py-4 px-4">Base 수령 주소 (Target)</th>
                <th className="py-4 px-4">수량 ($WR)</th>
                <th className="py-4 px-4">신청 일시</th>
                <th className="py-4 px-4">상태</th>
                <th className="py-4 px-4 text-right">작업 및 전송 처리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500 font-sans">
                    검색 조건에 일치하는 마이그레이션 신청 건이 없습니다.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{item.id}</td>
                    
                    {/* Tezos Address */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-blue-300" title={item.tezosAddress}>
                          {item.tezosAddress.length > 14 
                            ? `${item.tezosAddress.substring(0, 6)}...${item.tezosAddress.substring(item.tezosAddress.length - 4)}` 
                            : item.tezosAddress}
                        </span>
                        <a 
                          href={`https://tzkt.io/${item.tezosAddress}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-cyan-400"
                          title="TzKT 온체인 조회"
                        >
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </td>

                    {/* Base Address */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#00ffcc] font-bold" title={item.baseAddress}>
                          {item.baseAddress.length > 14 
                            ? `${item.baseAddress.substring(0, 6)}...${item.baseAddress.substring(item.baseAddress.length - 4)}` 
                            : item.baseAddress}
                        </span>
                        <button
                          onClick={() => handleCopy(item.baseAddress, item.id)}
                          className="text-slate-500 hover:text-white p-1"
                          title="전체 주소 복사 (메타마스크 전송용)"
                        >
                          {copiedAddress === item.id ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                        </button>
                        <a 
                          href={`https://basescan.org/address/${item.baseAddress}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-cyan-400"
                          title="Basescan 조회"
                        >
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="py-4 px-4 font-black text-white">
                      {item.amount.includes('WR') ? item.amount : `${item.amount} WR`}
                    </td>

                    {/* Timestamp */}
                    <td className="py-4 px-4 text-slate-500 font-sans text-[11px]">{item.timestamp}</td>

                    {/* Status Badge */}
                    <td className="py-4 px-4">
                      {item.status === 'COMPLETED' && (
                        <span className="px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-lg text-[10px] font-black uppercase font-sans flex items-center gap-1 w-fit">
                          <CheckCircle2 size={11} /> 완료됨
                        </span>
                      )}
                      {item.status === 'VERIFIED' && (
                        <span className="px-2.5 py-1 bg-blue-500/20 border border-blue-500/40 text-blue-400 rounded-lg text-[10px] font-black uppercase font-sans w-fit">
                          검증완료
                        </span>
                      )}
                      {item.status === 'PENDING' && (
                        <span className="px-2.5 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-400 rounded-lg text-[10px] font-black uppercase font-sans flex items-center gap-1 w-fit">
                          <Clock size={11} /> 대기중
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2 font-sans">
                        {item.status !== 'COMPLETED' ? (
                          <>
                            <button
                              onClick={() => {
                                handleCopy(item.baseAddress, item.id);
                                setSelectedSubmission(item);
                              }}
                              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-[11px] font-bold transition-all shadow active:scale-95 flex items-center gap-1"
                            >
                              <Send size={11} /> 전송 처리
                            </button>
                            <button
                              onClick={() => updateStatus(item.id, item.status === 'VERIFIED' ? 'PENDING' : 'VERIFIED')}
                              className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[11px] font-bold transition-all"
                            >
                              {item.status === 'VERIFIED' ? '대기로 변경' : '검증 확인'}
                            </button>
                          </>
                        ) : (
                          <div className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                            <span>Tx: {item.completedTxHash ? (item.completedTxHash.length > 10 ? `${item.completedTxHash.substring(0,6)}...` : item.completedTxHash) : 'OK'}</span>
                            <button 
                              onClick={() => updateStatus(item.id, 'PENDING')}
                              className="text-slate-600 hover:text-amber-400 ml-1"
                              title="다시 대기 상태로 되돌리기"
                            >
                              <RefreshCw size={11} />
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transfer Completion Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F111A] border border-blue-500/40 rounded-3xl max-w-lg w-full p-6 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Send size={18} />
                </div>
                <div>
                  <h4 className="text-base font-black text-white">마이그레이션 전송 완료 승인</h4>
                  <span className="text-[11px] text-slate-400">신청 ID: {selectedSubmission.id}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedSubmission(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-400">전송 대상 Base 주소:</span>
                <span className="font-mono font-bold text-[#00ffcc] break-all text-right">{selectedSubmission.baseAddress}</span>
              </div>
              <div className="flex justify-between border-t border-slate-800 pt-2">
                <span className="text-slate-400">전송할 수량:</span>
                <span className="font-mono font-black text-white">{selectedSubmission.amount}</span>
              </div>
              <div className="flex justify-between border-t border-slate-800 pt-2">
                <span className="text-slate-400">원천 Tezos 주소:</span>
                <span className="font-mono text-blue-300 break-all text-right">{selectedSubmission.tezosAddress}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <label className="font-bold text-slate-300 block">Base 전송 트랜잭션 해시 (선택 입력):</label>
              <input 
                type="text"
                value={transferTxHashInput}
                onChange={(e) => setTransferTxHashInput(e.target.value)}
                placeholder="0x... (Basescan Tx Hash)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => handleCompleteTransfer(selectedSubmission)}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/30"
              >
                <CheckCircle2 size={14} /> 전송 완료 상태로 변경
              </button>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-bold transition-all"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MigrationAdminView;
