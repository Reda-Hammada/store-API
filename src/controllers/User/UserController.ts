import BaseController from "../BaseController";
import UserService from "../../services/UserService";
import UserRepository from "../../repositories/UserRepository";
import jwt from "jsonwebtoken";
import ErrorClass from "../../services/ErrorClass";
import { userPayloadType } from "../../types/user.type";
import process from "process";
import { Request, Response } from "express";
class UserController extends BaseController {
  constructor(private userService: UserService) {
    super();
  }

  protected jwt = jwt;

  public static createInstance = (userService: UserService): UserController => {
    return new UserController(new UserService(new UserRepository()));
  };
  public signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body as any;
    const userCredentials = { email: email, password: password };
    try {
      const user = await this.userService.checkUser(
        userCredentials as userPayloadType
      );
      const userData = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        role: user?.role,
      };
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign({ user: userData }, secret as any);
      this.SuccessResponse(res, 200, "success", { token: token });
    } catch (err) {
      if (err instanceof ErrorClass) {
        switch (err.name) {
          case "NotFoundError":
            this.ErrorrResponse(res, 404, err.message);
            break;
          case "AuthenticationError":
            this.ErrorrResponse(res, 401, err.message);
            break;
        }
      }
    }
  };
  public verifyAccount = async (req: Request, res: Response) => {};
  public forgetPassword = async (req: Request, res: Response) => {};
}

export default UserController;
