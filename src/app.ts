import { Application } from "express";
import dotenv from "dotenv";
import { errorExceptionType } from "./types/errorException.types";
import express from "express";
import productRouter from "./routes/ProductRouter";
import categoryRouter from "./routes/CategoryRouter";
import userRouter from "./routes/UserRouter";
dotenv.config();
const app: Application = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/products", productRouter);
app.use(cors());
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/user", userRouter);
// app.use(
//   (
//     err: errorExceptionType,
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     res.status(500).json({
//       message: "Internal Server Error",
//     });
//   }
// );

export default app;
