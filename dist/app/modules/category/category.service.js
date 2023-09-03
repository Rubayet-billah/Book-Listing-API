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
exports.categoryService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.category.create({
        data: payload,
    });
    return result;
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield prisma_1.default.category.findMany();
    return categories;
});
const getSingleCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma_1.default.category.findUnique({
        where: {
            id: categoryId,
        },
        include: {
            books: true,
        },
    });
    if (!category) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'No data found');
    }
    return category;
});
const updateCategory = (categoryId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma_1.default.category.findUnique({
        where: {
            id: categoryId,
        },
    });
    if (!category) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'No data found');
    }
    const updatedCategory = yield prisma_1.default.category.update({
        where: {
            id: categoryId,
        },
        data: updatedData,
    });
    return updatedCategory;
});
const deleteCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma_1.default.category.findUnique({
        where: {
            id: categoryId,
        },
    });
    if (!category) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'No data found');
    }
    const deletedCategory = yield prisma_1.default.category.delete({
        where: {
            id: categoryId,
        },
    });
    return deletedCategory;
});
exports.categoryService = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
