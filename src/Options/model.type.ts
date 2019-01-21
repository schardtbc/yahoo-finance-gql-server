import { Field, ObjectType } from "type-graphql";

import { Contract } from "../Contract/model.type"

import { IOptions } from "yahoo_finance_api_wrapper"

@ObjectType()
export default class Options implements IOptions {
    @Field()
    public expirationDate: number = 0;
    @Field()
    public hasMiniOptions: boolean = false; 
    @Field(type => [Contract])
    public calls: Contract[] = []
    @Field(type => [Contract])
    public puts: Contract[] = []
  }