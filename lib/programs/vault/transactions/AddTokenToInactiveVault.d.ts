import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import BN from 'bn.js';
import { Transaction } from '../../../Transaction';
declare type AddTokenToInactiveVaultParams = {
    vault: PublicKey;
    vaultAuthority: PublicKey;
    tokenMint: PublicKey;
    tokenAccount: PublicKey;
    tokenStoreAccount: PublicKey;
    transferAuthority: PublicKey;
    safetyDepositBox: PublicKey;
    amount: BN;
};
export declare class AddTokenToInactiveVault extends Transaction {
    constructor(options: TransactionCtorFields, params: AddTokenToInactiveVaultParams);
}
export {};
