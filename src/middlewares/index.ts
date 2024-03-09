import checkMethod from "./AllowedMethods";
import validateRequest from "./ValidateRequest";
import checkAuth from "./Authenticated";
const middlewares = {
  validateRequest,
  checkMethod,
  checkAuth,
};
export default middlewares;
