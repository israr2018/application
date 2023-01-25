import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { VideosService } from "./videos.service";
import { VideoEntity } from "../entities/video.entity";
import { CreateVideoInput } from "./dto/create-video.input";
// import { GraphQLUpload, FileUpload } from "graphql-upload";
import * as GraphQLUpload from "graphql-upload/GraphQLUpload.js";
// import * as FileUpload from "graphql-upload/FileUpload.js";
import { ImageEntity } from "src/entities/image.entity";
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

  @Query(() => [VideoEntity], { name: "videos" })
  videos() {
    return this.videosService.findAll();
  }

  @Query(() => VideoEntity, { name: "video" })
  findOne(
    @Args("id", { type: () => String }) id: string,
  ): Promise<VideoEntity> {
    return this.videosService.findById(id);
  }
  // @Query(() => ImageEntity, { name: "thumbnailImage" })
  // getThumbImage(@Parent() videoEntity: VideoEntity): Promise<ImageEntity> {
  //   return this.videosService.getVideoThumbnail(videoEntity.thumbnailId)
  // }

  @Mutation(() => Int, { name: "uploadThumbnail" })
  async uploadThumbnail(
    @Args("fName") fName: string,
    @Args("lName") lName: string,
    @Args("thumbnail", { type: () => GraphQLUpload }) thumbnail: FileUpload,
  ): Promise<number> {
    console.log(fName);
    console.log(lName);
    console.log(thumbnail);
    return 1;
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
