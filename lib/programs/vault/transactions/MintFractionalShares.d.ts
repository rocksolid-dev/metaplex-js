import { ParamsWithStore } from "../../../types";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import BN from 'bn.js';
import { Transaction } from '../../../Transaction';
declare type MintFractionalSharesParams = {
    vault: PublicKey;
    fractionMint: PublicKey;
    fractionMintAuthority: PublicKey;
    fractionTreasury: PublicKey;
    vaultAuthority: PublicKey;
    numberOfShares: BN;
};
export declare class MintFractionalShares extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<MintFractionalSharesParams>);
}
export {};
