"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateEnum = void 0;
const type_graphql_1 = require("type-graphql");
var StateEnum;
(function (StateEnum) {
    StateEnum["SP"] = "S\u00E3o Paulo";
    StateEnum["RJ"] = "Rio de Janeiro";
})(StateEnum = exports.StateEnum || (exports.StateEnum = {}));
(0, type_graphql_1.registerEnumType)(StateEnum, {
    name: "StateEnum",
    description: "Estados permitidos para um estudante"
});
