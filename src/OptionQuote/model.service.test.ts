/**
 * @jest-environment node
 */

import "reflect-metadata"

import ModelService from "./model.service"

import { YahooFinance } from "yahoo_finance_api_wrapper"

test("YF optionQuote", async () =>{
    const res = await YahooFinance.optionQuote("AAPL190125C00150000")
    expect(res).toEqual(expect.objectContaining({ 
        expireDate: expect.any(Number)
    }))
});

test("service.query", async () => {
    const res = await ModelService.query("AAPL190125C00150000");
    console.log(res)
    expect(res).toEqual(expect.objectContaining({ 
        expireDate: expect.any(Number)
    }))
});