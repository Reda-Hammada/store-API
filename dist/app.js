"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductRouter_1 = __importDefault(require("./routes/ProductRouter"));
const CategoryRouter_1 = __importDefault(require("./routes/CategoryRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/products", ProductRouter_1.default);
app.use("/api/v1/categories", CategoryRouter_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Internal Server Error",
    });
});
exports.default = app;