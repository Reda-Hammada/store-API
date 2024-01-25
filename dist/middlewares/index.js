"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = __importDefault(require("./Validator"));
const middlewares = {
    productValidator(req, res, next) {
        Validator_1.default.productValidator()(req, res, next);
        next();
    },
    categoryValidator(req, res, next) {
        Validator_1.default.categoryValidator()(req, res, next);
        next();
    },
};
exports.default = middlewares;
