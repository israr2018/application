import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { TypeOrmAsyncConfig } from "./config/typeorm.config";
import { VideosModule } from "./videos/videos.module";
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "../env",
    }),
    UserModule,
    TypeOrmModule.forRootAsync(TypeOrmAsyncConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    VideosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
