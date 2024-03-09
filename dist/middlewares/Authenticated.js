"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const process_1 = __importDefault(require("process"));
const checkAuth = (req, res, next) => {
    const { cookies } = req;
    try {
        jsonwebtoken_1.default.verify(cookies === null || cookies === void 0 ? void 0 : cookies.token, process_1.default.env.JWT_SECRET);
        return next();
    }
    catch (error) {
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                status: 401,
                message: "You are not authorized",
            });
        }
        return next(error); // Pass the error to the error handling middleware
    }
};
exports.default = checkAuth;
