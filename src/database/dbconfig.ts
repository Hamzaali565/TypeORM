import path from "path";
import { DataSource } from "typeorm";

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

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: parseInt(process.env.TYPEORM_DBPORT || "3306"),
  logging: true,
  synchronize: true,
  entities: [path.join(__dirname, "../ent-many-to-many/*.ts")],
  // entities: [User],
});

export { AppDataSource };
