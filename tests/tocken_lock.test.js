const { test, expect } = require("@playwright/test");
const { Urls } = require("../utils/urls");
const data = require("../utils/data");

/**
 * @implements tests for creating token lock via api
 */

test.describe.serial("Tocken lock creation API test", () => {
  test("Re-sync the BE", async ({ request }) => {
    const getRequest = await request.put(
      Urls.locks(
        data.lock.lockContractAddress,
        data.lock.lockDepositId,
        data.network.networkName,
        data.network.chainId
      )
    );
  
    // saving response
    const response = await getRequest.json();
  
    // validating status code
    expect(getRequest.ok()).toBeTruthy();
    expect(getRequest.status()).toBe(200);
  
    // validating body
    expect(response).toEqual({ data: true });
  });
  
  test("Retreive lock data from BE", async ({ request }) => {
    const getRequest = await request.get(
      Urls.myLocks(
        data.network.withdrawalAddress,
        data.network.networkName,
        data.network.chainId
      )
    );
  
    const response = await getRequest.json();
  
    // validating status code
    expect(getRequest.ok()).toBeTruthy();
    expect(getRequest.status()).toBe(200);
  
    // validating event body
    const eventData = response.data[0].event;
  
    expect(eventData.network).toBe(data.network.networkName);
    expect(eventData.chainId).toBe(data.network.chainId);
    expect(eventData.lockContractAddress).toBe(data.lock.lockContractAddress);
    expect(eventData.lockDepositId).toBe(data.lock.lockDepositId);
  
    // validating token body
    const tokenData = response.data[0].token;
  
    expect(tokenData.tokenName).toBe(data.network.tokenName);
    expect(tokenData.tokenAddress).toBe(data.network.tokenAddress);
  });
})