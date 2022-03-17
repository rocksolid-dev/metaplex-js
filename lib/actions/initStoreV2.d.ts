import { PublicKey } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
export interface InitStoreV2Params {
    connection: Connection;
    wallet: Wallet;
    isPublic?: boolean;
    settingsUri?: string | null;
}
export interface InitStoreV2Response {
    storeId: PublicKey;
    configId: PublicKey;
    txId: string;
}
export declare const initStoreV2: ({ connection, wallet, settingsUri, isPublic, }: InitStoreV2Params) => Promise<InitStoreV2Response>;
