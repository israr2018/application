import { Field, ObjectType } from "@nestjs/graphql";

import { Column, Entity, OneToOne, JoinColumn } from "typeorm";

import { BaseEntity } from "./base.entity";
import { VideoType } from "./enums/video-type";
import { ImageEntity } from "./image.entity";

@Entity({ name: "videos" })
@ObjectType()
export class VideoEntity extends BaseEntity {
  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  longDescription: string;

  @Column()
  @Field()
  url: string;

  @Column({ type: "enum", enum: VideoType })
  videoType: string;

  // @JoinColumn()
  // @OneToOne(() => ImageEntity, (image) => image.id)
  // @Field()
  // landscapePoster: ImageEntity;

  // @JoinColumn()
  // @OneToOne(() => ImageEntity, (image) => image.id)
  // @Field()
  // portraitPoster: ImageEntity;

  @JoinColumn()
  @OneToOne(() => ImageEntity, (image) => image.id)
  @Field()
  thumbnail: ImageEntity;
}
