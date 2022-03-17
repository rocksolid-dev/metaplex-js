import { ParamsWithStore } from "../../../types";
import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Transaction } from '../../../Transaction';
export declare class RedeemFullRightsTransferBidArgs extends Borsh.Data {
    static readonly SCHEMA: any;
    instruction: number;
}
declare type RedeemFullRightsTransferBidParams = {
    vault: PublicKey;
    auction: PublicKey;
    auctionManager: PublicKey;
    bidRedemption: PublicKey;
    bidMetadata: PublicKey;
    safetyDepositTokenStore: PublicKey;
    destination: PublicKey;
    safetyDeposit: PublicKey;
    fractionMint: PublicKey;
    bidder: PublicKey;
    safetyDepositConfig: PublicKey;
    auctionExtended: PublicKey;
    transferAuthority: PublicKey;
    masterMetadata: PublicKey;
    newAuthority: PublicKey;
    auctioneerReclaimIndex?: number;
};
export declare class RedeemFullRightsTransferBid extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<RedeemFullRightsTransferBidParams>);
}
export {};
