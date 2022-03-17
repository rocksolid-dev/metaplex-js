import { StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import BN from 'bn.js';
import { Transaction } from '../../../Transaction';
import { PriceFloor } from '../accounts/Auction';
export declare enum WinnerLimitType {
    Unlimited = 0,
    Capped = 1
}
declare type WinnerLimitArgs = {
    type: WinnerLimitType;
    usize: BN;
};
export declare class WinnerLimit extends Borsh.Data<WinnerLimitArgs> {
    static readonly SCHEMA: any;
    type: WinnerLimitType;
    usize: BN;
}
export declare type Args = {
    winners: WinnerLimit;
    endAuctionAt: BN | null;
    auctionGap: BN | null;
    tokenMint: StringPublicKey;
    authority: StringPublicKey;
    resource: StringPublicKey;
    priceFloor: PriceFloor;
    tickSize: BN | null;
    gapTickSizePercentage: number | null;
};
export declare class CreateAuctionArgs extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    instruction: number;
    winners: WinnerLimit;
    endAuctionAt: BN | null;
    auctionGap: BN | null;
    tokenMint: StringPublicKey;
    authority: StringPublicKey;
    resource: StringPublicKey;
    priceFloor: PriceFloor;
    tickSize: BN | null;
    gapTickSizePercentage: number | null;
}
declare type CreateAuctionParams = {
    auction: PublicKey;
    auctionExtended: PublicKey;
    creator: PublicKey;
    args: CreateAuctionArgs;
};
export declare class CreateAuction extends Transaction {
    constructor(options: TransactionCtorFields, params: CreateAuctionParams);
}
export {};
