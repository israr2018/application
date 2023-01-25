import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { VideoEntity } from "./video.entity";

@Entity({ name: "playback_info" })
@ObjectType()
export class PlayBackInfoEntity extends BaseEntity {
  // TODO: The attribute type needs to be decided and changed
  @Column()
  @Field()
  type: string;

  @Column()
  @Field()
  manifestURL: string;

  @JoinColumn()
  @OneToOne(() => VideoEntity, (video) => video.id)
  @Field()
  video: VideoEntity;
}
