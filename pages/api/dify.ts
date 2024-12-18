import type { NextApiRequest, NextApiResponse } from "next";
import { CompletionClient } from "dify-client";

import { DifyMapper } from "@/types/mapper/difyMapper";
import { ScriptRequest } from "@/types/domain/scriptTypes";
import { env } from "@/env";

const API_KEY = env.SCRIPT_GENERATOR_API_KEY;
const BASE_URL = env.NEXT_PUBLIC_DIFY_ENDPOINT;
const news = [
  {
    body: "【新唐人北京時間2024年12月17日訊】川普拉來軟銀千億投資 點評美國「無人機」怪象；歐盟第15輪對俄制裁 首次全面制裁中國實體；英法院曝光中共間諜嫌犯身分 曾伴王子10年； 德國總理議會信任投票落敗 明年二月提前大選；川普關稅在即 中國經濟正陷入惡性循環；《木法沙》卡司夜會倫敦 泰晤士河畔唱響獅子王。",
    tag: "",
  },
];
// const user = `random-user-id`;

// const completionClient = new CompletionClient(API_KEY, BASE_URL);

const scriptRequest: ScriptRequest = {
  apiConfig: {
    apiKey: API_KEY,
    baseUrl: BASE_URL,
  },
  references: {
    news: news,
  },
};

const client = DifyMapper.createClient(scriptRequest);
const input = DifyMapper.createCompletionInput(scriptRequest);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await client.createCompletionMessage(
      input.inputs,
      input.user,
      false
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
