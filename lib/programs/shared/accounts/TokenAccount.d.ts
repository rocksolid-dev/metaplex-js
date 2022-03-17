/// <reference types="node" />
import { AnyPublicKey } from "../../../types";
import { AccountInfo as TokenAccountInfo } from '@solana/spl-token';
import { AccountInfo, Connection } from '@solana/web3.js';
import { Buffer } from 'buffer';
import { Account } from '../../../Account';
export declare class TokenAccount extends Account<TokenAccountInfo> {
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static getTokenAccountsByOwner(connection: Connection, owner: AnyPublicKey): Promise<TokenAccount[]>;
}
export declare const deserialize: (data: Buffer) => any;
