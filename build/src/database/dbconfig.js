"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
// const dbConfig = new DataSource({
//   type: "mysql",
//   host: "localhost",
//   username: "root",
//   password: "****",
//   database: "honey_12",
//   synchronize: true,
//   logging: true,
//   //   entities: [],
//   //   subscribers: [],
//   //   migrations: [],
// });
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: parseInt(process.env.TYPEORM_DBPORT || "3306"),
    logging: true,
    synchronize: true,
    entities: [path_1.default.join(__dirname, "../ent-relation-1-to-1/*.ts")],
    // entities: [User],
});
exports.AppDataSource = AppDataSource;
