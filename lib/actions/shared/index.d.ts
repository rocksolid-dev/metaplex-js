import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { CreateAssociatedTokenAccount, CreateMint, MintTo } from '../../programs';
export declare function prepareTokenAccountAndMintTx(connection: Connection, owner: PublicKey): Promise<{
    mint: Keypair;
    createMintTx: CreateMint;
    createAssociatedTokenAccountTx: CreateAssociatedTokenAccount;
    mintToTx: MintTo;
}>;
