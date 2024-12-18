import { ScriptRequest } from "../domain/scriptTypes";
import { CompletionClient } from "dify-client";

export class DifyMapper {
  static createClient(request: ScriptRequest): CompletionClient {
    return new CompletionClient(
      request.apiConfig.apiKey,
      request.apiConfig.baseUrl
    );
  }

  static createCompletionInput(request: ScriptRequest): {
    inputs: any;
    user: { user_id: string };
  } {
    return {
      inputs: {
        query: request.references.news[0].body,
        tag: request.references.news[0].tag,
      },
      user: {
        user_id: `user_${Date.now()}`,
      },
    };
  }
}
