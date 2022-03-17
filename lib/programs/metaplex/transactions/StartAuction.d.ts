import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Transaction } from '../../../Transaction';
import { ParamsWithStore } from "../../../types";
export declare class StartAuctionArgs extends Borsh.Data {
    static readonly SCHEMA: any;
    instruction: number;
}
declare type StartAuctionParams = {
    auction: PublicKey;
    auctionManager: PublicKey;
    auctionManagerAuthority: PublicKey;
};
export declare class StartAuction extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<StartAuctionParams>);
}
export {};
