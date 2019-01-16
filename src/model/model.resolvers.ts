import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";

import  ModelsType from "./model.type";

import  ModelService  from "./model.service";

@Resolver(ModelsType) 
export class ModelResolver {
    // constructor(private modelService = new ModelService()) {} 
    
    @Query(returns =>  ModelsType)
    public async serviceInfo(obj: object, args: object, context: object, info:object) {
        return await ModelService.query(args)
    }
}