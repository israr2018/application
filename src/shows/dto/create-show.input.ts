import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateShowInput {
  @Field(() => Int, { description: "Example field (placeholder)" })
  exampleField: number;
}
