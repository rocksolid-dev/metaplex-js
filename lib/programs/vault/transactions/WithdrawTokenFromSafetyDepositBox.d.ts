import { ParamsWithStore } from "../../../types";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import BN from 'bn.js';
import { Transaction } from '../../../Transaction';
declare type WithdrawTokenFromSafetyDepositBoxParams = {
    vault: PublicKey;
    destination: PublicKey;
    safetyDepositBox: PublicKey;
    fractionMint: PublicKey;
    vaultAuthority: PublicKey;
    transferAuthority: PublicKey;
    amount: BN;
};
export declare class WithdrawTokenFromSafetyDepositBox extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<WithdrawTokenFromSafetyDepositBoxParams>);
}
export {};
