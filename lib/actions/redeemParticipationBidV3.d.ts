import { PublicKey, TransactionSignature } from '@solana/web3.js';
import { Wallet } from '../wallet';
import { Connection } from '../Connection';
import { ParticipationConfigV2 } from '@metaplex-foundation/mpl-metaplex';
export interface RedeemParticipationBidV3Params {
    connection: Connection;
    wallet: Wallet;
    auction: PublicKey;
    store: PublicKey;
}
export interface RedeemParticipationBidV3Response {
    txIds: TransactionSignature[];
}
export declare const redeemParticipationBidV3: ({ connection, wallet, store, auction, }: RedeemParticipationBidV3Params) => Promise<RedeemParticipationBidV3Response>;
export declare function isEligibleForParticipationPrize(winIndex: number, { nonWinningConstraint, winnerConstraint }?: ParticipationConfigV2): boolean;
