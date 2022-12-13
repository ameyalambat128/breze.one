// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/dynamodb";

type Data = {
  result: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.send({ result: "Add User" });
  }

  if (req.method === "PUT") {
    const user = {
      email: req.body?.email,
      createdAt: Date.now(),
    };
    const result = await db
      .get({ TableName: "breze-waitlist", Key: { email: req.body?.email } })
      .promise();
    if (result.Item) {
      res.status(409).json({ result: "User already exists" });
    } else {
      // console.log("Adding user", user);
      db.put({
        TableName: "breze-waitlist",
        Item: user,
      }).promise();
      res.status(200).json({ result: "User successfully added" });
    }
  }
}
