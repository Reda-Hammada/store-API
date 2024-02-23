import BaseController from "../BaseController";
import CategoryService from "../../services/CategoryService";
import CategoryRepository from "../../repositories/CategoryRepository";
import { errorExceptionType } from "../../types/errorException.types";
import { Request, Response } from "express";
import ErrorClass from "../../services/ErrorClass";

class CategoryController extends BaseController {
  constructor(private categoryService: CategoryService) {
    super();
  }

  static createInstance = () => {
    return new CategoryController(
      new CategoryService(new CategoryRepository())
    );
  };

  /**
   * get all categories
   */
  public getAllCategories = async (req: Request, res: Response) => {
    try {
      const categories = await this.categoryService.getCategoriesFromService();
      this.SuccessResponse(
        res,
        200,
        "categories fetched successfully",
        categories as any
      );
    } catch (throwNotFoundError) {
      this.ErrorrResponse(
        res,
        404,
        (throwNotFoundError as errorExceptionType).message
      );
    }
  };
  /**
   *  get a category by ID
   */
  public getACategoryById = async (req: Request, res: Response) => {
    try {
      const category = await this.categoryService.getCategoryByIdFromService(
        req
      );
      this.SuccessResponse(
        res,
        200,
        "category fetched successfully",
        category as any
      );
    } catch (throwNotFoundError) {
      this.ErrorrResponse(
        res,
        404,
        (throwNotFoundError as errorExceptionType).message
      );
    }
  };

  /**
   * create category
   */
  public createCategoryFromService = async (req: Request, res: Response) => {
    try {
      const category = await this.categoryService.createCategoryFromService(
        req
      );

      this.SuccessResponse(res, 200, "Category created successfully", category);
    } catch (throwValidationError) {
      this.ErrorrResponse(
        res,
        400,
        (throwValidationError as errorExceptionType).message
      );
    }
  };

  /**
   * update category
   */
  public updateCategory = async (req: Request, res: Response) => {
    try {
      const category = await this.categoryService.updateCategoryFromService(
        req
      );
      this.SuccessResponse(
        res,
        200,
        "Category has been updated successfully",
        category as any
      );
    } catch (err) {
      if (err instanceof ErrorClass) {
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
  };

  /**
   * delete category
   */
  public deleteCategory = async (req: Request, res: Response) => {
    try {
      const category = await this.categoryService.deleteCategoryFromService(
        req
      );
      this.SuccessResponse(
        res,
        200,
        `Category ${category.categoryName} has been deleted succesfully`,
        category
      );
    } catch (throwNotFoundError) {
      this.ErrorrResponse(
        res,
        404,
        (throwNotFoundError as errorExceptionType).message
      );
    }
  };
}

export default CategoryController;
