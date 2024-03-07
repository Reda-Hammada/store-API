import createRouter from "../utils/router";
import ProductController from "../controllers/Product/ProductController";
import ProductService from "../services/ProductService";
import ProductRepository from "../repositories/ProductRepository";
import middlewares from "../middlewares";
import Validator from "../middlewares/Validator";
import uploadMiddleware from "../middlewares/multer";
const productController = ProductController.createInstance(
  new ProductService(new ProductRepository())
);
const router = createRouter();
router
  .route("/")
  .get([middlewares.checkMethod],productController.getAllProducts)
  .post(
    [
      uploadMiddleware.array("images"),
      middlewares.validateRequest(Validator.productValidator()),
    ],
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.getOneProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
