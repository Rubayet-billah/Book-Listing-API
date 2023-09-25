"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/book/book.route");
const category_route_1 = require("../modules/category/category.route");
const order_route_1 = require("../modules/orders/order.route");
const profile_route_1 = require("../modules/profile/profile.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/',
        routes: user_route_1.userRouter,
    },
    {
        path: '/categories',
        routes: category_route_1.categoryRouter,
    },
    {
        path: '/books',
        routes: book_route_1.bookRouter,
    },
    {
        path: '/orders',
        routes: order_route_1.orderRouter,
    },
    {
        path: '/profile',
        routes: profile_route_1.profileRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
