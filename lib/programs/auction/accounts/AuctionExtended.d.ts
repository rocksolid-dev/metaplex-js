/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { AnyPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { Account } from '../../../Account';
import { Buffer } from 'buffer';
declare type Args = {
    totalUncancelledBids: BN;
    tickSize: BN | null;
    gapTickSizePercentage: number | null;
    instantSalePrice: BN | null;
    name: number[] | null;
};
export declare class AuctionDataExtended extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    totalUncancelledBids: BN;
    tickSize: BN | null;
    gapTickSizePercentage: number | null;
    instantSalePrice: BN | null;
    name: number[] | null;
}
export declare class AuctionExtended extends Account<AuctionDataExtended> {
    static readonly DATA_SIZE: number;
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static getPDA(vault: AnyPublicKey): Promise<PublicKey>;
}
export {};
