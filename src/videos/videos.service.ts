import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateVideoInput } from "../videos/dto/create-video.input";
// import { VideoEntity } from "src/entities/video.entity";
// import { ImageEntity } from "src/entities/image.entity";
import { VideoEntity } from "../entities/video.entity";
import { ImageEntity } from "../entities/image.entity";
import { UpdateVideoInput } from "./dto/update-video.input";
@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(VideoEntity)
    private readonly videoRepository: Repository<VideoEntity>, // @InjectRepository(ImageEntity) // private readonly imageRepository: Repository<ImageEntity>, // private readonly cloudinaryService: CloudinaryService,
  ) {}

  async createVideo(createVideoInput: CreateVideoInput): Promise<VideoEntity> {
    const newVideo = new VideoEntity();
    newVideo.title = createVideoInput.title;
    newVideo.description = createVideoInput.description;
    newVideo.longDescription = createVideoInput.longDescription;
    newVideo.videoType = "standalone";
    newVideo.url = createVideoInput.url;
    newVideo.thumbnail = { id: createVideoInput.thumbnailImage } as ImageEntity;
    // const newVideo: VideoEntity = { ...createVideoInput };
    //       newVideo.thumbnail=
    const saveVideo: VideoEntity = await this.videoRepository.save(newVideo);
    return saveVideo;
    // const insertedVideo = await this.videoRepository.insert({
    //   ...createVideoInput,
    //   thumbnail: { id: createVideoInput.thumbnailImage } as ImageEntity,
    // });
    // return insertedVideo;
    // return await this.videoRepository.insert({
    //   ...createVideoInput,
    //   thumbnail: { id: createVideoInput.thumbnailImage } as ImageEntity,
    // });
  }

  async findAll(): Promise<VideoEntity[]> {
    console.log("findAll get Called!");
    return this.videoRepository.find({ relations: { thumbnail: true } });
  }
  async findByType(videoType: string): Promise<VideoEntity[]> {
    return this.videoRepository.find({
      where: { videoType },
      relations: { thumbnail: true },
    });
  }

  async findById(videoId: string): Promise<VideoEntity> {
    return await this.videoRepository.findOne({
      where: { id: videoId },
      relations: { thumbnail: true },
    });
  }

  async update(id: string, updateVideoInput: UpdateVideoInput) {
    const existingVideo = await this.videoRepository.findOne({ where: { id } });
    if (!existingVideo) {
      throw new BadRequestException("Video not found!");
    }
    const toUpdate = { ...existingVideo, updateVideoInput };
    return await this.videoRepository.save(toUpdate);
  }
}
