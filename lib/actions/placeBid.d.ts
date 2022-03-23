import BN from 'bn.js';
import { Commitment, PublicKey, TransactionSignature } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
interface IPlaceBidParams2 {
    connection: Connection;
    wallet: Wallet;
    auction: PublicKey;
    bidderPotToken?: PublicKey;
    amount: BN;
    commitment?: Commitment;
}
interface IPlaceBidResponse2 {
    txId: TransactionSignature;
    bidderPotToken: PublicKey;
    bidderMeta: PublicKey;
    payingAccount: PublicKey;
}
export declare const placeBid: ({ connection, wallet, amount, auction, bidderPotToken, }: IPlaceBidParams2) => Promise<IPlaceBidResponse2>;
export {};
