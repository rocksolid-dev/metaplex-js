/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { AnyPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { Account } from '../../../Account';
import { MetaplexKey } from '../MetaplexProgram';
import { Buffer } from 'buffer';
declare type Args = {
    metadata: string;
    supplySnapshot: BN;
    expectedRedemptions: BN;
    redemptions: BN;
};
export declare class PrizeTrackingTicketData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: MetaplexKey;
    metadata: string;
    supplySnapshot: BN;
    expectedRedemptions: BN;
    redemptions: BN;
    constructor(args: Args);
}
export declare class PrizeTrackingTicket extends Account<PrizeTrackingTicketData> {
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static getPDA(auctionManager: AnyPublicKey, mint: AnyPublicKey): Promise<PublicKey>;
}
export {};
