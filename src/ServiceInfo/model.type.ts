import { Field, Float, GraphQLTimestamp, Int, ObjectType } from "type-graphql";

// define the models class using the follow pattern
// class names must be unique in the graphql schema

@ObjectType()
export default class ServiceInfo {
    @Field()
    public serviceName: string  = "Your Service Name"
    @Field()
    public author: string = "Me"
    @Field()
    public email: string ="me@mycompany.com"
    @Field()
    public rateLimit: number = 100;
}
