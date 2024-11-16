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
exports.Turno = void 0;
const typeorm_1 = require("typeorm");
const Usuarios_1 = require("./Usuarios");
let Turno = class Turno {
};
exports.Turno = Turno;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Turno.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Turno.prototype, "dia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Turno.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Turno.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, default: "pendiente" }),
    __metadata("design:type", String)
], Turno.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Turno.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuarios_1.Usuario, (usuario) => usuario.turnos),
    __metadata("design:type", Usuarios_1.Usuario)
], Turno.prototype, "usuario", void 0);
exports.Turno = Turno = __decorate([
    (0, typeorm_1.Entity)({ name: "turnos" })
], Turno);
