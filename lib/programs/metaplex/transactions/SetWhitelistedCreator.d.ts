import { ParamsWithStore } from "../../../types";
import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Transaction } from '../../../Transaction';
export declare class SetWhitelistedCreatorArgs extends Borsh.Data<{
    activated: boolean;
}> {
    static readonly SCHEMA: any;
    instruction: number;
    activated: boolean;
}
declare type SetWhitelistedCreatorParams = {
    admin: PublicKey;
    whitelistedCreatorPDA: PublicKey;
    creator: PublicKey;
    activated: boolean;
};
export declare class SetWhitelistedCreator extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<SetWhitelistedCreatorParams>);
}
export {};
