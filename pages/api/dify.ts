import type { NextApiRequest, NextApiResponse } from "next";
import { CompletionClient } from "dify-client";
import { env } from "@/env";

const API_KEY = env.SCRIPT_GENERATOR_API_KEY;
const BASE_URL = env.NEXT_PUBLIC_DIFY_ENDPOINT;
const user = `random-user-id`;

const completionClient = new CompletionClient(API_KEY, BASE_URL);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await completionClient.createCompletionMessage(
      {
        query: req.body.input,
        tag: "",
      },
      user,
      false
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
