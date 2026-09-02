import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Wallet, ArrowRight, Globe, ExternalLink, Cpu, Sparkles, Award, Zap } from 'lucide-react';

interface Props {
  lang: 'ko' | 'en';
}

const GuideView: React.FC<Props> = ({ lang }) => {
  const faqs = [
    { 
      q: 'WR 토큰은 어디서 사용할 수 있나요? / Where can I use WR tokens?', 
      a: 'WR 토큰은 WRISTORY 생태계 내에서 NFT 민팅, 거버넌스 투표, 그리고 전용 굿즈 구매 등에 사용됩니다. / WR tokens are used for NFT minting, governance voting, and purchasing exclusive goods within the WRISTORY ecosystem.' 
    },
    { 
      q: '지갑은 어떤 것을 사용해야 하나요? / Which wallet should I use?', 
      a: '테조스 생태계의 대표적인 지갑인 Temple Wallet 또는 Kukai Wallet을 권장합니다. / We recommend Temple Wallet or Kukai Wallet, the leading wallets in the Tezos ecosystem.' 
    },
    { 
      q: 'wristory.tez 및 wristory.tez.page 분산화 웹사이트는 어떻게 연결하나요?', 
      a: 'Tezos Domains (tezos.domains) 관리자 페이지의 [분산화된 웹] 메뉴에서 웹사이트 빌드 결과물(dist)을 IPFS(Pinata, Fleek 등)에 업로드 후 발급받은 CID(ipfs://bafy...)를 등록하면, https://wristory.tez.page 주소를 통해 서버 다운 없는 영구적인 Web3 포털이 즉시 연결됩니다.' 
    },
    { 
      q: '유동성 공급 보상은 어떻게 받나요? / How do I get liquidity rewards?', 
      a: 'QuipuSwap에 유동성을 공급하면 거래 수수료의 일부를 보상으로 받게 되며, 추후 스테이킹 프로그램도 운영될 예정입니다. / By providing liquidity to QuipuSwap, you receive a portion of transaction fees as rewards.' 
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter">User Guide</h2>
        <p className="text-slate-400 text-lg font-medium">WRISTORY 포털 이용 방법과 자주 묻는 질문들을 확인하세요. / Learn how to use the WRISTORY portal and check FAQs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
              <Wallet size={28} />
            </div>
            <h3 className="text-xl font-black text-white italic uppercase">지갑 설정 / Wallet Setup</h3>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              테조스 메인넷을 이용하기 위해서는 전용 지갑이 필요합니다. 
              Temple Wallet을 브라우저 확장 프로그램으로 설치하고 WR 토큰을 추가해보세요.
            </p>
          </div>
          <a href="https://templewallet.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-500 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all pt-4">
            Temple Wallet 설치 <ExternalLink size={14} />
          </a>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-black text-white italic uppercase">wristory.tez (IPFS Web3)</h3>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              Tezos Domains의 <b className="text-purple-300">wristory.tez</b> 도메인을 IPFS 분산 네트워크에 연결하여 검열 불가능한 영구 포털 <b className="text-emerald-400">wristory.tez.page</b>를 구동합니다.
            </p>
          </div>
          <a href="https://wristory.tez.page" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all pt-4">
            Web3 게이트웨이 접속 <ExternalLink size={14} />
          </a>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-black text-white italic uppercase">보안 수칙 / Security</h3>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              개인키(Seed Phrase)는 절대 타인에게 공유하지 마세요. 
              WRISTORY 팀은 어떠한 경우에도 사용자의 개인키를 요구하지 않습니다.
            </p>
          </div>
          <span className="flex items-center gap-2 text-blue-400 font-black uppercase text-xs tracking-widest pt-4">
            검증된 스마트 컨트랙트
          </span>
        </div>
      </div>

      {/* Official Naver Blog Educational Hub */}
      <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/40 p-8 sm:p-10 rounded-[3rem] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black uppercase rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              YesOkLab 공식 네이버 블로그
            </span>
            <span className="text-xs text-slate-400 font-mono font-bold">blog.naver.com/yesoklab</span>
          </div>
          <h3 className="text-2xl font-black text-white italic uppercase">
            지갑 개설부터 디파이·제너러티브 아트 심층 칼럼까지
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            메타마스크 & 테조스 지갑 만들기 튜토리얼, 탈중앙화 디파이 분석, 프리딕션 마켓 롤러코스터, 그리고 순국선열 독립운동가 제너러티브 아트 비하인드 스토리까지 공식 블로그에서 확인하실 수 있습니다.
          </p>
        </div>
        <a 
          href="https://blog.naver.com/yesoklab" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-lg shadow-emerald-600/30 active:scale-95 whitespace-nowrap"
        >
          네이버 블로그 아티클 보기 <ExternalLink size={15} />
        </a>
      </div>

      {/* Base Ecosystem & Generative Art Platforms (Zora, Highlight, Base Creator Grant) */}
      <div className="bg-gradient-to-br from-blue-950/40 via-slate-900 to-purple-950/30 border border-blue-500/40 p-10 rounded-[3rem] space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/30">
              <Award size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-black uppercase rounded-full">Base L2 Onchain</span>
                <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-black uppercase rounded-full">Creator Grants</span>
              </div>
              <h3 className="text-2xl font-black text-white italic uppercase mt-1">Base 크리에이터 지원 & 온체인 발행 플랫폼 (Zora · Highlight)</h3>
              <p className="text-blue-300/80 text-xs font-bold uppercase tracking-widest">Base Creator Grant ($4,000) & Onchain Art Launchpad</p>
            </div>
          </div>
          <a 
            href="https://x.com/base" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shrink-0 self-start md:self-auto shadow-md shadow-blue-600/30"
          >
            Base 공식 X (@base) <ExternalLink size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Zora on Base */}
          <div className="bg-slate-950/70 p-6 rounded-2xl border border-purple-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                <h4 className="text-white font-bold text-base">Zora (Base L2)</h4>
              </div>
              <a 
                href="https://zora.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-bold underline"
              >
                zora.co 바로가기 <ExternalLink size={11} />
              </a>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Coinbase Base 체인에서 가장 활성화된 온체인 미디어/NFT 발행 프로토콜입니다. 
              가스비가 거의 들지 않으며, 메타마스크나 코인베이스 지갑으로 1초 만에 로그인하여 자유롭게 에디션을 발행하고 전 세계 컬렉터들에게 보상을 공유받을 수 있습니다.
            </p>
            <div className="bg-purple-950/30 p-3 rounded-xl border border-purple-500/20 text-[11px] text-purple-200">
              💡 <b>가입 방법</b>: 메타마스크 지갑을 Base 네트워크로 연결하고 <code className="text-white">zora.co</code>에서 [Connect Wallet] 클릭 시 즉시 프로필 생성 완료!
            </div>
          </div>

          {/* Highlight.xyz */}
          <div className="bg-slate-950/70 p-6 rounded-2xl border border-amber-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h4 className="text-white font-bold text-base">Highlight (Highlight.xyz)</h4>
              </div>
              <a 
                href="https://highlight.xyz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold underline"
              >
                highlight.xyz 바로가기 <ExternalLink size={11} />
              </a>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Base 및 이더리움 기반의 <b>고급 제너러티브 아트 & 온체인 코드 전문 런치패드</b>입니다.
              HTML5 Canvas, p5.js, Three.js 알고리즘 코드를 업로드하면 토큰 해시마다 고유하게 반응하는 오토노머스 제너러티브 아트를 민팅할 수 있습니다.
            </p>
            <div className="bg-amber-950/30 p-3 rounded-xl border border-amber-500/20 text-[11px] text-amber-200">
              💡 <b>특장점</b>: Art Blocks 형태의 순수 알고리즘 아트 민팅을 Base L2의 초저렴한 가스비로 구현할 수 있는 최적의 창작 플랫폼입니다.
            </div>
          </div>
        </div>

        {/* Base Creator Grant Application Tip */}
        <div className="bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 p-5 rounded-2xl border border-blue-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-black text-white flex items-center gap-2">
              <Zap size={16} className="text-yellow-400" /> Base Creator Grant Program (최대 $4,000 지원)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Base 생태계에서 독창적인 온체인 콘텐츠(WRISTORY 디지털 헤리티지 등)를 제작·발행하는 빌더들을 대상으로 Base 팀(@base)이 직접 최대 $4,000 그랜트를 지원합니다.
            </p>
          </div>
          <a 
            href="https://x.com/base" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-bold text-xs rounded-xl shadow transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            공식 공지 확인 <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Tezos Domain Integration Step Guide */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-purple-500/30 p-10 rounded-[3rem] space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center border border-purple-500/30">
            <Cpu size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white italic uppercase">wristory.tez 분산화 웹사이트(IPFS) 구축 가이드</h3>
            <p className="text-purple-300/80 text-xs font-bold uppercase tracking-widest">Tezos Domains + Fleek / Pinata IPFS Hosting Setup</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/5 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-300 text-xs font-black flex items-center justify-center border border-purple-500/40">1</div>
            <h4 className="text-white font-bold text-sm uppercase">IPFS 웹사이트 빌드 & 업로드</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              프로젝트 빌드 결과물(<code className="text-purple-300">dist</code>)을 Fleek.co 또는 Pinata를 통해 IPFS 네트워크에 업로드하고 CID 주소를 획득합니다.
            </p>
          </div>

          <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/5 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-300 text-xs font-black flex items-center justify-center border border-purple-500/40">2</div>
            <h4 className="text-white font-bold text-sm uppercase">Tezos Domains 설정</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              <a href="https://tezos.domains" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">tezos.domains</a> 대시보드의 <b className="text-white">wristory.tez</b> 관리 메뉴에서 <b className="text-white">[분산화된 웹]</b> 레코드에 IPFS CID를 입력합니다.
            </p>
          </div>

          <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/5 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-300 text-xs font-black flex items-center justify-center border border-purple-500/40">3</div>
            <h4 className="text-white font-bold text-sm uppercase">wristory.tez.page 즉시 연결</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              설정 완료 후 브라우저 주소창에 <b className="text-emerald-400">https://wristory.tez.page</b>를 입력하면 서버 다운 없이 전 세계 어디서나 접근 가능합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-black italic uppercase text-white flex items-center gap-3">
          <HelpCircle className="text-blue-500" /> FAQ
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl space-y-2">
              <p className="text-white font-black text-lg">Q. {faq.q}</p>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideView;
