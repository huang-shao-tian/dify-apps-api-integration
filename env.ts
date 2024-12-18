import { z } from "zod";

export const env = z
  .object({
    NEXT_PUBLIC_DIFY_ENDPOINT: z.string(),
    SCRIPT_GENERATOR_API_KEY: z.string(),
  })
  .parse(process.env);
