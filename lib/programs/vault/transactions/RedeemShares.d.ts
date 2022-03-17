import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { VaultInstructions } from '../VaultProgram';
import { Transaction } from '../../../Transaction';
export declare class RedeemSharesArgs extends Borsh.Data {
    static readonly SCHEMA: any;
    instruction: VaultInstructions;
}
declare type RedeemSharsParams = {
    burnAuthority: PublicKey;
    fractionMint: PublicKey;
    outstandingSharesAccount: PublicKey;
    proceedsAccount: PublicKey;
    redeemTreasury: PublicKey;
    transferAuthority: PublicKey;
    vault: PublicKey;
};
export declare class RedeemShares extends Transaction {
    constructor(options: TransactionCtorFields, params: RedeemSharsParams);
}
export {};
