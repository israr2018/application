import {
  Resolver,
  Query,
  Mutation,
  Args,
  ObjectType,
  Field,
  InputType,
} from "@nestjs/graphql";
import { VideosService } from "./videos.service";
import { VideoEntity } from "../entities/video.entity";
import { CreateVideoInput } from "./dto/create-video.input";
import { VideoType } from "../entities/enums/video-type";
import { S3Service } from "../utils/s3/s3.service";
// import { GraphQLUpload } from "apollo-server-express";
// import { GraphQLUpload } from "graphql-upload";
// import * as FileUpload from "graphql-upload/FileUpload.js";
// import { ImageEntity } from "src/entities/image.entity";
import { UpdateVideoInput } from "./dto/update-video.input";
@InputType()
class VideoTypeFilter {
  @Field()
  type: VideoType;
}

@ObjectType()
class SignedUrl {
  @Field()
  signedUrl: string;
}

@Resolver(() => VideoEntity)
export class VideosResolver {
  constructor(
    private readonly videosService: VideosService,
    private readonly s3Service: S3Service,
  ) {}
  @Mutation(() => VideoEntity)
  createVideo(
    @Args("createVideoInput") createVideoInput: CreateVideoInput,
  ): Promise<VideoEntity> {
    return this.videosService.createVideo(createVideoInput);
  }

  @Query(() => [VideoEntity])
  videos(): Promise<VideoEntity[]> {
    return this.videosService.findAll();
  }

  @Query(() => [VideoEntity])
  videosByType(@Args("type") data: VideoTypeFilter): Promise<VideoEntity[]> {
    return this.videosService.findByType(data.type);
  }

  @Query(() => VideoEntity, { name: "video" })
  findOne(
    @Args("id", { type: () => String }) id: string,
  ): Promise<VideoEntity> {
    return this.videosService.findById(id);
  }

  @Query(() => SignedUrl)
  async getSigneUrl(): Promise<{ signedUrl: string }> {
    return {
      signedUrl: await this.s3Service.getSignedUrl(),
    };
  }

  @Mutation(() => VideoEntity)
  updateVideo(@Args("updateVideoInput") updateVideoInput: UpdateVideoInput) {
    return this.videosService.update(updateVideoInput.id, updateVideoInput);
  }
}
