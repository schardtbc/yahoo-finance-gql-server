/**
 * @jest-environment node
 */

import  ModelService  from "./model.service"

import { IOptionChain } from "yahoo_finance_api_wrapper"

test("service.query", async () => {
    const res = await ModelService.query("AAPL");
    expect(res).toMatchObject({ 
        strikes: expect.arrayContaining([expect.any(Number)])
    })
});