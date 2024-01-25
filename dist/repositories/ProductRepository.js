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
class ProductRepository {
    getProductsFromDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield prisma_1.default.product.findMany();
            return products;
        });
    }
    getSingleProductFromDB(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield prisma_1.default.product.findUnique({
                where: {
                    id: Number(id),
                },
            });
            return product;
        });
    }
    createProduct(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productName, price, categoryId, Colors, sizes } = req.body;
            const product = yield prisma_1.default.product.create({
                data: {
                    productName: productName,
                    price: price,
                    categoryId: categoryId,
                    Colors: Colors,
                    sizes: sizes,
                },
            });
            return product;
        });
    }
    updateProduct(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productName, price, categoryId, sizes, Colors } = req.body;
            const { id } = req.params;
            const product = yield prisma_1.default.product.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if (product) {
                yield prisma_1.default.product.update({
                    where: {
                        id: Number(id),
                    },
                    data: {
                        productName: productName,
                        categoryId: categoryId,
                        price: price,
                        sizes: sizes,
                        Colors: Colors,
                    },
                });
            }
            return product;
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield prisma_1.default.product.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if (product) {
                yield prisma_1.default.product.delete({
                    where: {
                        id: Number(id),
                    },
                });
            }
            return product;
        });
    }
}
exports.default = ProductRepository;
