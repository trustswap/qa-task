/**
 * exports data used in tests
 */

module.exports = {
    network: {
      networkName: "ethereum",
      chainId: "0xaa36a7",
      withdrawalAddress: "0xD3e73A580b11a46f9B25619f28F32EFDc2Fa8C48",
      tokenName: "NOTES CLONE",
      tokenAddress: "0xE32db794F27c1E3Aa7498f78d73Dc2d265F6893a"
    },
    lock: {
      lockContractAddress: "0x4f0fd563be89ec8c3e7d595bf3639128c0a7c33a",
      lockDepositId: 656 // getting this value after executing approveAndLockTokens() method in file generate_lock_id.js
    }
  };