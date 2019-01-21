import "reflect-metadata"

import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";

import  OptionQuote from "./model.type";

import  ModelService  from "./model.service";

@Resolver(OptionQuote) 
export class ModelResolver {
    // constructor(private modelService = new ModelService()) {} 
    
    @Query( returns => OptionQuote ) 
    public async optionQuote(@Arg("symbol") symbol: string) {
        let res: any
        try {
           res = await ModelService.query(symbol);
        }
        catch {
           throw new Error("Invalid symbol.");
        }
        return res
    }
}