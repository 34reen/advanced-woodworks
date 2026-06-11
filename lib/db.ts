import mysql from "mysql2/promise";
console.log(process.env.DB_NAME);

const requiredEnvVars = [
  "DB_HOST",
  "DB_USER",
  "DB_NAME",
];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
