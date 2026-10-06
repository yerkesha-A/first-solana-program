const programId = new web3.PublicKey(
  "5FzCSUPCVANdSzpPuM4Bz61w6TVSRRs61sii6ZL9yrs4"
);

const instruction = new web3.TransactionInstruction({
  keys: [],
  programId: programId,
  data: Buffer.alloc(0),
});

const transaction = new web3.Transaction().add(instruction);

const signature = await web3.sendAndConfirmTransaction(
  pg.connection,
  transaction,
  [pg.wallet.keypair]
);

console.log("Program called successfully!");
console.log("Transaction:", signature);
