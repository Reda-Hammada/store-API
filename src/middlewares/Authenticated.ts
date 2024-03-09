import { Request, Response, NextFunction } from "express";
import { errorExceptionType } from "../types/errorException.types";
import jwt from "jsonwebtoken";
import process from "process";

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const { cookies } = req;
  try {
    jwt.verify(cookies?.token, process.env.JWT_SECRET as any);
    return next();
  } catch (error) {
    if ((error as errorExceptionType).name === "JsonWebTokenError") {
      return res.status(401).json({
        status: 401,
        message: "You are not authorized",
      });
    }
    return next(error); // Pass the error to the error handling middleware
  }
};

export default checkAuth;
