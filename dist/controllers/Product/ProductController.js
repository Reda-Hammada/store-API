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
const ProductService_1 = __importDefault(require("../../services/ProductService"));
const ProductRepository_1 = __importDefault(require("../../repositories/ProductRepository"));
const BaseController_1 = __importDefault(require("../BaseController"));
const ErrorClass_1 = __importDefault(require("../../services/ErrorClass"));
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
         * @param req res
         * @return porducts
         */
        this.getAllProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productService.getProductsFromRepo();
                this.SuccessResponse(res, 200, "Products fetched successfully", products);
            }
            catch (throwNotFoundError) {
                this.ErrorrResponse(res, 404, throwNotFoundError.message);
            }
        });
        /**
         * Get single product
         * @params req res
         * @return product
         */
        this.getOneProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const product = yield this.productService.getOneProductFromRepo(id);
                this.SuccessResponse(res, 200, "Product fetched successfully", product);
            }
            catch (throwNotFoundError) {
                this.ErrorrResponse(res, 404, throwNotFoundError.message);
            }
        });
        /**
         * create a product
         * @params req res
         * @return product
         */
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.productService.createProductFromRepo(req);
                this.SuccessResponse(res, 200, "Product created successfully", product);
            }
            catch (throwValidationError) {
                this.ErrorrResponse(res, 422, throwValidationError.message);
            }
        });
        /**
         * update product
         * @params req res
         * @return Response
         */
        this.updateProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.productService.updateProductFromRepo(req);
                this.SuccessResponse(res, 200, `Product updated successfully`, product);
            }
            catch (err) {
                if (err instanceof ErrorClass_1.default) {
                    switch (err.name) {
                        case "ValidationError":
                            this.ErrorrResponse(res, 422, err.message);
                            break;
                        case "NotFoundError":
                            this.ErrorrResponse(res, 404, err.message);
                            break;
                    }
                }
            }
        });
        /**
         * create product
         * @params req res
         * @return Response
         */
        this.deleteProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const product = yield this.productService.deleteProductFromRepo(Number(id));
                this.SuccessResponse(res, 200, ` product ${product.productName} is deleted successfully`, product);
            }
            catch (throwNotFoundError) {
                this.ErrorrResponse(res, 404, throwNotFoundError.message);
            }
        });
    }
    static createInstance(productService) {
        return new ProductController(new ProductService_1.default(new ProductRepository_1.default()));
    }
}
exports.default = ProductController;
