import "module-alias";
import http from "http";
import expressServerApp from "../app";
import environment_config from "../config/environment.config";
import { variables } from "../constants";
import logger from "../config/logger.config";
import ip from "ip";

environment_config();

const app = expressServerApp();
const server = http.createServer(app);
const port = variables.PORT ?? 4000;
const address = ip.address();
app.set("port", port);

function onListening() {
  return logger.info(`server active on port http://${address}:${port}`);
}

function onError(error: any) {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      logger.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      logger.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

server.on("listening", onListening);
server.on("error", onError);
server.listen(port);
