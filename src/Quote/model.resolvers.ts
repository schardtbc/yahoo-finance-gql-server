import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";

import  Quote from "./model.type";

import  ModelService  from "./model.service";

import { IOptionQuote, YahooFinance } from "yahoo_finance_api_wrapper"




@Resolver(Quote) 
export class ModelResolver {
    // constructor(private modelService = new ModelService()) {} 
    
    @Query( returns => [Quote] ) 
    public async marketQuote( @Arg("symbol") symbol: string) {
        return  await ModelService.query(symbol);
    }
    
}