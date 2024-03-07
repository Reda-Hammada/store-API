import createRouter from "../utils/router";
import UserController from "../controllers/User/UserController";
import UserService from "../services/UserService";
import UserRepository from "../repositories/UserRepository";
import middlewares from "../middlewares";
import Validator from "../middlewares/Validator";
const userController = UserController.createInstance(
  new UserService(new UserRepository())
);
const router = createRouter();
router
  .route("/login")
  .post(
    [middlewares.validateRequest(Validator.signInValidator())],
    userController.signIn
  );

export default router;
