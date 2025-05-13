import { DataSource } from "typeorm";

// const dbConfig = new DataSource({
//   type: "mysql",
//   host: "localhost",
//   username: "root",
//   password: "Hamzaali565!",
//   database: "honey_12",
//   synchronize: true,
//   logging: true,
//   //   entities: [],
//   //   subscribers: [],
//   //   migrations: [],
// });

const dbConfig = new DataSource({
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  logging: true,
  synchronize: true,
});

export { dbConfig };
