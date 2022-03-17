import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Borsh } from "../../../utils";
import { Transaction } from '../../../Transaction';
import { ParamsWithStore } from "../../../types";
export declare class SetStoreArgs extends Borsh.Data<{
    public: boolean;
}> {
    static readonly SCHEMA: any;
    instruction: number;
    public: boolean;
}
declare type SetStoreParams = {
    admin: PublicKey;
    isPublic: boolean;
};
export declare class SetStore extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<SetStoreParams>);
}
export {};
