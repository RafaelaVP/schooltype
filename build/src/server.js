"use strict";
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var server = new apollo_server_1.ApolloServer({});
server.listen().then(function (_a) {
    var url = _a.url;
    return console.log("server started at ".concat(url));
});
