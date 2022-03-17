import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { VaultInstructions } from '../VaultProgram';
import { Transaction } from '../../../Transaction';
export declare class SetVaultAuthorityArgs extends Borsh.Data {
    static readonly SCHEMA: any;
    instruction: VaultInstructions;
}
declare type SetVaultAuthorityParams = {
    vault: PublicKey;
    currentAuthority: PublicKey;
    newAuthority: PublicKey;
};
export declare class SetVaultAuthority extends Transaction {
    constructor(options: TransactionCtorFields, params: SetVaultAuthorityParams);
}
export {};
