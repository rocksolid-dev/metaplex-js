/// <reference types="node" />
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { AccountInfo, Connection, PublicKey } from '@solana/web3.js';
import { Buffer } from 'buffer';
import { Account } from '../../../Account';
import { MetadataKey } from '../MetadataProgram';
import { Edition } from './Edition';
import { MasterEdition } from './MasterEdition';
declare type CreatorArgs = {
    address: StringPublicKey;
    verified: boolean;
    share: number;
};
export declare class Creator extends Borsh.Data<CreatorArgs> {
    static readonly SCHEMA: any;
    address: StringPublicKey;
    verified: boolean;
    share: number;
}
declare type DataArgs = {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Creator[] | null;
};
export declare class MetadataDataData extends Borsh.Data<DataArgs> {
    static readonly SCHEMA: any;
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Creator[] | null;
    constructor(args: DataArgs);
}
declare type Args = {
    updateAuthority: StringPublicKey;
    mint: StringPublicKey;
    data: MetadataDataData;
    primarySaleHappened: boolean;
    isMutable: boolean;
    editionNonce: number | null;
};
export declare class MetadataData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: MetadataKey;
    updateAuthority: StringPublicKey;
    mint: StringPublicKey;
    data: MetadataDataData;
    primarySaleHappened: boolean;
    isMutable: boolean;
    editionNonce: number | null;
    masterEdition?: StringPublicKey;
    edition?: StringPublicKey;
    constructor(args: Args);
}
export declare class Metadata extends Account<MetadataData> {
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static getPDA(mint: AnyPublicKey): Promise<PublicKey>;
    static findMany(connection: Connection, filters?: {
        mint?: AnyPublicKey;
        updateAuthority?: AnyPublicKey;
        creators?: AnyPublicKey[];
    }): Promise<Metadata[]>;
    static findByOwner(connection: Connection, owner: AnyPublicKey): Promise<Metadata[]>;
    static findByOwnerV2(connection: Connection, owner: AnyPublicKey): Promise<Metadata[]>;
    static findDataByOwner(connection: Connection, owner: AnyPublicKey): Promise<MetadataData[]>;
    static getEdition(connection: Connection, mint: AnyPublicKey): Promise<Edition | MasterEdition>;
}
export declare const MAX_NAME_LENGTH = 32;
export declare const MAX_SYMBOL_LENGTH = 10;
export declare const MAX_URI_LENGTH = 200;
export declare const MAX_CREATOR_LEN: number;
export declare const computeCreatorOffset: (index: number) => number;
export {};
