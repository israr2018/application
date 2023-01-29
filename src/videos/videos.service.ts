/* eslint-disable no-restricted-imports */
import { ConsoleLogger, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RelationId, Repository } from "typeorm";

import { CreateVideoInput } from "../videos/dto/create-video.input";
import { VideoEntity } from "src/entities/video.entity";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { ImageEntity } from "src/entities/image.entity";
import { VideoType } from "src/entities/enums/video-type";
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
    const saveVideo: VideoEntity = await this.videoRepository.save(newVideo);
    return saveVideo;
  }

  async findAll(): Promise<VideoEntity[]> {
    console.log("findAll get Called!");
    return this.videoRepository.find({ relations: { thumbnail: true } });
  }

  async findById(videoId: string): Promise<VideoEntity> {
    return await this.videoRepository.findOne({
      where: { id: videoId },
      relations: { thumbnail: true },
    });
  }
}
