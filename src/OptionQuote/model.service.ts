


import  OptionQuote from "./model.type";

import { YahooFinance } from "yahoo_finance_api_wrapper"


export default class ModelService {
  public static async query(symbol: string) {
    const res = await YahooFinance.optionQuote(symbol)
    const result =  Object.assign(new OptionQuote(), res)
    return result
  }
}