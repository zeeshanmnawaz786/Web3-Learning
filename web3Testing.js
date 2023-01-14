require("dotenv").config();
var Web3 = require("web3");
var web3 = new Web3(
  "https://goerli.infura.io/v3/5f0fd412c4334bfbbfeeb4bf7af909a3"
);

const account1 = "0x4E414B25F7620AE58ad37D6Fd025dB90d8d29658";
const amount = "0.1";
const PRIVATEKEY = process.env.PRIVATEKEY;

const txObj = {
  to: account1,
  value: web3.utils.toWei(amount, "ether"),
  gas: 21000,
  gasPrice: 20000000000,
};

async function signTransaction() {
  const signedTx = await web3.eth.accounts.signTransaction(txObj, PRIVATEKEY);
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log(receipt.transactionHash);
}

signTransaction();

// console.log();
// web3.eth.getBalance(account1, (err, balance) => {
//   console.log(
//     `This account ${account1} balance is`,
//     web3.utils.fromWei(balance, "ether")
//   );
// });

// web3.eth.getBalance(account2, (err, balance) => {
//   console.log(
//     `This account ${account2} balance is`,
//     web3.utils.fromWei(balance, "ether")
//   );
//   console.log();
// });
