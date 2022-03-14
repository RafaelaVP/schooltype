"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const resolvers_1 = require("./graphql/resolvers");
const type_graphql_1 = require("type-graphql");
const StudentResolver_1 = require("./graphql/students/StudentResolver");
const Context_1 = require("./graphql/common/Context");
const TeacherResolver_1 = require("./graphql/teachers/TeacherResolver");
const schema = (0, type_graphql_1.buildSchemaSync)({
    resolvers: [resolvers_1.AResolver, StudentResolver_1.Student, TeacherResolver_1.Teacher]
});
const server = new apollo_server_1.ApolloServer({ schema, context: Context_1.Context });
server.listen().then(({ url }) => console.log(`server started at ${url}`));
