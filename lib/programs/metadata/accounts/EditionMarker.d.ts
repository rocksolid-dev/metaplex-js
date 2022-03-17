/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { AnyPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { Account } from '../../../Account';
import { MetadataKey } from '../MetadataProgram';
import { Buffer } from 'buffer';
declare type Args = {
    key: MetadataKey;
    ledger: number[];
};
export declare class EditionMarkerData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: MetadataKey;
    ledger: number[];
    constructor(args: Args);
    editionTaken(edition: number): boolean;
}
export declare class EditionMarker extends Account<EditionMarkerData> {
    static readonly DATA_SIZE = 248;
    constructor(key: AnyPublicKey, info: AccountInfo<Buffer>);
    static getPDA(mint: AnyPublicKey, edition: BN): Promise<PublicKey>;
    static isCompatible(data: Buffer): boolean;
}
export {};
