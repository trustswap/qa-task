/**
 * exports Urls class
 */

class Urls {
    static locks(lockContractAddress, lockDepositId, network, chainId) {
      return `api/app/locks/${lockContractAddress}/${lockDepositId}?network=${network}&chainId=${chainId}`;
    }
  
    static myLocks(walletAddress, network, chainId) {
      return `api/app/mylocks/${walletAddress}?network=${network}&chainId=${chainId}`;
    }
  }
  
  module.exports = { Urls };