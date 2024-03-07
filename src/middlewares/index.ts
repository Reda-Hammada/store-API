import checkMethod from "./AllowedMethods";
import validateRequest from "./ValidateRequest";
const middlewares = {
  validateRequest,
  checkMethod,
};
export default middlewares;
