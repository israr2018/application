import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { ImageEntity } from "./image.entity";

@Entity({ name: "shows" })
@ObjectType()
export class ShowEntity extends BaseEntity {
  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @JoinColumn()
  @OneToOne(() => ImageEntity, (image) => image.id)
  poster: ImageEntity;

  @JoinColumn()
  @OneToOne(() => ImageEntity, (image) => image.id)
  thumbnail: ImageEntity;
}
