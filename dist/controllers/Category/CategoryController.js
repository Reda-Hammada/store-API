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
const CategoryService_1 = __importDefault(require("../../services/CategoryService"));
const CategoryRepository_1 = __importDefault(require("../../repositories/CategoryRepository"));
const ErrorClass_1 = __importDefault(require("../../services/ErrorClass"));
class CategoryController extends BaseController_1.default {
    constructor(categoryService) {
        super();
        this.categoryService = categoryService;
        /**
         * get all categories
         */
        this.getAllCategories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield this.categoryService.getCategoriesFromService();
                this.SuccessResponse(res, 200, "categories fetched successfully", categories);
            }
            catch (throwNotFoundError) {
                this.ErrorrResponse(res, 404, throwNotFoundError.message);
            }
        });
        /**
         *  get a category by ID
         */
        this.getACategoryById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.categoryService.getCategoryByIdFromService(req);
                this.SuccessResponse(res, 200, "category fetched successfully", category);
            }
            catch (throwNotFoundError) {
                this.ErrorrResponse(res, 404, throwNotFoundError.message);
            }
        });
        /**
         * create category
         */
        this.createCategoryFromService = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.categoryService.createCategoryFromService(req);
                this.SuccessResponse(res, 200, "Category created successfully", category);
            }
            catch (throwValidationError) {
                this.ErrorrResponse(res, 400, throwValidationError.message);
            }
        });
        /**
         * update category
         */
        this.updateCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.categoryService.updateCategoryFromService(req);
                this.SuccessResponse(res, 200, "Category has been updated successfully", category);
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
         * delete category
         */
        this.deleteCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield this.categoryService.deleteCategoryFromService(req);
                this.SuccessResponse(res, 200, `Category ${category.categoryName} has been deleted succesfully`, category);
            }
            catch (throwNotFoundError) {
                this.ErrorrResponse(res, 404, throwNotFoundError.message);
            }
        });
    }
}
CategoryController.createInstance = () => {
    return new CategoryController(new CategoryService_1.default(new CategoryRepository_1.default()));
};
exports.default = CategoryController;
