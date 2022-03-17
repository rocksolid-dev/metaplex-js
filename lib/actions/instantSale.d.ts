import { PublicKey } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
interface IInstantSaleParams {
    connection: Connection;
    wallet: Wallet;
    auction: PublicKey;
    store: PublicKey;
}
interface IInstantSaleResponse {
    txId: string;
}
export declare const instantSale: ({ connection, wallet, store, auction, }: IInstantSaleParams) => Promise<IInstantSaleResponse>;
export {};
