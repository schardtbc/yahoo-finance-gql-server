/**
 * @jest-environment node
 */

import "reflect-metadata"

import ModelService from "./model.service";

import  Quote  from "./model.type"

test("Quote", async() => {
    const res: Quote[] = await ModelService.query("AAPL")
    expect(res).toMatchObject(expect.arrayContaining([
            expect.objectContaining({
                regularMarketPrice: expect.any(Number)
            })
        ]))
})