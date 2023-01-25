import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String, { description: "Example field (placeholder)" })
  id: string;

  @Column()
  @Field(() => String, { description: "Example field (placeholder)" })
  firstName: string;

  @Column()
  @Field(() => String, { description: "Example field (placeholder)" })
  lastName: string;

  @Column()
  @Field(() => String, { description: "Example field (placeholder)" })
  email: string;
}
