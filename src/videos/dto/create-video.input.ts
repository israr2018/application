import { InputType, Field } from "@nestjs/graphql";

// import { Stream } from "stream";
// export interface FileUpload {
//   filename: string;
//   mimetype: string;
//   encoding: string;
//   createReadStream: () => Stream;
// }

@InputType()
export class CreateVideoInput {
  @Field(() => String, { description: "title field" })
  title: string;

  @Field(() => String, { description: "description " })
  description: string;

  @Field(() => String, { description: "Long Descriptoin  " })
  longDescription: string;

  @Field(() => String, { description: "url " })
  url: string;

  @Field(() => String, { nullable: true })
  thumbnailImage: string;

  @Field(() => String, { nullable: true })
  videoType: string;

  // @Field(() => String, { description: "portraitPoster field" })
  // portraitPoster: string;

  // @Field(() => GraphQLUpload, { description: "landscapePoster field" })
  // landscapePoster: string;
}
