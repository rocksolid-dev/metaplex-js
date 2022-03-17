import { PublicKey } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
import { u64 } from '@solana/spl-token';
export interface BurnTokenParams {
    connection: Connection;
    wallet: Wallet;
    account: PublicKey;
    mint: PublicKey;
    amount: number | u64;
    owner?: PublicKey;
    close?: boolean;
}
export interface BurnTokenResponse {
    txId: string;
}
export declare const burnToken: ({ connection, wallet, account, mint, amount, owner, close, }: BurnTokenParams) => Promise<BurnTokenResponse>;
