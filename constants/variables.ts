import environment_config from "../config/environment.config";
environment_config();

const NODE_ENV = process.env.NODE_ENV as string ?? "";
const LANG_TYPE = process.env.LANG as string ?? "";
const PORT = process.env.PORT as string ?? "";

export {
  NODE_ENV,
  LANG_TYPE,
  PORT
}

