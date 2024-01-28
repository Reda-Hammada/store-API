"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../utils/router"));
const CategoryController_1 = __importDefault(require("../controllers/Category/CategoryController"));
const middlewares_1 = __importDefault(require("../middlewares"));
const Validator_1 = __importDefault(require("../middlewares/Validator"));
const categoryController = CategoryController_1.default.createInstance();
const router = (0, router_1.default)();
router
    .route("/")
    .get(categoryController.getAllCategories)
    .post([middlewares_1.default.validateRequest(Validator_1.default.categoryValidator())], categoryController.createCategoryFromService);
router
    .route("/:id")
    .get(categoryController.getACategoryById)
    .put([middlewares_1.default.validateRequest(Validator_1.default.categoryValidator())], categoryController.updateCategory)
    .delete(categoryController.deleteCategory);
exports.default = router;
