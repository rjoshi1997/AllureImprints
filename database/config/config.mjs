// import * as dotenv from "dotenv";
// dotenv.config();

export const options = {
  username: 'root',
  password: 'Allure@2025',
  database: 'allure_imprints',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: 'development',
  migrationStorageTableName: "migrations",
};

// if (process.env.NODE_ENV == "production") {
//   options.dialectOptions = {
//     ssl: {
//       rejectUnauthorized: true,
//     },
//   };
// }

export default {
  development: options,
  production: options,
};
