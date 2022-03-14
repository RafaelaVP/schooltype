"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const Context = ({ req }) => {
    const group = req.headers.authorization;
    const fruta = "banana";
    return { group, fruta };
};
exports.Context = Context;
