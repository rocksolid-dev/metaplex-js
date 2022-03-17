import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Transaction } from '../../../Transaction';
import { MetadataDataData } from '../accounts/Metadata';
export declare class UpdateMetadataArgs extends Borsh.Data<{
    data?: MetadataDataData;
    updateAuthority?: string;
    primarySaleHappened: boolean | null;
}> {
    static readonly SCHEMA: any;
    instruction: number;
    data: MetadataDataData | null;
    updateAuthority: string | null;
    primarySaleHappened: boolean | null;
}
declare type UpdateMetadataParams = {
    metadata: PublicKey;
    updateAuthority: PublicKey;
    metadataData?: MetadataDataData;
    newUpdateAuthority?: PublicKey;
    primarySaleHappened?: boolean | null;
};
export declare class UpdateMetadata extends Transaction {
    constructor(options: TransactionCtorFields, params: UpdateMetadataParams);
}
export {};
