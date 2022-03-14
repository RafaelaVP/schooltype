"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
class NotFound extends Error {
    constructor(id) {
        super();
        this.statusCode = 404;
        this.description = 'Not found';
        this.message = `The ID: ${id} was not found`;
    }
}
exports.NotFound = NotFound;
