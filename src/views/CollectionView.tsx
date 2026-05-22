import React from 'react';
import { ExternalLink, Tag, Users, Pizza, ArrowUpRight, ShieldCheck } from 'lucide-react';

const collections = [
  { 
    id: 'patriotic-legacy', 
    name: 'WRISTORY: PATRIOTIC LEGACY', 
    price: 'New Collection', 
    count: 21, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreie4kz6obq6hjvwtrn5hi33yptemfch6kkjmwj5h22b7imipxjxd6u', 
    url: 'https://objkt.com/collections/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR',
    isNew: true,
    desc: '테조스 블록체인에서 보존되는 애국의 정신. Wristory의 새로운 메인넷 컬렉션입니다. / Preserving the spirit of patriotism on Tezos blockchain.'
  },
  { 
    id: 'the-flame-of-jongno', 
    name: 'The Flame of Jongno (종로의 불꽃)', 
    price: 'NEW FXHASH', 
    count: 1000, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeicey3fp3obxmfudp2lua7eftk4zxjxlfsshgjrcbvlqb6igj6xkxi', 
    url: 'https://www.fxhash.xyz/project/the-flame-of-jongno',
    isNew: true,
    desc: '종로의 독립 투쟁과 꺼지지 않는 애국의 불꽃을 제너레이티브 아트로 시각화한 컬렉션입니다. / Generative collection visualizing the inextinguishable flame of historic independence struggle in Jongno.'
  },
  { 
    id: 'wristory-ascending-spirit', 
    name: 'Wristory: Ascending Spirit (비상하는 정신)', 
    price: 'NEW FXHASH', 
    count: 1000, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiaiqm3s5dx557oisqq6h64bbthqjzrv6egoocqvravsxvwtv2sbzq', 
    url: 'https://www.fxhash.xyz/project/wristory:-ascending-spirit',
    isNew: true,
    desc: '애국 투사들의 숭고한 정신의 하늘을 향한 비상을 우아한 파형 예술로 기리는 제너레이티브 작품입니다. / Celebrating the sublime movement and ascent of historic spirits towards high heaven in beautiful wave structures.'
  },
  { 
    id: 'heritage-sync', 
    name: 'HERITAGE SYNC : Where Tradition Meets the Future', 
    price: 'New Collection', 
    count: 21, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibjx5wokivdjsvwli6gbzju7fdkzatdw3kylkqw2jtr6qp5ylufvu', 
    url: 'https://objkt.com/collections/KT1LJirhQzqz37baswyqYdes7UnEb2kJw4SU',
    isNew: true,
    desc: '전통과 미래가 만나는 지점. Wristory가 선보이는 새로운 메인넷 컬렉션입니다. / A new mainnet collection from Wristory where tradition meets the future.'
  },
  { 
    id: 'fork-project', 
    name: 'FORK PROJECT', 
    price: 'New Collection', 
    count: 1, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeigcx2qgsd7p3f7ijjoksgtvjrw3ed74da5x3a4ndqxsuw5hppb4yy', 
    url: 'https://objkt.com/collections/KT1XMCJGLo9vnHRAf5LQdw9z3BF9yGVfffnm',
    isNew: true,
    desc: 'The Ghost — Bitcoin Chronicles III. 역사의 분기점을 시각화한 디지털 유산입니다.'
  },
  { 
    id: 'genesis-chronicles', 
    name: 'Blockchain Genesis Chronicles', 
    price: 'Series III', 
    count: 1, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeiesb5nbzjpyccgjhba44pkyhjtwlgbfybmt3q3oh3mjnoemmd5u6y', 
    url: 'https://objkt.com/collections/KT1A687BCmwpCLmzFWMRbKKwQGoqZzrgx97y',
    isNew: true,
    desc: 'The Ghost — Bitcoin Chronicles\' III. 블록체인 제네시스의 전설을 테조스 예술로 보존합니다.'
  },
  { 
    id: 'wristory-universe', 
    name: 'WRISTORY UNIVERSE', 
    price: 'New Collection', 
    count: 100, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiega3qk3oh3r6u6uwqr2f4uvkynpdpmsrmcwrdlld3oqjmawk62ya', 
    url: 'https://objkt.com/collections/KT1Kd5mM8CKMxR7rotfK5QNP8V33A5zj6yQk',
    isNew: true,
    isMerged: true,
    desc: '대한민국 제21대 이재명 대통령의 디지털 유산 컬렉션. YesOkLab/WRISTORY가 테조스 블록체인에서 선보이는 역사적 순간들을 NFT로 보존합니다.'
  },
  { 
    id: 'pizza-100', 
    name: 'Bitcoin Pizza Genesis: 100', 
    price: '100 EDITIONS', 
    count: 100, 
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop', 
    url: 'https://objkt.com/collections/KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq',
    isNew: true,
    desc: 'Commemorating the legendary Bitcoin Pizza transaction of May 22, 2010. Dynamic generative art powered by real Block #57043 data.'
  },
  { 
    id: 'couple-legacy', 
    name: '이종희 · 송다녀 부부 — 동지이자 연인', 
    price: 'Special Edition', 
    count: 50, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeihv7v7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z7z', 
    url: 'https://objkt.com/tokens/KT1A77WVak4yMFoHDNzpAf8PGA7YLmh5wMJ8/50',
    isNew: true,
    desc: '독립투사 부부의 디지털 유산. 동지이자 연인으로서 함께 걸어온 고귀한 희생과 사랑의 기록.'
  },
  { 
    id: 'president-calligraphy', 
    name: '이재명 대통령 캘리그래피 — 집과 시간의 언어', 
    price: 'Featured', 
    count: 1, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiega3qk3oh3r6u6uwqr2f4uvkynpdpmsrmcwrdlld3oqjmawk62ya',
    url: 'https://objkt.com/tokens/KT1A77WVak4yMFoHDNzpAf8PGA7YLmh5wMJ8/52?ref=tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16',
    isNew: true,
    desc: '최승균 작가님이 이재명 대통령의 어록 "집은 사는 곳이지 사는 것이 아닙니다."를 캘리그래피로 승화시킨 작품입니다.'
  },
  { 
    id: '1', 
    name: '독립운동가: 김구', 
    price: '45 XTZ', 
    count: 100, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreie4kz6obq6hjvwtrn5hi33yptemfch6kkjmwj5h22b7imipxjxd6u',
    url: 'https://objkt.com/collections/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu'
  },
  { 
    id: '2', 
    name: '독립운동가: 안중근', 
    price: '50 XTZ', 
    count: 120, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreic4bp2ylmmamglszxxnnbipbqlz535qfrhtlm5sgc72lpssvsi3x4',
    url: 'https://objkt.com/collections/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu'
  },
  { 
    id: '3', 
    name: '독립운동가: 유관순', 
    price: '30 XTZ', 
    count: 80, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreiejrnn2dpacgyyexuil5obifqgnfapdgvctsxwm7ne2ny7d6ifh6i',
    url: 'https://objkt.com/collections/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu'
  },
  { 
    id: '4', 
    name: '독립운동가: 윤동주', 
    price: '75 XTZ', 
    count: 50, 
    image: 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafkreibztbschh6cqj465duaajxf7r7n736jgdkuprw24des7nk57wyc3a',
    url: 'https://objkt.com/collections/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu'
  },
];

