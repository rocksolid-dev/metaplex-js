import { StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import BN from 'bn.js';
import { Transaction } from '../../../Transaction';
import { PriceFloor } from '../accounts/Auction';
import { Args as CreateAuctionArgsType, WinnerLimit } from './CreateAuction';
declare type Args = CreateAuctionArgsType & {
    instantSalePrice: BN | null;
    name: number[] | null;
};
export declare class CreateAuctionV2Args extends Borsh.Data<Args> {
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
    instantSalePrice: BN | null;
    name: number[] | null;
}
declare type CreateAuctionV2Params = {
    auction: PublicKey;
    auctionExtended: PublicKey;
    creator: PublicKey;
    args: CreateAuctionV2Args;
};
export declare class CreateAuctionV2 extends Transaction {
    constructor(options: TransactionCtorFields, params: CreateAuctionV2Params);
}
export {};
