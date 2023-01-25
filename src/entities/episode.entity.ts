import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { SeasonEntity } from "./season.entity";
import { VideoEntity } from "./video.entity";

@Entity({ name: "episodes" })
@ObjectType()
export class EpisodeEntity extends BaseEntity {
  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @JoinColumn()
  @ManyToOne(() => SeasonEntity, (season) => season.id)
  @Field()
  season: SeasonEntity;

  @JoinColumn()
  @OneToOne(() => VideoEntity, (video) => video.id)
  @Field()
  video: VideoEntity;
}
