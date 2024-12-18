export interface ScriptRequest {
  apiConfig: ApiConfig;
  characterName?: string;
  theme?: string;
  references: Reference;
  language?: string;
  tokenLimit?: number;
  style?: string;
  tone?: "formal" | "casual" | "friendly";
}

export interface ApiConfig {
  apiKey: string;
  baseUrl: string;
}

export interface Reference {
  news: News[];
  signaturePhrases?: SignaturePhrase[];
}

export interface News {
  headline?: string;
  body: string;
  tag?: string;
  source?: string;
  date?: string;
  url?: string;
}

export interface SignaturePhrase {
  text: string;
  category: string;
  importance?: "high" | "medium" | "low";
}
