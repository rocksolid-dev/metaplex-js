/// <reference types="node" />
import { Borsh } from "../../../utils";
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { Account } from '../../../Account';
import { Buffer } from 'buffer';
declare type Args = {
    bidderPot: StringPublicKey;
    bidderAct: StringPublicKey;
    auctionAct: StringPublicKey;
    emptied: boolean;
};
export declare class BidderPotData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    bidderPot: StringPublicKey;
    bidderAct: StringPublicKey;
    auctionAct: StringPublicKey;
    emptied: boolean;
}
export declare class BidderPot extends Account<BidderPotData> {
    static readonly DATA_SIZE: number;
    constructor(key: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static getPDA(auction: AnyPublicKey, bidder: AnyPublicKey): Promise<PublicKey>;
}
export {};
