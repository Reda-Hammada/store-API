import ErrorClass from "./ErrorClass";
import type ProductRepository from "../repositories/ProductRepository";
import { Request } from "express";
import { productsType } from "../types/products.type";
class ProductService extends ErrorClass {
  constructor(private productRepository: ProductRepository) {
    super();
  }

  public async getProductsFromRepo() {
    const products = await this.productRepository.getProductsFromDB();
    if (!products) this.throwNotFoundError("Product Not Found");
    return products;
  }

  public async getOneProductFromRepo(id: any) {
    const product = await this.productRepository.getSingleProductFromDB(id);
    if (!product) this.throwNotFoundError("Product Not Found");
    return product;
  }

  public async createProductFromRepo(req: Request) {
    await this.productRepository.createProduct(req);
  }

  public async updateProductFromRepo(req: Request) {
    const product = await this.productRepository.updateProduct(req);
    if (!product) {
      this.throwNotFoundError("this product does not exist in our record");
    }
    return product;
  }

  public async deleteProductFromRepo(id: Number) {
    const product = await this.productRepository.deleteProduct(id);
    if (!product) this.throwNotFoundError("Product Not Found");
    return product;
  }
}

export default ProductService;
