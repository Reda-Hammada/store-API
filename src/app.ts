import { Application, Request, Response, NextFunction } from "express";
import { errorExceptionType } from "./types/errorException.types";
import express from "express";
import productRouter from "./routes/ProductRouter";
import categoryRouter from "./routes/CategoryRouter";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);

app.use(
  (
    err: errorExceptionType,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
);

export default app;
