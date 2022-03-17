/// <reference types="node" />
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { AccountInfo } from '@solana/web3.js';
import BN from 'bn.js';
import { Buffer } from 'buffer';
import { Account } from '../../../Account';
import { VaultKey } from '../VaultProgram';
declare type Args = {
    pricePerShare: BN;
    priceMint: StringPublicKey;
    allowedToCombine: boolean;
};
export declare class ExternalPriceAccountData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: VaultKey;
    pricePerShare: BN;
    priceMint: StringPublicKey;
    allowedToCombine: boolean;
    constructor(args: Args);
}
export declare class ExternalPriceAccount extends Account<ExternalPriceAccountData> {
    constructor(key: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
}
export {};
