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
const ErrorClass_1 = __importDefault(require("./ErrorClass"));
class ProductService extends ErrorClass_1.default {
    constructor(productRepository) {
        super();
        this.productRepository = productRepository;
    }
    getProductsFromRepo() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productRepository.getProductsFromDB();
            if (!products)
                this.throwNotFoundError("Product Not Found");
            return products;
        });
    }
    getOneProductFromRepo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productRepository.getSingleProductFromDB(id);
            if (!product)
                this.throwNotFoundError("Product Not Found");
            return product;
        });
    }
    createProductFromRepo(req) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productRepository.createProduct(req);
        });
    }
    updateProductFromRepo(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productRepository.updateProduct(req);
            if (!product) {
                this.throwNotFoundError("this product does not exist in our record");
            }
            return product;
        });
    }
    deleteProductFromRepo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productRepository.deleteProduct(id);
            if (!product)
                this.throwNotFoundError("Product Not Found");
            return product;
        });
    }
}
exports.default = ProductService;
