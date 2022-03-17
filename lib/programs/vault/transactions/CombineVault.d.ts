import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { VaultInstructions } from '../VaultProgram';
import { Transaction } from '../../../Transaction';
export declare class CombineVaultArgs extends Borsh.Data {
    static readonly SCHEMA: any;
    instruction: VaultInstructions;
}
declare type CombineVaultParams = {
    vault: PublicKey;
    fractionMint: PublicKey;
    fractionTreasury: PublicKey;
    outstandingShareTokenAccount: PublicKey;
    payingTokenAccount: PublicKey;
    redeemTreasury: PublicKey;
    vaultAuthority: PublicKey;
    transferAuthority: PublicKey;
    externalPriceAccount: PublicKey;
    burnAuthority: PublicKey;
    newVaultAuthority?: PublicKey;
};
export declare class CombineVault extends Transaction {
    constructor(options: TransactionCtorFields, params: CombineVaultParams);
}
export {};
