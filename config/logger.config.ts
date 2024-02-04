import bunyan from "bunyan";
const logger = bunyan.createLogger({ name: "server", level: "info" });
export default logger;
