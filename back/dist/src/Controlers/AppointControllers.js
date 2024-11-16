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
exports.appCancelControler = exports.newAppControler = exports.appDetalControler = exports.appGetControler = void 0;
const turnoORM_1 = require("../ServicesTypeORM/turnoORM");
const appGetControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAp = yield (0, turnoORM_1.getAppo)();
        res.status(200).json(getAp);
    }
    catch (error) {
        res.status(404).send(`ERROR usuario: ${error}`);
    }
});
exports.appGetControler = appGetControler;
const appDetalControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const valorAppUs = yield (0, turnoORM_1.getDetallAppo)(id);
        res.status(200).json(valorAppUs);
    }
    catch (error) {
        res.status(404).send(`ERROR: ${error}`);
    }
});
exports.appDetalControler = appDetalControler;
const newAppControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dia, hora, doctor, usuarioId } = req.body;
        const nApp = yield (0, turnoORM_1.newAppo)({ dia, hora, doctor, usuarioId });
        res.status(201).send(nApp);
    }
    catch (error) {
        res.status(400).send(`datos incorrectos, ERROR: ${error}`);
    }
});
exports.newAppControler = newAppControler;
const appCancelControler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const canApp = yield (0, turnoORM_1.cancelAppo)(parseInt(id));
        res.status(200).json(canApp);
    }
    catch (error) {
        res.status(404).send(`ERROR: ${error}`);
    }
});
exports.appCancelControler = appCancelControler;
