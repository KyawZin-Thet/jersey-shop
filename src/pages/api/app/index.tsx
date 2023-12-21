import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if (method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).send("Unauthorized.");
    console.log(session);

    res.status(200).json("ok");
  }
  res.status(405).send("Method not allowed.");
}
