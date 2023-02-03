import * as dotenv from "dotenv";

// get data from .env file
dotenv.config();
// export const getConfiguration = () => {
//   return {
//     s3Region: process.env.S3_REGION,
//     accessKeyId: process.env.S3_ACCESS_KEY_ID,
//     secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//     bucketName: process.env.S3_BUCKET,
//   };
// };

const configData = {
  S3_Config: {
    s3Region: process.env.S3_REGION,
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    bucketName: process.env.S3_BUCKET,
    signedUrlExpiryInMinutes: process.env.SIGNED_URL_EXPIRY_IN_MINUTES,
  },
};
export default configData;
