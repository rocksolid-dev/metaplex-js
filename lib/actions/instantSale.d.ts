import { PublicKey, TransactionSignature } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
export interface InstantSaleParams {
    connection: Connection;
    wallet: Wallet;
    auction: PublicKey;
    store: PublicKey;
    bidderPotKey?: PublicKey;
}
export interface InstantSaleResponse {
    txIds: TransactionSignature[];
}
export declare const instantSale: ({ connection, wallet, store, auction, bidderPotKey, }: InstantSaleParams) => Promise<InstantSaleResponse>;
