"use strict";
// src/app/modules/order/order.service.ts
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
exports.orderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createOrder = (userId, orderData) => __awaiter(void 0, void 0, void 0, function* () {
    // Implement your logic to create an order here
    // You'll need to save the order in the database and associate it with the user
    // Example code (replace with actual implementation):
    const result = yield prisma_1.default.order.create({
        data: Object.assign(Object.assign({ userId }, orderData), { status: 'pending' }),
    });
    return result;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    // Implement your logic to retrieve all orders here
    const orders = yield prisma_1.default.order.findMany();
    return orders;
});
const getCustomerOrders = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    // Implement your logic to retrieve orders for a specific customer here
    const existingUser = yield prisma_1.default.user.findUnique({
        where: {
            id: customerId,
        },
    });
    if (!existingUser) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const customerOrders = yield prisma_1.default.order.findMany({
        where: {
            userId: customerId,
        },
    });
    return customerOrders;
});
const getSingleOrderById = (orderId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield prisma_1.default.user.findUnique({
        where: {
            id: userId,
        },
    });
    const order = yield prisma_1.default.order.findUnique({
        where: {
            id: orderId,
        },
    });
    if ((existingUser === null || existingUser === void 0 ? void 0 : existingUser.role) !== 'admin' && (order === null || order === void 0 ? void 0 : order.userId) !== userId) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not authorized');
    }
    return order;
});
exports.orderService = {
    createOrder,
    getAllOrders,
    getCustomerOrders,
    getSingleOrderById,
};
