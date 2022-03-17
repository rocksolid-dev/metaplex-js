import BN from 'bn.js';
import { Commitment, PublicKey, TransactionSignature } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
export interface PlaceBidParams {
    connection: Connection;
    wallet: Wallet;
    auction: PublicKey;
    bidderPotToken?: PublicKey;
    amount: BN;
    commitment?: Commitment;
}
export interface PlaceBidResponse {
    txId: TransactionSignature;
    bidderPotToken: PublicKey;
    bidderMeta: PublicKey;
}
export declare const placeBid: ({ connection, wallet, amount, auction, bidderPotToken, }: PlaceBidParams) => Promise<PlaceBidResponse>;
