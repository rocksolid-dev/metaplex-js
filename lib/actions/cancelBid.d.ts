import { PublicKey } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
import { TransactionsBatch } from '../utils/transactions-batch';
export interface CancelBidParams {
    connection: Connection;
    wallet: Wallet;
    auction: PublicKey;
    bidderPotToken: PublicKey;
    destAccount?: PublicKey;
}
export interface CancelBidResponse {
    txId: string;
}
export declare const cancelBid: ({ connection, wallet, auction, bidderPotToken, destAccount, }: CancelBidParams) => Promise<CancelBidResponse>;
interface CancelBidTransactionsParams {
    destAccount?: PublicKey;
    bidder: PublicKey;
    accountRentExempt: number;
    bidderPot: PublicKey;
    bidderPotToken: PublicKey;
    bidderMeta: PublicKey;
    auction: PublicKey;
    auctionExtended: PublicKey;
    auctionTokenMint: PublicKey;
    vault: PublicKey;
}
export declare const getCancelBidTransactions: ({ destAccount, bidder, accountRentExempt, bidderPot, bidderPotToken, bidderMeta, auction, auctionExtended, auctionTokenMint, vault, }: CancelBidTransactionsParams) => Promise<TransactionsBatch>;
export {};
