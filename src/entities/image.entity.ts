import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity } from "typeorm";

import { BaseEntity } from "./base.entity";

@Entity({ name: "images" })
@ObjectType()
export class ImageEntity extends BaseEntity {
  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  url: string;
}
