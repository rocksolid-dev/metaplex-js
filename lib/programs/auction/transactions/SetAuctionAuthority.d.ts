import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Transaction } from '../../../Transaction';
export declare class SetAuctionAuthorityArgs extends Borsh.Data {
    static readonly SCHEMA: any;
    instruction: number;
}
declare type SetAuctionAuthorityParams = {
    auction: PublicKey;
    currentAuthority: PublicKey;
    newAuthority: PublicKey;
};
export declare class SetAuctionAuthority extends Transaction {
    constructor(options: TransactionCtorFields, params: SetAuctionAuthorityParams);
}
export {};
