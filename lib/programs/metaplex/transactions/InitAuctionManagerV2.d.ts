import { ParamsWithStore } from "../../../types";
import { Borsh, TupleNumericType } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import BN from 'bn.js';
import { Transaction } from '../../../Transaction';
export declare class InitAuctionManagerV2Args extends Borsh.Data<{
    amountType: TupleNumericType;
    lengthType: TupleNumericType;
    maxRanges: BN;
}> {
    static readonly SCHEMA: any;
    instruction: number;
    amountType: TupleNumericType;
    lengthType: TupleNumericType;
    maxRanges: BN;
}
declare type InitAuctionManagerV2Params = {
    vault: PublicKey;
    auction: PublicKey;
    auctionManager: PublicKey;
    auctionManagerAuthority: PublicKey;
    acceptPaymentAccount: PublicKey;
    tokenTracker: PublicKey;
    amountType: TupleNumericType;
    lengthType: TupleNumericType;
    maxRanges: BN;
};
export declare class InitAuctionManagerV2 extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<InitAuctionManagerV2Params>);
}
export {};
