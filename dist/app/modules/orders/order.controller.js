"use strict";
// src/app/modules/order/order.controller.ts
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
exports.orderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const order_service_1 = require("./order.service");
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user; // Extract user ID from the authenticated user
    const orderData = req.body;
    const result = yield order_service_1.orderService.createOrder(userId, orderData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Order created successfully',
        data: result,
    });
}));
const getAllOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const orders = yield order_service_1.orderService.getAllOrders(user);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Orders retrieved successfully',
        data: orders,
    });
}));
const getCustomerOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.user; // Extract user ID from the authenticated user
    const customerOrders = yield order_service_1.orderService.getCustomerOrders(userId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Customer orders retrieved successfully',
        data: customerOrders,
    });
}));
const getSingleOrderById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orderId } = req.params;
    const { userId } = req.user;
    const order = yield order_service_1.orderService.getSingleOrderById(orderId, userId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Order fetched successfully',
        data: order,
    });
}));
exports.orderController = {
    createOrder,
    getAllOrders,
    getCustomerOrders,
    getSingleOrderById,
};
