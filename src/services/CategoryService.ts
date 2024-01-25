import { validationResult } from "express-validator";
import CategoryRepository from "../repositories/CategoryRepository";
import ErrorClass from "./ErrorClass";
import { Request } from "express";

class CategoryService extends ErrorClass {
  constructor(private categoryRepository: CategoryRepository) {
    super();
  }

  public getCategoriesFromService = async () => {
    const categories = await this.categoryRepository.getCategoriesFromDB();
    if (!categories) this.throwNotFoundError("Categories not found");
    return categories;
  };

  public createCategoryFromService = async (req: Request) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) this.throwValidationError(errors.array());
    const category = await this.categoryRepository.insertCategoryIntoDB(req);
    return category;
  };

  public getCategoryByIdFromService = async (req: Request) => {
    const category = await this.categoryRepository.getCategoryByIdFromRepo(req);
    if (!category) this.throwNotFoundError("Category not found");
    return category;
  };

  public deleteCategoryFromService = async (req: Request) => {
    const { id } = req.params;
    const category = await this.categoryRepository.deleteCategoryFromDB(
      Number(id)
    );
    if (!category) {
      this.throwNotFoundError(`We do not have a record with id ${id}`);
    }
    return category;
  };

  public updateCategoryFromService = async (req: Request) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      this.throwValidationError(errors.array());
    }
    const category = await this.categoryRepository.updateCategoryFromRepo(req);
    if (!category) {
      this.throwNotFoundError(
        `we do not have a record of category with id ${req.params.id}`
      );
    }
    return category;
  };
}
export default CategoryService;
