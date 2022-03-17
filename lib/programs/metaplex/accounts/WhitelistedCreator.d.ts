/// <reference types="node" />
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { MetaplexKey } from '../MetaplexProgram';
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { Account } from '../../../Account';
import { Buffer } from 'buffer';
declare type Args = {
    address: string;
    activated: boolean;
};
export declare class WhitelistedCreatorData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: MetaplexKey;
    address: StringPublicKey;
    activated: boolean;
    twitter?: string;
    name?: string;
    image?: string;
    description?: string;
    constructor(args: Args);
}
export declare class WhitelistedCreator extends Account<WhitelistedCreatorData> {
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static getPDA(store: AnyPublicKey, creator: AnyPublicKey): Promise<PublicKey>;
}
export {};
