import createRouter from "../utils/router";
import CategoryController from "../controllers/Category/CategoryController";
import middlewares from "../middlewares";
import Validator from "../middlewares/Validator";
const categoryController = CategoryController.createInstance();
const router = createRouter();
router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(
    [middlewares.validateRequest(Validator.categoryValidator())],
    categoryController.createCategoryFromService
  );

router
  .route("/:id")
  .get(categoryController.getACategoryById)
  .put(
    [middlewares.validateRequest(Validator.categoryValidator())],
    categoryController.updateCategory
  )
  .delete(categoryController.deleteCategory);

export default router;
