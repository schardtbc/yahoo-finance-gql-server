
import  OptionChain  from "./model.type";

import { YahooFinance } from "yahoo_finance_api_wrapper"

export default class ModelService {
  public static async query(symbol: string, expirationDate: number = 0) {
    const res: OptionChain = await YahooFinance.optionChain( symbol, expirationDate );
    return res
  }
}

