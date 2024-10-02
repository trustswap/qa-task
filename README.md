To run, set env var PRIVATE_KEY to your private key, then
```npm install```
then 
```node src/main.js```

To run, set env var PRIVATE_KEY to your private key, then
```npm install
then 
node src/main.js


## Task overview

1. Creates a token lock via a smart contract.

In order to make this step work I had to provide withdrawalAddress so I figured it out by creating a new file create_token_lock.test.js where I call the method from main.js and provide it with the withdrawalAddress where the tokens will be withdrawn after the unlock period. So in the script inside package.json I am executing the new file, create_token_lock.test.js instead of main.js

This step was ok first few times and I got a couple of lockDepositID's and after running test couple of times this message started to pop up even I had gas on withdrawal address that I set
shortMessage: 'insufficient funds for intrinsic transaction cost'
Token lock failed.
So I kinda hardcoded lockDepositID value and I tested with lock deposit id's that I had from first couple of runs e.g. 660, 665. 


2. Create API that triggers a resync with the backend to ensure updated data. ✅
3. Created API that validates that the lock information is retrieved from the backend after the
resync ✅

Response contains event and token objects, currently I'm asserting:
- for event: network, chainId, lockContractAddress
- for token: tokenName, tokenAddress


Scripts in package.json
    "test": "node src/generate_lock_id.js && npm run api",
Creates token lock and then runs resync and retreive lock data APIs.

    "api": "npx playwright test"
Executes API tests
```