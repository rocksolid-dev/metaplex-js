import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
interface IPlaceBidParams {
    connection: Connection;
    wallet: Wallet;
    auction: PublicKey;
    bidderPotToken?: PublicKey;
    amount: BN;
}
interface IPlaceBidResponse {
    txId: string;
    bidderPotToken: PublicKey;
    bidderMeta: PublicKey;
}
export declare const placeBid: ({ connection, wallet, amount, auction, bidderPotToken, }: IPlaceBidParams) => Promise<IPlaceBidResponse>;
export {};
