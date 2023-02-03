import { CreateVideoInput } from "./create-video.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateVideoInput extends PartialType(CreateVideoInput) {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  longDescription: string;

  @Field(() => String)
  url: string;
}
