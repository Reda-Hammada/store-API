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
const prisma_1 = __importDefault(require("../utils/prisma"));
class CategoryRepository {
    constructor() {
        this.getCategoriesFromDB = () => __awaiter(this, void 0, void 0, function* () {
            const categories = yield prisma_1.default.category.findMany();
            return categories;
        });
        this.getCategoryByIdFromRepo = (req) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const category = yield prisma_1.default.category.findUnique({
                where: {
                    id: Number(id),
                },
            });
            return category;
        });
        this.insertCategoryIntoDB = (req) => __awaiter(this, void 0, void 0, function* () {
            const { categoryName } = req.body;
            const category = yield prisma_1.default.category.create({
                data: {
                    categoryName: categoryName,
                },
            });
            return category;
        });
        this.deleteCategoryFromDB = (id) => __awaiter(this, void 0, void 0, function* () {
            const category = yield prisma_1.default.category.delete({
                where: {
                    id: id,
                },
            });
            return category;
        });
        this.updateCategoryFromRepo = (req) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { categoryName } = req.body;
            const category = yield prisma_1.default.category.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if (category) {
                yield prisma_1.default.category.update({
                    where: {
                        id: Number(id),
                    },
                    data: {
                        categoryName: categoryName,
                    },
                });
            }
            return category;
        });
    }
}
exports.default = CategoryRepository;
