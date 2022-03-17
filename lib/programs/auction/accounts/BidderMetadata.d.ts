/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { Account } from '../../../Account';
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { Buffer } from 'buffer';
declare type Args = {
    bidderPubkey: StringPublicKey;
    auctionPubkey: StringPublicKey;
    lastBid: BN;
    lastBidTimestamp: BN;
    cancelled: boolean;
};
export declare class BidderMetadataData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    bidderPubkey: StringPublicKey;
    auctionPubkey: StringPublicKey;
    lastBid: BN;
    lastBidTimestamp: BN;
    cancelled: boolean;
}
export declare class BidderMetadata extends Account<BidderMetadataData> {
    static readonly DATA_SIZE: number;
    constructor(key: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static getPDA(auction: AnyPublicKey, bidder: AnyPublicKey): Promise<PublicKey>;
}
export {};
