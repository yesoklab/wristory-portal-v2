# WRISTORY (wristory-portal)

[![Tezos Mainnet](https://img.shields.io/badge/Blockchain-Tezos_Mainnet-blue.svg)](https://tezos.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Symbol: WR](https://img.shields.io/badge/Token_Symbol-WR-emerald.svg)](#token-details)

> **"역사는 블록체인 위에서 영원히 살아 숨 쉽니다." / "History lives forever on the Tezos blockchain."**

**WRISTORY** is a pioneering digital heritage portal built on the Tezos mainnet. It bridges historical archives—specifically the Korean independence struggle, national heroes, and cultural legacies—with modern web3 technologies, generative wave art, and practical Wear OS smartwatch ecosystem benefits.

---

## 🇰🇷 한국어 소개 (Korean)

**WRISTORY**는 테조스(Tezos) 블록체인을 기반으로 역사의 분기점과 순국선열의 숭고한 정신을 영구히 기록하고 보존하는 **디지털 헤리티지 아카이브 포털**입니다. 

단순한 디지털 컬렉션을 넘어 블록체인상의 분산 원장 기술을 활용하여 잊히기 쉬운 역사를 보존하고, 실 생활과 밀접한 Wear OS(갤럭시 워치 등) 스마트워치 페이스 유틸리티 및 오프라인-온라인 유기적 토크노믹스 모델을 구축합니다.

### 주요 기능 및 특징
1. **역사적 제너레이티브 아트 아카이빙**: 이순신 장군의 결의, 종로의 독립 불꽃, 백범 김구 등 역사적 발자취를 현대적이고 미적인 파형 예술(Generative Wave Art)로 주조하여 보존합니다.
2. **FA2 기반 토크노믹스(WR)**: 공식 유틸리티 토큰인 `$WR`을 기반으로 홀더 커뮤니티, 거래소 상장 및 유동성 연동을 지원합니다.
3. **Holders 전용 스마트워치 유틸리티**: 테조스 온체인 소유권 검증 모델을 기반으로, 갤럭시 워치 및 안드로이드 Wear OS 전용 프리미엄 테마 스마트워치 페이스 무료 다운로드 혜택을 제공합니다.
4. **DeFi 라이브 생태계**: QuipuSwap CPMM 유동성 풀 연동을 기반으로 실시간 가격 데이터와 온체인 분산을 보장합니다.

---

## 🇺🇸 Project Overview (English)

**WRISTORY** is a decentralized digital heritage archive and token ecosystem operating on the Tezos blockchain. 

By utilizing FA2 smart contracts, WRISTORY eternalizes historical moments of patriotism, Eastern Peace philosophy, and historical paradigm-shifting events into distinct generative art and non-fungible assets, while providing everyday utility such as premium Smart Watchface designs for token-holders.

### Key Highlights
- **Generative History Preservation**: Transforming raw historical sentiment into high-fidelity web3 wave patterns and celestial generative collections.
- **FA2 Cryptomind Tokenomics ($WR)**: Active development of native asset systems with direct verification paths for and with global Tezos communities.
- **Holder-Exclusive Wear OS Utility**: Decentralized access control via real-time Tezos mainnet wallet verification, offering premium Galaxy Watch & Android watchfaces.
- **DeFi Integration**: Liquid pools deployed on QuipuSwap, encouraging deep-stake liquidity and trustless price discovery.

---

## 🪙 Token & Contract Details

| Detail | Value |
| :--- | :--- |
| **Token Name** | Wristory |
| **Token Symbol** | **WR** |
| **Blockchain Platform** | Tezos Mainnet |
| **Token Standard** | FA2 (Fungible Asset 2.0) |
| **Contract Address (FA2)** | [`KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu`](https://tzkt.io/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu) |
| **Total Supply** | `51,169,148 WR` |
| **Decimals** | 6 |
| **QuipuSwap LP Pool (wXTZ / WR)** | [Pool Link](https://quipuswap.com/liquidity/cpmm/add/KT1VYsVfmobT7rsMVivvZ4J8i3bPiqz12NaH-KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu_0) |

- **Official Block Explorer (TzKT)**: https://tzkt.io/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu
- **Contract Code & Verification (Better Call Dev)**: https://better-call.dev/mainnet/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu

---

## 🎨 Featured Collections (On-Chain)

1. **WRISTORY: PATRIOTIC LEGACY** (objkt.com)
   - Presurrecting the heroic vows, patriotic devotion, and sacred history on Tezos.
   - [Explore Collection](https://objkt.com/collections/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR)

2. **The Flame of Jongno (종로의 불꽃)** (fxhash)
   - Generative collection visualizing the inextinguishable flame of historic independence struggle in Jongno.
   - [Explore Collection](https://www.fxhash.xyz/project/the-flame-of-jongno)

3. **WRISTORY: The Admiral's Resolve (장군의 결의)**
   - Highlighting Admiral Yi Sun-sin's celestial path and resolve under the rule of "victory or death" (필사즉생 필생즉사).
   - [Explore Collection](https://objkt.com/tokens/KT1BaZFPGsSfqe1wiz6MUKHKzWdZ3A7emLXR/23)

---

## 💻 Tech Stack & Client Setup

This portal is a fully modular React application, styled using Tailwind CSS, and integrated with official Tezos web3 SDK libraries like Taquito and Beacon.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Local Run

1. Clone or download the repository contents.
2. Install all standard package dependencies:
   ```bash
   npm install
   ```
3. Run the fast local development server:
   ```bash
   npm run dev
   ```
4. Access the portal in your browser:
   ```
   http://localhost:3000
   ```

### Production Build & Compilation

To compile and optimize the client application assets for production environments (Vite bundle):

```bash
npm run build
```

The optimized resources are compiled inside the `/dist` directory, ready for seamless deployment to decentralized static hosting (IPFS, Vercel, Netlify, or standard Cloud CDN).

---

## 📞 Official Contacts & Communications

- **Development Lab**: YesOkLab (https://github.com/yesoklab)
- **Ecosystem Registry**: Tezos Korea / Global FA2 Registry
- **Ecosystem Partner**: Temple Wallet & Kukai Wallet Logo integrated

---

*This repository contains the interface codes for the official WRISTORY Digital Heritage Portal. Licensed under the MIT License.*
