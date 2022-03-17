/// <reference types="node" />
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { Account } from '../../../Account';
import { BidRedemptionTicket } from './BidRedemptionTicket';
import { MetaplexKey } from '../MetaplexProgram';
import { Auction } from '../../auction';
import { Buffer } from 'buffer';
export declare enum AuctionManagerStatus {
    Initialized = 0,
    Validated = 1,
    Running = 2,
    Disbursing = 3,
    Finished = 4
}
export declare class AuctionManagerStateV2 extends Borsh.Data<{
    status: AuctionManagerStatus;
    safetyConfigItemsValidated: BN;
    bidsPushedToAcceptPayment: BN;
    hasParticipation: boolean;
}> {
    static readonly SCHEMA: any;
    status: AuctionManagerStatus;
    safetyConfigItemsValidated: BN;
    bidsPushedToAcceptPayment: BN;
    hasParticipation: boolean;
}
declare type Args = {
    store: StringPublicKey;
    authority: StringPublicKey;
    auction: StringPublicKey;
    vault: StringPublicKey;
    acceptPayment: StringPublicKey;
    state: AuctionManagerStateV2;
};
export declare class AuctionManagerV2Data extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: MetaplexKey;
    store: StringPublicKey;
    authority: StringPublicKey;
    auction: StringPublicKey;
    vault: StringPublicKey;
    acceptPayment: StringPublicKey;
    state: AuctionManagerStateV2;
    constructor(args: Args);
}
export declare class AuctionManager extends Account<AuctionManagerV2Data> {
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static isAuctionManagerV1(data: Buffer): boolean;
    static isAuctionManagerV2(data: Buffer): boolean;
    static getPDA(auction: AnyPublicKey): Promise<PublicKey>;
    static findMany(connection: Connection, filters?: {
        store?: AnyPublicKey;
        authority?: AnyPublicKey;
    }): Promise<AuctionManager[]>;
    getAuction(connection: Connection): Promise<Auction>;
    getBidRedemptionTickets(connection: Connection, haveWinnerIndex?: boolean): Promise<BidRedemptionTicket[]>;
}
export {};
