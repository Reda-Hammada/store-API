import createRouter from "../utils/router";
import CategoryController from "../controllers/Category/CategoryController";
import middlewares from "../middlewares";

const categoryController = CategoryController.createInstance();
const router = createRouter();
router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(
    [middlewares.categoryValidator],
    categoryController.createCategoryFromService
  );

router
  .route("/:id")
  .get(categoryController.getACategoryById)
  .put([middlewares.categoryValidator], categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

export default router;
