import { ParamsWithStore } from "../../../types";
import { Borsh } from "../../../utils";
import { PublicKey, TransactionCtorFields } from '@solana/web3.js';
import { Transaction } from '../../../Transaction';
export declare class RedeemBidArgs extends Borsh.Data {
    static readonly SCHEMA: any;
    instruction: number;
}
export declare enum ProxyCallAddress {
    RedeemBid = 0,
    RedeemFullRightsTransferBid = 1
}
export declare class RedeemUnusedWinningConfigItemsAsAuctioneerArgs extends Borsh.Data<{
    winningConfigItemIndex: number;
    proxyCall: ProxyCallAddress;
}> {
    static readonly SCHEMA: any;
    instruction: number;
    winningConfigItemIndex: number;
    proxyCall: ProxyCallAddress;
}
declare type RedeemBidParams = {
    vault: PublicKey;
    auction: PublicKey;
    auctionManager: PublicKey;
    bidRedemption: PublicKey;
    bidderMeta: PublicKey;
    safetyDepositTokenStore: PublicKey;
    destination: PublicKey;
    safetyDeposit: PublicKey;
    fractionMint: PublicKey;
    bidder: PublicKey;
    isPrintingType: boolean;
    safetyDepositConfig: PublicKey;
    auctionExtended: PublicKey;
    transferAuthority: PublicKey;
    masterEdition?: PublicKey;
    reservationList?: PublicKey;
    auctioneerReclaimIndex?: number;
};
export declare class RedeemBid extends Transaction {
    constructor(options: TransactionCtorFields, params: ParamsWithStore<RedeemBidParams>);
}
export {};
