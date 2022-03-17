import { StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Transaction } from '../../../Transaction';
export declare class CancelBidArgs extends Borsh.Data<{
    resource: StringPublicKey;
}> {
    static readonly SCHEMA: any;
    instruction: number;
    resource: StringPublicKey;
}
declare type CancelBidParams = {
    auction: PublicKey;
    auctionExtended: PublicKey;
    bidderPot: PublicKey;
    bidderMeta: PublicKey;
    bidder: PublicKey;
    bidderToken: PublicKey;
    bidderPotToken: PublicKey;
    tokenMint: PublicKey;
    resource: PublicKey;
};
export declare class CancelBid extends Transaction {
    constructor(options: TransactionCtorFields, params: CancelBidParams);
}
export {};
