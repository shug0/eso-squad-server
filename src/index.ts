import debug from "debug";
import http from "http";
import SocketServer from "socket.io";

import app from "./app";
import socketConfig from "./sockets/config.json";
import initSocket from "./sockets/base";

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

const server = http.createServer(app);

// Socket IO Config
const io = SocketServer(socketConfig);
io.listen(server);
initSocket(io);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on("error", onError);
server.on("listening", () => debug("ekinow-node:server")("Listening on 3000"));

// Normalize a port into a number, string, or false.
function normalizePort(val: string) {
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
function onError(error: any) {
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
