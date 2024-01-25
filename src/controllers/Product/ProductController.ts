import ProductService from "../../services/ProductService";
import ProductRepository from "../../repositories/ProductRepository";
import BaseController from "../BaseController";
import { productsType } from "../../types/products.type";
import { errorExceptionType } from "../../types/errorException.types";
import { Response, Request } from "express";
import ErrorClass from "../../services/ErrorClass";

class ProductController extends BaseController {
  /**
   *
   * @param ProductService
   */
  constructor(private productService: ProductService) {
    super();
  }

  public static createInstance(
    productService: ProductService
  ): ProductController {
    return new ProductController(new ProductService(new ProductRepository()));
  }

  /**
   * Get all products data
   * @param req res
   * @return porducts
   */
  public getAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await this.productService.getProductsFromRepo();
      this.SuccessResponse(
        res,
        200,
        "Products fetched successfully",
        products as productsType[]
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
   * Get single product
   * @params req res
   * @return product
   */
  public getOneProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const product = await this.productService.getOneProductFromRepo(id);
      this.SuccessResponse(
        res,
        200,
        "Product fetched successfully",
        product as productsType
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
   * create a product
   * @params req res
   * @return product
   */

  public createProduct = async (req: Request, res: Response) => {
    try {
      const product = await this.productService.createProductFromRepo(
        req as any
      );
      this.SuccessResponse(
        res,
        200,
        "Product created successfully",
        product as any
      );
    } catch (throwValidationError) {
      this.ErrorrResponse(
        res,
        422,
        (throwValidationError as errorExceptionType).message
      );
    }
  };

  /**
   * update product
   * @params req res
   * @return Response
   */
  public updateProduct = async (req: Request, res: Response) => {
    try {
      const product = await this.productService.updateProductFromRepo(req);
      this.SuccessResponse(
        res,
        200,
        `Product updated successfully`,
        product as any
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
   * create product
   * @params req res
   * @return Response
   */
  public deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const product = await this.productService.deleteProductFromRepo(
        Number(id)
      );
      this.SuccessResponse(
        res,
        200,
        ` product ${
          (product as productsType).productName
        } is deleted successfully`,
        product as productsType
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

export default ProductController;
