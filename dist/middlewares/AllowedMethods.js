"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowedMethods_1 = require("../enums/allowedMethods");
const checkMethod = (req, res, next) => {
    const { method } = req;
    if (Object.values(allowedMethods_1.ALLOWED_METHODS).includes(method)) {
        next();
        return;
    }
    res.status(405).json({
        status: 405,
        message: "Method is not allowed",
    });
    next();
};
exports.default = checkMethod;
