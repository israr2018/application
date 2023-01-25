import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { BaseEntity } from "./base.entity";
import { ShowEntity } from "./show.entity";

@Entity({ name: "seasons" })
@ObjectType()
export class SeasonEntity extends BaseEntity {
  @Column()
  @Field()
  name: string;

  @JoinColumn()
  @ManyToOne(() => ShowEntity, (show) => show.id)
  @Field()
  show: ShowEntity;
}
