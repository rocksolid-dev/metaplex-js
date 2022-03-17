import { ParamsWithStore } from "../../../types";
import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { VaultInstructions } from '../VaultProgram';
import { Transaction } from '../../../Transaction';
import { ExternalPriceAccountData } from '../accounts/ExternalPriceAccount';
export declare class UpdateExternalPriceAccountArgs extends Borsh.Data<{
    externalPriceAccount: ExternalPriceAccountData;
}> {
    static readonly SCHEMA: any;
    instruction: VaultInstructions;
    externalPriceAccount: ExternalPriceAccountData;
}
declare type UpdateExternalPriceAccountParams = {
    externalPriceAccount: PublicKey;
    externalPriceAccountData: ExternalPriceAccountData;
};
export declare class UpdateExternalPriceAccount extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<UpdateExternalPriceAccountParams>);
}
export {};
