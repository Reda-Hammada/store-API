import prisma from "../utils/prisma";
import { Request } from "express";
class ProductRepository {
  public async getProductsFromDB() {
    const products = await prisma.product.findMany();
    return products;
  }

  public async getSingleProductFromDB(id: number) {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    return product;
  }

  public async createProduct(req: Request) {
    const { productName, price, categoryId, Colors, sizes } = req.body as any;
    const product = await prisma.product.create({
      data: {
        productName: productName,
        price: price,
        categoryId: categoryId,
        Colors: Colors,
        sizes: sizes,
      },
    });

    return product;
  }

  public async updateProduct(req: Request) {
    const { productName, price, categoryId, sizes, Colors } = req.body;
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (product) {
      await prisma.product.update({
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
  }

  public async deleteProduct(id: Number) {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (product) {
      await prisma.product.delete({
        where: {
          id: Number(id),
        },
      });
    }
    return product;
  }
}

export default ProductRepository;
