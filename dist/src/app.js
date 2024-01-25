"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs = require("fs");
const xss = require("xss");
const cors = require("cors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("api/v1/products");
exports.default = app;
