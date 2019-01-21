import { Field, ObjectType } from "type-graphql";

import { IContract } from "yahoo_finance_api_wrapper"

@ObjectType()
export class Contract implements IContract {
    @Field()
    public contractSymbol: string = "";
    @Field()
    public strike: number = 0;
    @Field()
    public currency: string = "";
    @Field()
    public lastPrice: number = 0;
    @Field()
    public change: number = 0;
    @Field()
    public percentChange: number = 0;
    @Field()
    public volume: number = 0 ;
    @Field()
    public openInterest: number = 0;
    @Field()
    public bid: number = 0;
    @Field()
    public ask: number = 0;
    @Field()
    public contractSize: string = "";
    @Field()
    public expiration: number = 0;
    @Field()
    public lastTradeDate: number = 0;
    @Field()
    public impliedVolatility: number = 0;
    @Field()
    public inTheMoney: boolean = false;
}