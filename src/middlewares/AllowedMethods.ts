import { Request, Response, NextFunction } from "express";
import { ALLOWED_METHODS } from "../enums/allowedMethods";

const checkMethod = (req: Request, res: Response, next: NextFunction) => {
  const { method } = req as any;
  if (Object.values(ALLOWED_METHODS).includes(method)) {
    return next();
  }
  res.status(405).json({
    status: 405,
    message: "Method is not allowed",
  });
  return next();
};

export default checkMethod;
