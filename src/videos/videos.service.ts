/* eslint-disable no-restricted-imports */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateVideoInput } from "../videos/dto/create-video.input";
import { VideoEntity } from "src/entities/video.entity";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { ImageEntity } from "src/entities/image.entity";
@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(VideoEntity)
    private readonly videoRepository: Repository<VideoEntity>,
    @InjectRepository(ImageEntity)
    private readonly imageRepository: Repository<ImageEntity>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async createVideo(createVideoInput: CreateVideoInput): Promise<VideoEntity> {
    const newVideo = new VideoEntity();
    newVideo.title = createVideoInput.title;
    newVideo.description = createVideoInput.description;
    newVideo.longDescription = createVideoInput.longDescription;
    const cloudinaryUrl: string = await this.cloudinaryService.uploadBase64(
      createVideoInput.thumbnailImage,
    );
    const newImage = new ImageEntity();
    newImage.title = "thumbnail";
    newImage.url = cloudinaryUrl;
    newImage.description = "descriptions";

    const image: ImageEntity = await this.imageRepository.save(newImage);
    newVideo.thumbnail = image;
    return await this.videoRepository.create(newVideo);
    // return newVideo;
  }

  async findAll(): Promise<VideoEntity[]> {
    // return this.showRepository.find({ relations: { images: true } });
    return await this.videoRepository.find();
  }

  async findById(videoId: string): Promise<VideoEntity> {
    return await this.videoRepository.findOne({
      where: { id: videoId },
    });
  }
  async getVideoThumbnail(imageEntity: string): Promise<ImageEntity> {
    return this.imageRepository.findOne({ where: { id: videoId } });
  }
}
