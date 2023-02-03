import { Injectable } from "@nestjs/common";
import { InjectAwsService } from "nest-aws-sdk";
import { S3 } from "aws-sdk";
import configData from "../../config/config";
const { S3_Config } = configData;

@Injectable()
export class S3Service {
  constructor(@InjectAwsService(S3) private readonly s3: S3) {}

  async getSignedUrl() {
    try {
      const randomId: number = Math.random() * 1000;
      const Key = `${randomId}.jpg`;
      const expiryInSeconds = parseInt(S3_Config.signedUrlExpiryInMinutes) * 60;
      const signedUrl = this.s3.getSignedUrl("putObject", {
        Bucket: S3_Config.bucketName,
        Key: Key,
        Expires: expiryInSeconds,
      });

      return signedUrl;
    } catch (error) {
      console.log("error=>", error);
      return "Something went wrong";
    }
  }
}
