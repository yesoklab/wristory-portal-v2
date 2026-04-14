import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { NetworkType } from '@airgap/beacon-sdk';

export const WR_CONTRACT = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
export const RPC_URL = 'https://mainnet.api.tez.ie';

export const Tezos = new TezosToolkit(RPC_URL);

export const wallet = new BeaconWallet({
  name: 'WRISTORY Portal',
  preferredNetwork: NetworkType.MAINNET,
});

Tezos.setWalletProvider(wallet);

// ── WR 잔액 조회 ──────────────────────────────────────────
export const getWRBalance = async (address: string): Promise<number> => {
  try {
    const contract: any = await Tezos.contract.at(WR_CONTRACT);
    const storage: any = await contract.storage();

    let balance: any;

    // 방법 1: 단순 address key
    try {
      balance = await storage.ledger.get(address);
    } catch {
      // 방법 2: FA2 multi-asset key { owner, token_id }
      try {
        balance = await storage.ledger.get({ owner: address, token_id: 0 });
      } catch {
        console.error('Could not fetch balance with standard keys');
      }
    }

    if (!balance) return 0;

    const val =
      typeof balance.toNumber === 'function'
        ? balance.toNumber()
        : Number(balance);

    return val / 1_000_000;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return 0;
  }
};

// ── WR 전송 (수정됨) ──────────────────────────────────────
export const transferWR = async (to: string, amount: number): Promise<void> => {
  try {
    // ✅ wallet.at() → Taquito WalletContract 방식으로 수정
    const contract = await Tezos.wallet.at(WR_CONTRACT);

    const sender = await wallet.getPKH();

    // FA2 transfer 파라미터
    const transferParams = [
      {
        from_: sender,
        txs: [
          {
            to_: to,
            token_id: 0,
            amount: Math.floor(amount * 1_000_000),
          },
        ],
      },
    ];

    // ✅ contract.methods 대신 contract.methodsObject 시도 후 fallback
    let op;
    try {
      // Taquito v17+ 방식
      op = await (contract as any).methodsObject
        .transfer(transferParams)
        .send();
    } catch {
      // 구버전 fallback
      op = await (contract as any).methods
        .transfer(transferParams)
        .send();
    }

    // 1 confirmation 대기
    await op.confirmation(1);
  } catch (error) {
    console.error('Error transferring WR:', error);
    throw error;
  }
};