const CollectionView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Collections Hub</h2>
          <p className="text-slate-400 font-medium">테조스 메인넷에서 증명되는 Wristory의 디지털 자산 포트폴리오입니다. / Wristory's digital asset portfolio on Tezos Mainnet.</p>
        </div>
        <a 
          href="https://objkt.com/collections/KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-amber-500 hover:text-amber-400 font-black text-xs uppercase tracking-widest underline underline-offset-8 decoration-2 transition-all"
        >
          Pizza Genesis: 100 - LEGENDARY 바로가기 / Go to Pizza Genesis <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col) => (
          <div key={col.id} className={`bg-slate-900/50 border ${col.isNew ? 'border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.15)]' : 'border-slate-800'} rounded-[2.5rem] overflow-hidden group hover:border-blue-500/50 transition-all shadow-2xl flex flex-col`}>
            <div className="relative aspect-[4/5] overflow-hidden shrink-0">
              <img 
                src={col.image} 
                alt={col.name} 
                className={`w-full h-full object-cover ${col.isNew ? '' : 'grayscale'} group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105`} 
              />
              <div className={`absolute top-6 left-6 ${col.isNew ? 'bg-amber-500' : 'bg-blue-600'} px-4 py-1.5 rounded-full border border-white/10 shadow-xl flex items-center gap-2 z-10`}>
                {col.isNew && <Pizza size={12} className="text-white animate-bounce" />}
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  {col.isNew ? 'New Legend' : 'Wristory FA2'}
                </span>
              </div>
              {col.isMerged && (
                <div className="absolute top-6 right-6 bg-emerald-500 px-4 py-1.5 rounded-full border border-white/10 shadow-xl flex items-center gap-2 z-10">
                  <ShieldCheck size={12} className="text-white animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Merged</span>
                </div>
              )}
            </div>
            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-black italic tracking-tighter text-white group-hover:text-blue-400 transition-colors uppercase leading-[1.1]">{col.name}</h3>
                {col.desc && <p className="text-slate-500 text-xs font-medium leading-relaxed">{col.desc}</p>}
                <div className="grid grid-cols-2 gap-4 p-4 bg-slate-950/50 rounded-2xl border border-white/5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                      <Tag size={12} /> {col.isNew ? 'Listing' : 'Floor'}
                    </div>
                    <p className={`font-mono text-lg font-bold ${col.isNew ? 'text-amber-400' : 'text-white'}`}>{col.price}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-black tracking-widest">
                      <Users size={12} /> Items
                    </div>
                    <p className="font-mono text-lg font-bold text-white">{col.count}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href={col.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-4 text-center ${col.isNew ? 'bg-amber-600 hover:bg-amber-500' : 'bg-slate-800 hover:bg-blue-600'} text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-black/20`}
              >
                컬렉션 탐색 / Explore Collection <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionView;
