import dotenv from "dotenv";
import path from "path";
const env = process.env.NODE_ENV;
const location = `../env/${env}.env`;

export default () => dotenv.config({ path: path.join(__dirname, location) });
