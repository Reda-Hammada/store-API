"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = __importDefault(require("../BaseController"));
class ProductController extends BaseController_1.default {
    /**
     *
     * @param ProductService
     */
    constructor(productService) {
        super();
        this.productService = productService;
        /**
         * Get all products data
         * @param Response res
         * @return porducts
         */
        this.getAllProducts = (res) => __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productService.getProductsFromRepo();
            this.SuccessResponse(res, 200, "Products fetched successfully", products);
        });
        /**
         *
         */
        this.getOneProductById = () => __awaiter(this, void 0, void 0, function* () { });
        /**
         *
         */
        this.createProduct = () => __awaiter(this, void 0, void 0, function* () { });
        /**
         *
         */
        this.updateProduct = () => __awaiter(this, void 0, void 0, function* () { });
        /**
         *
         */
        this.deleteProduct = () => __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = ProductController;
