/// <reference types="node" />
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { Account } from '../../../Account';
import { VaultKey } from '../VaultProgram';
import { Buffer } from 'buffer';
declare type Args = {
    vault: StringPublicKey;
    tokenMint: StringPublicKey;
    store: StringPublicKey;
    order: number;
};
export declare class SafetyDepositBoxData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: VaultKey;
    vault: StringPublicKey;
    tokenMint: StringPublicKey;
    store: StringPublicKey;
    order: number;
    constructor(args: Args);
}
export declare class SafetyDepositBox extends Account<SafetyDepositBoxData> {
    constructor(key: AnyPublicKey, info: AccountInfo<Buffer>);
    static getPDA(vault: AnyPublicKey, mint: AnyPublicKey): Promise<PublicKey>;
    static isCompatible(data: Buffer): boolean;
}
export {};
