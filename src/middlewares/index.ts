import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
const middlewares = {
  validateRequest: function (validations: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      for (let validation of validations) {
        await validation.run(req);
      }

      const errors = validationResult(req);
      if (errors.isEmpty()) return next();
      res
        .status(400)
        .json({ message: "Invalid request", errors: errors.array() });
    };
  },
};
export default middlewares;
