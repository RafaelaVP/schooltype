import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import {AResolver} from './graphql/resolvers'
import {buildSchemaSync} from 'type-graphql'
import { Student } from "./graphql/students/StudentResolver";
import { Context } from "./graphql/common/Context";


const schema = buildSchemaSync({
    resolvers:[AResolver, Student]
}) 


const server = new ApolloServer({schema, context: Context})

server.listen().then(({url}) => console.log(`server started at ${url}`));