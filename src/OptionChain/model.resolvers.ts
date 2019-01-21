import { Arg, FieldResolver, Query, Resolver, Root, Args } from "type-graphql";

import   OptionChain  from "./model.type";

import  ModelService  from "./model.service";


interface IOC  {
    symbol: string
    expirationDates: number[]
    strikePrices: number[]
}


@Resolver(OptionChain) 
export class ModelResolver {
    // constructor(private modelService = new ModelService()) {} 
    
    @Query(returns =>  OptionChain)
    public  async optionChain(@Arg("symbol") symbol:string, @Arg("expirationDate", {nullable: true}) expirationDate: number) {
        const res: object =  await ModelService.query(symbol, expirationDate);
        return res
    }
}