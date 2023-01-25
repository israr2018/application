import { Entity, JoinColumn, OneToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { VideoEntity } from "./video.entity";

@Entity({ name: "standalone" })
export class StandaloneEntity extends BaseEntity {
  @JoinColumn()
  @OneToOne(() => VideoEntity, (video) => video.id)
  video: VideoEntity;
}
