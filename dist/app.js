"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_1 = require("./configs/swagger");
const express_1 = __importDefault(require("express"));
const ProductRouter_1 = __importDefault(require("./routes/ProductRouter"));
const CategoryRouter_1 = __importDefault(require("./routes/CategoryRouter"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1/products", ProductRouter_1.default);
app.use("/api/v1/categories", CategoryRouter_1.default);
app.use("/api/v1/user", UserRouter_1.default);
app.use("/api-docs", swagger_1.swaggerUi.serve, swagger_1.swaggerUi.setup(swagger_1.specs));
if (process.env.dev === "develop") {
    app.use((err, req, res, next) => {
        res.status(500).json({
            message: "Internal Server Error",
        });
    });
}
exports.default = app;
