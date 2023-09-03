"use strict";
// src/app/modules/order/order.route.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
// Create Order (Only Allowed For Customer)
router.post('/create-order', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.orderController.createOrder);
// Get All Orders (Only Allowed For Admins)
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), order_controller_1.orderController.getAllOrders);
// Get All Orders for Specific Customer (Specific Customers Only)
router.get('/customer-orders', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.orderController.getCustomerOrders);
router.get('/:orderId', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER, user_1.ENUM_USER_ROLE.ADMIN), // Allow specific customers and admins
order_controller_1.orderController.getSingleOrderById);
exports.orderRouter = router;
