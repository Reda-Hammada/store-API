"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AllowedMethods_1 = __importDefault(require("./AllowedMethods"));
const ValidateRequest_1 = __importDefault(require("./ValidateRequest"));
const Authenticated_1 = __importDefault(require("./Authenticated"));
const middlewares = {
    validateRequest: ValidateRequest_1.default,
    checkMethod: AllowedMethods_1.default,
    checkAuth: Authenticated_1.default,
};
exports.default = middlewares;
