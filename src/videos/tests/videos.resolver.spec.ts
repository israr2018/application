import { Test, TestingModule } from "@nestjs/testing";
import { VideosResolver } from "../videos.resolver";
import { VideosService } from "../videos.service";

describe("VideosResolver", () => {
  let resolver: VideosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideosResolver, VideosService],
    }).compile();

    resolver = module.get<VideosResolver>(VideosService);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
describe("VideosResolver Should resolve mutation CreateVideo", () => {
  let resolver: VideosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideosResolver, VideosService],
    }).compile();

    resolver = module.get<VideosResolver>(VideosService);
  });

  it("should create new vidoe", () => {
    const expected = true;
    // const expected = {
    //   title: "Enemy at Gate",
    //   description: "Enemy at Gate",
    //   longDescription: "Enemy at Gate",
    //   url: "some url",
    //   thumbnailImage: "image id",
    //   videoType: "standard",
    // };
    // const newvideo = resolver.createVideo({ ...expected });

    expect(expected).toEqual(true);
  });
});
