"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./api/router"));
const app = express_1.default();
app.use(cors_1.default({
    credentials: true,
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}));
// LOGGER & PARSER
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// API ROUTING
app.use("/api", router_1.default);
// Export APP
exports.default = app;
//# sourceMappingURL=app.js.map