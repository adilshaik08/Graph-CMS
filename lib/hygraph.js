import { GraphQLClient } from "graphql-request";

export const hygraphClient = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);
