import { Request, Response, NextFunction, response } from "express";
import Validator from "./Validator";

const middlewares = {
  productValidator(req: Request, res: Response, next: NextFunction) {
    Validator.productValidator()(req, res, next);
    next();
  },

  categoryValidator(req: Request, res: Response, next: NextFunction) {
    Validator.categoryValidator()(req, res, next);
    next();
  },
};
export default middlewares;
