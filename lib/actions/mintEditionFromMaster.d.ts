import { Connection, PublicKey } from '@solana/web3.js';
import { Wallet } from '../wallet';
export interface MintEditionFromMasterParams {
    connection: Connection;
    wallet: Wallet;
    masterEditionMint: PublicKey;
    updateAuthority?: PublicKey;
}
export interface MintEditionFromMasterResponse {
    txId: string;
    mint: PublicKey;
    metadata: PublicKey;
    edition: PublicKey;
}
export declare const mintEditionFromMaster: ({ connection, wallet, masterEditionMint, updateAuthority }?: MintEditionFromMasterParams) => Promise<MintEditionFromMasterResponse>;
