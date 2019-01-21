import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

// define the models class using the follow pattern
// class names must be unique in the graphql schema

import { IOptionChain } from "yahoo_finance_api_wrapper"

import  Options  from "../Options/model.type"

import OptionQuote from "../OptionQuote/model.type"

@ObjectType()
export default class OptionChain implements IOptionChain {
    @Field()
    public underlyingSymbol: string = "";
    @Field(type => [Number])
    public expirationDates: number[] = [];
    @Field(type => [Number])
    public strikes: number[] = [];
    @Field()
    public hasMiniOptions: boolean = false;
    @Field(type => OptionQuote)
    public quote: OptionQuote = new OptionQuote()
    @Field(type => [Options])
    public options: Options[] = [];
}
