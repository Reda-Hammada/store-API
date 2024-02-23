"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../utils/router"));
const ProductController_1 = __importDefault(require("../controllers/Product/ProductController"));
const ProductService_1 = __importDefault(require("../services/ProductService"));
const ProductRepository_1 = __importDefault(require("../repositories/ProductRepository"));
const middlewares_1 = __importDefault(require("../middlewares"));
const Validator_1 = __importDefault(require("../middlewares/Validator"));
const multer_1 = __importDefault(require("../middlewares/multer"));
const productController = ProductController_1.default.createInstance(new ProductService_1.default(new ProductRepository_1.default()));
const router = (0, router_1.default)();
router
    .route("/")
    .get(productController.getAllProducts)
    .post([
    multer_1.default.array("images"),
    middlewares_1.default.validateRequest(Validator_1.default.productValidator()),
], productController.createProduct);
router
    .route("/:id")
    .get(productController.getOneProduct)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);
exports.default = router;
