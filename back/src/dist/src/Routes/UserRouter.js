"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../Controlers/userController");
const routerUsers = (0, express_1.Router)();
routerUsers.get("/", userController_1.getUserControler);
routerUsers.get("/:id", userController_1.getIdControler);
routerUsers.post("/register", userController_1.postRegisterControler);
routerUsers.post("/login", userController_1.postLoginControler);
exports.default = routerUsers;
