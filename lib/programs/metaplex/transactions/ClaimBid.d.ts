import { ParamsWithStore } from "../../../types";
import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Transaction } from '../../../Transaction';
export declare class ClaimBidArgs extends Borsh.Data {
    static readonly SCHEMA: any;
    instruction: number;
}
declare type ClaimBidParams = {
    vault: PublicKey;
    auction: PublicKey;
    auctionExtended: PublicKey;
    auctionManager: PublicKey;
    acceptPayment: PublicKey;
    bidder: PublicKey;
    bidderPot: PublicKey;
    bidderPotToken: PublicKey;
    tokenMint: PublicKey;
};
export declare class ClaimBid extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<ClaimBidParams>);
}
export {};
