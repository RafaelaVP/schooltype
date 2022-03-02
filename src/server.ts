import { ApolloServer } from 'apollo-server';
import  from './graphql/resolvers'

const server = new ApolloServer({})

server.listen().then(({url}) => console.log(`server started at ${url}`));