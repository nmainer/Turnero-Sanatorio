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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppo = exports.newAppo = exports.getDetallAppo = exports.getAppo = void 0;
const data_source_1 = require("../Config/data-source");
const getAppo = () => __awaiter(void 0, void 0, void 0, function* () {
    const turnos = yield data_source_1.turnoModelo.find();
    if (turnos.length === 0) {
        return `no se registran turnos`;
    }
    return turnos;
});
exports.getAppo = getAppo;
const getDetallAppo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turno = yield data_source_1.turnoModelo.findOneBy({ id: id });
    if (!turno) {
        return `no se registran turnos con ese ID`;
    }
    return turno;
});
exports.getDetallAppo = getDetallAppo;
const newAppo = (turno) => __awaiter(void 0, void 0, void 0, function* () {
    const app = yield data_source_1.turnoModelo.create(turno);
    const user = yield data_source_1.usuarioModelo.findOneBy({ id: turno.usuarioId });
    if (user) {
        yield data_source_1.turnoModelo.save(app);
        return `turno creado`;
    }
    else {
        return `usuario inexistente`;
    }
});
exports.newAppo = newAppo;
const cancelAppo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const App = yield data_source_1.turnoModelo.findOneBy({ id: id });
    if (!App) {
        return `turno no encontrado`;
    }
    else {
        App.estado = "cancelado";
        yield data_source_1.turnoModelo.save(App);
        return `turno cancelado`;
    }
});
exports.cancelAppo = cancelAppo;
