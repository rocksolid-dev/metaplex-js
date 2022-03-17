/// <reference types="node" />
import { AccountInfo, Connection } from '@solana/web3.js';
import BN from 'bn.js';
import { AnyPublicKey, StringPublicKey } from "../../../types";
import { Borsh } from "../../../utils";
import { Account } from '../../../Account';
import { MetaplexKey } from '../MetaplexProgram';
import { Buffer } from 'buffer';
declare type Args = {
    recipient: StringPublicKey;
    amountPaid: BN;
};
export declare class PayoutTicketData extends Borsh.Data<Args> {
    static readonly SCHEMA: any;
    key: MetaplexKey;
    recipient: StringPublicKey;
    amountPaid: BN;
    constructor(args: Args);
}
export declare class PayoutTicket extends Account<PayoutTicketData> {
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static getPayoutTicketsByRecipient(connection: Connection, recipient: AnyPublicKey): Promise<PayoutTicket[]>;
}
export {};
