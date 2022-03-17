import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Transaction } from '../../../Transaction';
import { StringPublicKey } from "../../../types";
import BN from 'bn.js';
export declare class PlaceBidArgs extends Borsh.Data<{
    resource: StringPublicKey;
    amount: BN;
}> {
    static readonly SCHEMA: any;
    instruction: number;
    resource: StringPublicKey;
    amount: BN;
}
declare type PlaceBidParams = {
    auction: PublicKey;
    auctionExtended: PublicKey;
    bidderPot: PublicKey;
    bidderMeta: PublicKey;
    bidder: PublicKey;
    bidderToken: PublicKey;
    bidderPotToken: PublicKey;
    tokenMint: PublicKey;
    transferAuthority: PublicKey;
    resource: PublicKey;
    amount: BN;
};
export declare class PlaceBid extends Transaction {
    constructor(options: TransactionCtorFields, params: PlaceBidParams);
}
export {};
