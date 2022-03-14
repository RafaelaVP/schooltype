"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LACK_OF_PERMISSION = void 0;
class LACK_OF_PERMISSION extends Error {
    constructor(permission) {
        super();
        this.statusCode = 403;
        this.description = 'Lack_OF_Permission';
        this.message = `User does not have required ${permission} permission to perform an operation`;
    }
}
exports.LACK_OF_PERMISSION = LACK_OF_PERMISSION;
