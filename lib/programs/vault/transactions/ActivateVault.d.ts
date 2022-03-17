import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import BN from 'bn.js';
import { Transaction } from '../../../Transaction';
declare type ActivateVaultParams = {
    vault: PublicKey;
    fractionMint: PublicKey;
    fractionTreasury: PublicKey;
    fractionMintAuthority: PublicKey;
    vaultAuthority: PublicKey;
    numberOfShares: BN;
};
export declare class ActivateVault extends Transaction {
    constructor(options: TransactionCtorFields, params: ActivateVaultParams);
}
export {};
