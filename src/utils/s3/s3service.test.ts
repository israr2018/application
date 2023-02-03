import { Test, TestingModule } from "@nestjs/testing";
import { S3Service } from "./s3.service";
class MockS3Service {}
describe("S3Service", () => {
  let service: S3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S3Service],
    }).compile();

    service = module.get<S3Service>(S3Service);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

// describe("generatePresignedUrl", () => {
//   it("should generate a valid pre-signed URL", () => {
//     const params = {
//       Bucket: "example-bucket",
//       Key: "example-key",
//       Expires: 60,
//     };

//     const url = generatePresignedUrl("getObject", params);
//     expect(url).toMatch(
//       /^https:\/\/example-bucket.s3.amazonaws.com\/example-key\?[A-Za-z0-9\?&=]*$/,
//     );
//   });
// });
