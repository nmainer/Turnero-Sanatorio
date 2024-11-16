"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter_1 = __importDefault(require("./UserRouter"));
const AppointUsers_1 = __importDefault(require("./AppointUsers"));
const routerIndex = (0, express_1.Router)();
routerIndex.use("/users", UserRouter_1.default);
routerIndex.use("/appointments", AppointUsers_1.default);
exports.default = routerIndex;
