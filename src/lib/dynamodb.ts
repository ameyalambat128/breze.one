import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION_AMPROW,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID_AMPROW,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_AMPROW,
});

const db = new AWS.DynamoDB.DocumentClient();

export default db;
