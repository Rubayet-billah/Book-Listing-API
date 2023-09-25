"use strict";
// src/app/modules/user/user.route.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/auth/signup', user_controller_1.userController.signupUser);
router.post('/auth/signin', user_controller_1.userController.loginUser);
router.get('/users', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.userController.getAllUsers);
router.get('/users/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.userController.getSingleUser);
router.patch('/users/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.userController.updateUser);
router.delete('/users/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.userController.deleteUser);
exports.userRouter = router;
