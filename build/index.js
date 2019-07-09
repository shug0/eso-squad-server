"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const app_1 = __importDefault(require("./app"));
const config_json_1 = __importDefault(require("./sockets/config.json"));
const base_1 = __importDefault(require("./sockets/base"));
// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || "8080");
app_1.default.set("port", port);
const server = http_1.default.createServer(app_1.default);
// Socket IO Config
const io = socket_io_1.default(config_json_1.default);
io.listen(server);
base_1.default(io);
// Listen on provided port, on all network interfaces.
server.listen(port);
server.on("error", onError);
server.on("listening", () => debug_1.default("ekinow-node:server")("Listening on 3000"));
// Normalize a port into a number, string, or false.
function normalizePort(val) {
    const intPort = parseInt(val, 10);
    if (isNaN(intPort)) {
        // named pipe
        return val;
    }
    if (intPort >= 0) {
        // port number
        return intPort;
    }
    return false;
}
// Event listener for HTTP server "error" event.
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
//# sourceMappingURL=index.js.map