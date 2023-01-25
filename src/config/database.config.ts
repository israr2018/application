import * as dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";

// import { User } from '../user/entities/user.entity';

// dotenv.config({ path: '../../env' });
dotenv.config();

// export const databaseConfig: any = {
//   type: "postgres",
//   host: process.env.DATABASE_HOST,
//   port: Number(process.env.DATABASE_PORT),
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_DATABASE,
//   // entities: ["dist/**/*.entity{ .ts,.js}"],
//   // migrations: ["dist/migrations/*{.ts,.js}"],
//   // autoLoadEntities: true,
//   migrationsRun: true,
//   synchronize: true,
//   logging: process.env.NODE_ENV !== "development",
// };
export const databaseConfig: DataSourceOptions = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  entities: ["dist/**/*.entity.js"],
  // entities: [User],
  migrations: ["src/migrations/*{.ts,.js}"],
  // cli: {
  //   entitiesDir: 'src/modules',
  //   migrationsDir: 'src/migrations',
  // },

  // autoLoadEntities: true,
  migrationsRun: true,
  synchronize: false,
  logging: process.env.NODE_ENV !== "development",
};
