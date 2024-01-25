"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorClass extends Error {
    throwValidationError(message) {
        this.name = "ValidationError";
        this.message = message;
        this.message;
        throw this;
    }
    throwAuthenticationError(message) {
        this.name = "AuthenticationError";
        this.message = message;
        this.message;
        throw this;
    }
    throwNotFoundError(message) {
        this.name = "NotFoundError";
        this.message = message;
        throw this;
    }
    throwServerError(message) {
        this.name = "ServerError";
        this.message = message;
        throw this;
    }
}
exports.default = ErrorClass;
