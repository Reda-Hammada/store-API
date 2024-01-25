import createRouter from "../utils/router";
import ProductController from "../controllers/Product/ProductController";
import ProductService from "../services/ProductService";
import ProductRepository from "../repositories/ProductRepository";
import middlewares from "../middlewares";

const productController = ProductController.createInstance(
  new ProductService(new ProductRepository())
);
const router = createRouter();
router
  .route("/")
  .get(productController.getAllProducts)
  .post([middlewares.productValidator], productController.createProduct);

router
  .route("/:id")
  .get(productController.getOneProduct)
  .put([middlewares.productValidator], productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
