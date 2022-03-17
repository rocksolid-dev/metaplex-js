import { PublicKey } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
export interface InitStoreParams {
    connection: Connection;
    wallet: Wallet;
    isPublic?: boolean;
}
export interface InitStoreResponse {
    storeId: PublicKey;
    txId: string;
}
export declare const initStore: ({ connection, wallet, isPublic, }: InitStoreParams) => Promise<InitStoreResponse>;
