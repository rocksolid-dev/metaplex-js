import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { VaultInstructions } from '../VaultProgram';
import { Transaction } from '../../../Transaction';
export declare class InitVaultArgs extends Borsh.Data<{
    allowFurtherShareCreation: boolean;
}> {
    static readonly SCHEMA: any;
    instruction: VaultInstructions;
    allowFurtherShareCreation: boolean;
}
declare type InitVaultParams = {
    vault: PublicKey;
    vaultAuthority: PublicKey;
    fractionalMint: PublicKey;
    redeemTreasury: PublicKey;
    fractionalTreasury: PublicKey;
    pricingLookupAddress: PublicKey;
    allowFurtherShareCreation: boolean;
};
export declare class InitVault extends Transaction {
    constructor(options: TransactionCtorFields, params: InitVaultParams);
}
export {};
