import prisma from "../utils/prisma";
import { Request } from "express";

class CategoryRepository {
  
  public getCategoriesFromDB = async () => {
    const categories = await prisma.category.findMany();
    return categories;
  };

  public getCategoryByIdFromRepo = async (req: Request) => {
    const { id } = req.params;
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
    });
    return category;
  };
  public insertCategoryIntoDB = async (req: Request) => {
    const { categoryName } = req.body as any;
    const category = await prisma.category.create({
      data: {
        categoryName: categoryName,
      },
    });
    return category;
  };

  public deleteCategoryFromDB = async (id: number) => {
    const category = await prisma.category.delete({
      where: {
        id: id,
      },
    });
    return category;
  };

  public updateCategoryFromRepo = async (req: Request) => {
    const { id } = req.params;
    const { categoryName } = req.body;
    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (category) {
      await prisma.category.update({
        where: {
          id: Number(id),
        },
        data: {
          categoryName: categoryName,
        },
      });
    }

    return category;
  };
}

export default CategoryRepository;
