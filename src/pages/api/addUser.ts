// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/dynamodb";

type Data = {
  result: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PUT") {
    const user = {
      email: req.body?.email,
      createdAt: Date.now(),
    };
    db.get({ TableName: "breze-waitlist", Key: { email: req.body?.email } })
      .promise()
      .then((data) => {
        if (data.Item) {
          res.status(409).json({ result: "Already exists" });
        } else {
          db.put({
            TableName: "breze-waitlist",
            Item: user,
          }).promise();
          res.status(200).json({ result: "Success" });
        }
      });
  }
}
