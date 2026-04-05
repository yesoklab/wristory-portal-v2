import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Info, Zap, ShieldCheck, History } from 'lucide-react';

const data = [
  { name: 'Community', value: 15314664, color: '#3b82f6', desc: '30% - Ecosystem Rewards' },
  { name: 'Liquidity Pool', value: 10209776, color: '#10b981', desc: '20% - DEX Liquidity' },
  { name: 'Treasury', value: 10209776, color: '#f59e0b', desc: '20% - Project Reserve' },
  { name: 'Development', value: 7657332, color: '#8b5cf6', desc: '15% - Core Dev & Ops' },
  { name: 'Airdrop', value: 5104888, color: '#ec4899', desc: '10% - Early Adopters' },
  { name: 'Investors', value: 2552445, color: '#64748b', desc: '5% - Strategic Partners' },
];

const TokenomicsView: React.FC = () => {
  const totalSupply = "51,048,881 WR";

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Tokenomics</h2>
          <p className="text-slate-400 font-medium">WR 토큰의 투명한 분배 계획 및 공급량 정보입니다.</p>
        </div>
        <div className="bg-slate-900 px-8 py-4 rounded-3xl border border-blue-500/30 shadow-xl">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Total Supply</p>
          <p className="text-2xl font-black text-white italic">{totalSupply}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Distribution Chart */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-[3.5rem] p-10 space-y-8 shadow-2xl">
          <h3 className="text-xl font-black italic uppercase text-white flex items-center gap-3">
            <Info className="text-blue-500" size={20} /> Distribution Ratio
          </h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0F111A', border: '1px solid #1e293b', borderRadius: '16px' }}
                  itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend & Details */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-[3.5rem] p-10 space-y-6 shadow-2xl">
          <h3 className="text-xl font-black italic uppercase text-white">Allocation Details</h3>
          <div className="space-y-4">
            {data.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-slate-950/50 border border-white/5 rounded-2xl group hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <div>
                    <p className="text-sm font-black text-white uppercase tracking-tight">{item.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold">{item.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-white font-mono">{item.value.toLocaleString()} WR</p>
                  <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Locked</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsView;
