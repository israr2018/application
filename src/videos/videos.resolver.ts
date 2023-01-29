import { Resolver, Query, Mutation, Args, Parent } from "@nestjs/graphql";
import { VideosService } from "./videos.service";
import { VideoEntity } from "../entities/video.entity";
import { CreateVideoInput } from "./dto/create-video.input";
import { ImageEntity } from "src/entities/image.entity";
// import { GraphQLUpload } from "apollo-server-express";
// import { GraphQLUpload } from "graphql-upload";
// import * as FileUpload from "graphql-upload/FileUpload.js";
// import { ImageEntity } from "src/entities/image.entity";
// import { UpdateVideoInput } from "./dto/update-video.input";

@Resolver(() => VideoEntity)
export class VideosResolver {
  constructor(private readonly videosService: VideosService) {}
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

  @Query(() => VideoEntity, { name: "video" })
  findOne(
    @Args("id", { type: () => String }) id: string,
  ): Promise<VideoEntity> {
    return this.videosService.findById(id);
  }

  // @Mutation(() => Video)
  // updateVideo(@Args("updateVideoInput") updateVideoInput: UpdateVideoInput) {
  //   return this.videosService.update(updateVideoInput.id, updateVideoInput);
  // }

  // @Mutation(() => Video)
  // removeVideo(@Args("id", { type: () => Int }) id: number) {
  //   return this.videosService.remove(id);
  // }
}
