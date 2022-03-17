/// <reference types="node" />
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { Buffer } from 'buffer';
import { Account } from '../../../Account';
import { BidderMetadata } from './BidderMetadata';
import { BidderPot } from './BidderPot';
export declare enum AuctionState {
    Created = 0,
    Started = 1,
    Ended = 2
}
export declare enum BidStateType {
    EnglishAuction = 0,
    OpenEdition = 1
}
export declare enum PriceFloorType {
    None = 0,
    Minimum = 1,
    BlindedPrice = 2
}
declare type BidArgs = {
    key: StringPublicKey;
    amount: BN;
};
export declare class Bid extends Borsh.Data<BidArgs> {
    static readonly SCHEMA: any;
    key: StringPublicKey;
    amount: BN;
}
declare type BidStateArgs = {
    type: BidStateType;
    bids: Bid[];
    max: BN;
};
export declare class BidState extends Borsh.Data<BidStateArgs> {
    static readonly SCHEMA: any;
    type: BidStateType;
    bids: Bid[];
    max: BN;
    getWinnerAt(winnerIndex: number): StringPublicKey | null;
    getAmountAt(winnerIndex: number): BN | null;
    getWinnerIndex(bidder: StringPublicKey): number | null;
}
declare type PriceFloorArgs = {
    type: PriceFloorType;
    hash?: Uint8Array;
    minPrice?: BN;
};
export declare class PriceFloor extends Borsh.Data {
    static readonly SCHEMA: any;
    type: PriceFloorType;
    hash: Uint8Array;
    minPrice?: BN;
    constructor(args: PriceFloorArgs);
}
declare type Args = {
    authority: StringPublicKey;
    tokenMint: StringPublicKey;
    lastBid: BN | null;
    endedAt: BN | null;
    endAuctionAt: BN | null;
    auctionGap: BN | null;
    priceFloor: PriceFloor;
    state: AuctionState;
    bidState: BidState;
    totalUncancelledBids: BN;
};
export declare class AuctionData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    authority: StringPublicKey;
    tokenMint: StringPublicKey;
    lastBid: BN | null;
    endedAt: BN | null;
    endAuctionAt: BN | null;
    auctionGap: BN | null;
    priceFloor: PriceFloor;
    state: AuctionState;
    bidState: BidState;
    bidRedemptionKey?: StringPublicKey;
}
export declare class Auction extends Account<AuctionData> {
    static readonly EXTENDED_DATA_SIZE: number;
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static getPDA(vault: AnyPublicKey): Promise<PublicKey>;
    static findMany(connection: Connection, filters?: {
        authority?: AnyPublicKey;
    }): Promise<Auction[]>;
    getBidderPots(connection: Connection): Promise<BidderPot[]>;
    getBidderMetadata(connection: Connection): Promise<BidderMetadata[]>;
}
export {};
