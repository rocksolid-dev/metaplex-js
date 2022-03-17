import { PublicKey } from '@solana/web3.js';
import { u64 } from '@solana/spl-token';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
export interface SendTokenParams {
    connection: Connection;
    wallet: Wallet;
    source: PublicKey;
    destination: PublicKey;
    mint: PublicKey;
    amount: number | u64;
}
export interface SendTokenResponse {
    txId: string;
}
export declare const sendToken: ({ connection, wallet, source, destination, mint, amount, }: SendTokenParams) => Promise<SendTokenResponse>;
