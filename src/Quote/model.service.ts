
import  Quote  from "./model.type";

import { YahooFinance } from "yahoo_finance_api_wrapper"

export default class ModelService {
  public static async query(symbol: string) {
    const res: Quote[] = await YahooFinance.quote(symbol)
    const result = res.map( q => Object.assign(new Quote(), q))
    return res
  }
}