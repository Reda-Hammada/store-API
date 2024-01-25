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
const express_validator_1 = require("express-validator");
const ErrorClass_1 = __importDefault(require("./ErrorClass"));
class CategoryService extends ErrorClass_1.default {
    constructor(categoryRepository) {
        super();
        this.categoryRepository = categoryRepository;
        this.getCategoriesFromService = () => __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.categoryRepository.getCategoriesFromDB();
            if (!categories)
                this.throwNotFoundError("Categories not found");
            return categories;
        });
        this.createCategoryFromService = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty())
                this.throwValidationError(errors.array());
            const category = yield this.categoryRepository.insertCategoryIntoDB(req);
            return category;
        });
        this.getCategoryByIdFromService = (req) => __awaiter(this, void 0, void 0, function* () {
            const category = yield this.categoryRepository.getCategoryByIdFromRepo(req);
            if (!category)
                this.throwNotFoundError("Category not found");
            return category;
        });
        this.deleteCategoryFromService = (req) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const category = yield this.categoryRepository.deleteCategoryFromDB(Number(id));
            if (!category) {
                this.throwNotFoundError(`We do not have a record with id ${id}`);
            }
            return category;
        });
        this.updateCategoryFromService = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                this.throwValidationError(errors.array());
            }
            const category = yield this.categoryRepository.updateCategoryFromRepo(req);
            if (!category) {
                this.throwNotFoundError(`we do not have a record of category with id ${req.params.id}`);
            }
            return category;
        });
    }
}
exports.default = CategoryService;
