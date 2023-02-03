import { Module } from "@nestjs/common";
import { VideosService } from "./videos.service";
import { VideosResolver } from "./videos.resolver";
import { VideoEntity } from "src/entities/video.entity";
import { ImageEntity } from "src/entities/image.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";
import { S3Module } from "src/utils/s3/s3.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([VideoEntity, ImageEntity]),
    CloudinaryModule,
    S3Module,
  ],
  providers: [VideosResolver, VideosService],
})
export class VideosModule {}
