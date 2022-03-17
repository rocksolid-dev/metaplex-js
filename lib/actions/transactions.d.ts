import { Keypair, SendOptions } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
import { Transaction } from '@metaplex-foundation/mpl-core';
export interface SendTransactionParams {
    connection: Connection;
    wallet: Wallet;
    txs: Transaction[];
    signers?: Keypair[];
    options?: SendOptions;
}
export declare const sendTransaction: ({ connection, wallet, txs, signers, options, }: SendTransactionParams) => Promise<string>;
