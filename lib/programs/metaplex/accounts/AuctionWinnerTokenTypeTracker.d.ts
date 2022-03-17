/// <reference types="node" />
import { AnyPublicKey } from "../../../types";
import { TupleNumericType } from "../../../utils";
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { Buffer } from 'buffer';
import { Account } from '../../../Account';
import { MetaplexKey } from '../MetaplexProgram';
import { AmountRange } from './SafetyDepositConfig';
export interface AuctionWinnerTokenTypeTrackerData {
    key: MetaplexKey;
    amountType: TupleNumericType;
    lengthType: TupleNumericType;
    amountRanges: AmountRange[];
}
export declare class AuctionWinnerTokenTypeTracker extends Account<AuctionWinnerTokenTypeTrackerData> {
    constructor(pubkey: AnyPublicKey, info: AccountInfo<Buffer>);
    static isCompatible(data: Buffer): boolean;
    static getPDA(auctionManager: AnyPublicKey): Promise<PublicKey>;
}
