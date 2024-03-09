"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = __importDefault(require("../BaseController"));
const UserService_1 = __importDefault(require("../../services/UserService"));
const UserRepository_1 = __importDefault(require("../../repositories/UserRepository"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ErrorClass_1 = __importDefault(require("../../services/ErrorClass"));
const process_1 = __importDefault(require("process"));
class UserController extends BaseController_1.default {
    constructor(userService) {
        super();
        this.userService = userService;
        this.signIn = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const userCredentials = { email: email, password: password };
            try {
                const user = yield this.userService.checkUser(userCredentials);
                const userData = {
                    firstName: user === null || user === void 0 ? void 0 : user.firstName,
                    lastName: user === null || user === void 0 ? void 0 : user.lastName,
                    email: user === null || user === void 0 ? void 0 : user.email,
                    role: user === null || user === void 0 ? void 0 : user.role,
                };
                const secret = process_1.default.env.JWT_SECRET;
                const token = jsonwebtoken_1.default.sign({ user: userData }, secret, {
                    expiresIn: 2 * 24 * 60 * 60 * 1000,
                });
                res.cookie("token", token, {
                    httpOnly: true,
                    sameSite: "strict",
                    maxAge: 2 * 24 * 60 * 60 * 1000,
                    secure: true,
                });
                this.SuccessResponse(res, 200, "success", {
                    messge: "You habe been logged successfully",
                });
            }
            catch (err) {
                if (err instanceof ErrorClass_1.default) {
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
        });
        this.verifyAccount = (req, res) => __awaiter(this, void 0, void 0, function* () { });
        this.forgetPassword = (req, res) => __awaiter(this, void 0, void 0, function* () { });
    }
}
UserController.createInstance = (userService) => {
    return new UserController(new UserService_1.default(new UserRepository_1.default()));
};
exports.default = UserController;
