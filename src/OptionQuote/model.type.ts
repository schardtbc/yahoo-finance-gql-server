import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

// define the models class using the follow pattern
// class names must be unique in the graphql schema

 import { IOptionQuote } from "yahoo_finance_api_wrapper"

@ObjectType()
export default class OptionQuote implements IOptionQuote {
        @Field()    
        public language: string = "";
        @Field()
        public region: string = "";
        @Field()
        public quoteType: string = "";
        @Field()
        public currency: string = "";
        @Field()
        public regularMarketChangePercent: number = 0;
        @Field()
        public regularMarketDayRange: string = "";
        @Field()
        public regularMarketPreviousClose: number = 0;
        @Field()
        public bid: number = 0;
        @Field()
        public ask: number = 0;
        @Field()
        public fullExchangeName: string = "";
        @Field()
        public fiftyTwoWeekLowChange: number = 0;
        @Field()
        public fiftyTwoWeekLowChangePercent: number = 0;
        @Field()
        public fiftyTwoWeekRange: string = "";
        @Field()
        public fiftyTwoWeekHighChange: number = 0;
        @Field()
        public fiftyTwoWeekHighChangePercent: number = 0;
        @Field()
        public fiftyTwoWeekLow: number = 0;
        @Field()
        public fiftyTwoWeekHigh: number = 0;
        @Field()
        public sourceInterval: number = 0;
        @Field()
        public exchangeTimezoneName: string = "";
        @Field()
        public exchangeTimezoneShortName: string = "";
        @Field()
        public gmtOffSetMilliseconds: number = 0;
        @Field()
        public esgPopulated: boolean = false;
        @Field()
        public tradeable: boolean = false;
        @Field()
        public exchangeDataDelayedBy: number = 0;
        @Field()
        public market: string = "";
        @Field()
        public regularMarketPrice: number = 0;
        @Field()
        public regularMarketTime: number = 0;
        @Field()
        public regularMarketChange: number = 0;
        @Field()
        public regularMarketOpen: number = 0;
        @Field()
        public regularMarketDayHigh: number = 0;
        @Field()
        public regularMarketDayLow: number = 0;
        @Field()
        public regularMarketVolume: number = 0;
        @Field()
        public marketState: string = "";
        @Field()
        public exchange: string = "";
        @Field()
        public priceHint: number = 0;
        @Field()
        public underlyingSymbol: string = "";
        @Field()
        public strike: number = 0;
        @Field()
        public openInterest: number = 0;
        @Field()
        public expireDate: number = 0;
        @Field()
        public expireIsoDate: string = "";
        @Field()
        public shortName: string = "";
        @Field()
        public symbol: string = "";
    }