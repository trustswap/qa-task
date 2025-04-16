
const { approveAndLockTokens } = require('./main.js');
const data = require("../utils/data.js");

(async () => {
    const lockId = await approveAndLockTokens(data.network.withdrawalAddress);
    if (lockId) {
        data.lock.lockDepositId = lockId
    } else {
        console.log("Token lock failed.");
    }
})();