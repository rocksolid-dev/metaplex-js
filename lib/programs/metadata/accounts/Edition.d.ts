/// <reference types="node" />
import { Borsh } from "../../../utils";
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { MetadataKey } from '../MetadataProgram';
import { AccountInfo, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { Account } from '../../../Account';
import { Buffer } from 'buffer';
declare type Args = {
    key: MetadataKey;
    parent: StringPublicKey;
    edition: BN;
};
export declare class EditionData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: MetadataKey;
    parent: StringPublicKey;
    edition: BN;
    constructor(args: Args);
}
export declare class Edition extends Account<EditionData> {
    static readonly EDITION_PREFIX = "edition";
    constructor(key: AnyPublicKey, info: AccountInfo<Buffer>);
    static getPDA(mint: AnyPublicKey): Promise<PublicKey>;
    static isCompatible(data: Buffer): boolean;
}
export {};
