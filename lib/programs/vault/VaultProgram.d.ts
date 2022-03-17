import { PublicKey } from '@solana/web3.js';
import { Program } from '../../Program';
export declare enum VaultKey {
    Uninitialized = 0,
    VaultV1 = 3,
    SafetyDepositBoxV1 = 1,
    ExternalPriceAccountV1 = 2
}
export declare enum VaultInstructions {
    InitVault = 0,
    AddTokenToInactiveVault = 1,
    ActivateVault = 2,
    CombineVault = 3,
    RedeemShares = 4,
    WithdrawTokenFromSafetyDepositBox = 5,
    MintFractionalShares = 6,
    WithdrawSharesFromTreasury = 7,
    AddSharesToTreasury = 8,
    UpdateExternalPriceAccount = 9,
    SetVaultAuthority = 10
}
export declare class VaultProgram extends Program {
    static readonly PREFIX = "vault";
    static readonly PUBKEY: PublicKey;
}
