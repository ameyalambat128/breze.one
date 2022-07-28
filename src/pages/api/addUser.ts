// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../lib/dynamodb";
import * as uuid from "uuid";

type Data = {
  id: string;
  email: string;
  createdAt: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PUT") {
    const user = {
      id: uuid.v4(),
      email: req.body?.email,
      createdAt: Date.now(),
    };

    db.put({
      TableName: "breze-waitlist",
      Item: user,
    }).promise();

    res.status(201).json(user);
  }
}
