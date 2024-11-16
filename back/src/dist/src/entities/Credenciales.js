"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credencial = void 0;
const typeorm_1 = require("typeorm");
const Usuarios_1 = require("./Usuarios");
let Credencial = class Credencial {
};
exports.Credencial = Credencial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Credencial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Credencial.prototype, "nameUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Credencial.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Usuarios_1.Usuario, (usuario) => usuario.credencial),
    __metadata("design:type", Usuarios_1.Usuario)
], Credencial.prototype, "user", void 0);
exports.Credencial = Credencial = __decorate([
    (0, typeorm_1.Entity)({ name: "credenciales" })
], Credencial);
;
