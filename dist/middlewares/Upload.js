"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("./multer"));
class Upload {
    constructor() {
        this.multer = multer_1.default;
    }
    uploadProductImage() {
        console.log(" ia m here");
        this.multer.array("productImages", 8);
    }
}
exports.default = Upload;
