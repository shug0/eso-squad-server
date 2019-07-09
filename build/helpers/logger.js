"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const log = console.log;
exports.logDone = (task) => log("✅", chalk_1.default.green(task));
exports.logInfo = (info) => log("💬", chalk_1.default.grey(info));
exports.logError = (err) => log("⛔️", chalk_1.default.red(err));
//# sourceMappingURL=logger.js.map