/// <reference types="node" />
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { Account } from '../../../Account';
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { SafetyDepositBox } from './SafetyDepositBox';
import { VaultKey } from '../VaultProgram';
import { Buffer } from 'buffer';
export declare class AmountArgs extends Borsh.Data<{
    instruction: number;
    amount: BN;
}> {
    static readonly SCHEMA: any;
    instruction: number;
    amount: BN;
}
export declare class NumberOfShareArgs extends Borsh.Data<{
    instruction: number;
    numberOfShares: BN;
}> {
    static readonly SCHEMA: any;
    instruction: number;
    numberOfShares: BN;
}
export declare enum VaultState {
    Inactive = 0,
    Active = 1,
    Combined = 2,
    Deactivated = 3
}
declare type Args = {
    tokenProgram: StringPublicKey;
    fractionMint: StringPublicKey;
    authority: StringPublicKey;
    fractionTreasury: StringPublicKey;
    redeemTreasury: StringPublicKey;
    allowFurtherShareCreation: boolean;
    pricingLookupAddress: StringPublicKey;
    tokenTypeCount: number;
    state: VaultState;
    lockedPricePerShare: BN;
};
export declare class VaultData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: VaultKey;
    tokenProgram: StringPublicKey;
    fractionMint: StringPublicKey;
    authority: StringPublicKey;
    fractionTreasury: StringPublicKey;
    redeemTreasury: StringPublicKey;
    allowFurtherShareCreation: boolean;
    pricingLookupAddress: StringPublicKey;
    tokenTypeCount: number;
    state: VaultState;
    lockedPricePerShare: BN;
    constructor(args: Args);
}
export declare class Vault extends Account<VaultData> {
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static getPDA(pubkey: AnyPublicKey): Promise<PublicKey>;
    static isCompatible(data: Buffer): boolean;
    getSafetyDepositBoxes(connection: Connection): Promise<SafetyDepositBox[]>;
}
export {};
