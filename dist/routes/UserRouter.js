"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../utils/router"));
const UserController_1 = __importDefault(require("../controllers/User/UserController"));
const UserService_1 = __importDefault(require("../services/UserService"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const middlewares_1 = __importDefault(require("../middlewares"));
const Validator_1 = __importDefault(require("../middlewares/Validator"));
const userController = UserController_1.default.createInstance(new UserService_1.default(new UserRepository_1.default()));
const router = (0, router_1.default)();
router
    .route("/")
    .post([middlewares_1.default.validateRequest(Validator_1.default.signInValidator)], userController.signIn);
