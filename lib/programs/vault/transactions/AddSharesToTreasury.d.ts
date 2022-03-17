import { ParamsWithStore } from "../../../types";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import BN from 'bn.js';
import { Transaction } from '../../../Transaction';
declare type AddSharesToTreasuryParams = {
    vault: PublicKey;
    source: PublicKey;
    fractionTreasury: PublicKey;
    vaultAuthority: PublicKey;
    transferAuthority: PublicKey;
    numberOfShares: BN;
};
export declare class AddSharesToTreasury extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<AddSharesToTreasuryParams>);
}
export {};
