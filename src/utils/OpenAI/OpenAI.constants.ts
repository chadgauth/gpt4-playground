import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "gpt-4": {
    id: "gpt-4",
    name: "GPT-4",
    maxLimit: 8192,
  },
  "gpt-4-0613": {
    id: "gpt-4-0613",
    name: "GPT-4 (06/13)",
    maxLimit: 8192,
  },
  "gpt-4-32k": {
    id: "gpt-4-32k",
    name: "GPT-4 (32k)",
    maxLimit: 32768,
  },
  "gpt-4-32k-0613": {
    id: "gpt-4-32k-0613",
    name: "GPT-4 (32k, 06/13)",
    maxLimit: 32768,
  },
  "gpt-4-0314": {
    id: "gpt-4-0314",
    name: "GPT-4 (03/14)",
    maxLimit: 8192,
  },
  "gpt-4-32k-0314": {
    id: "gpt-4-32k-0314",
    name: "GPT-4 (32k, 03/14)",
    maxLimit: 32768,
  },
  "gpt-3.5-turbo": {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    maxLimit: 4097,
  },
  "gpt-3.5-turbo-16k": {
    id: "gpt-3.5-turbo-16k",
    name: "GPT-3.5 Turbo (16k)",
    maxLimit: 16385,
  },
  "gpt-3.5-turbo-0613": {
    id: "gpt-3.5-turbo-0613",
    name: "GPT-3.5 Turbo (06/13)",
    maxLimit: 4097,
  },
  "gpt-3.5-turbo-16k-0613": {
    id: "gpt-3.5-turbo-16k-0613",
    name: "GPT-3.5 Turbo (16k, 06/13)",
    maxLimit: 16385,
  },
  "gpt-3.5-turbo-0301": {
    id: "gpt-3.5-turbo-0301",
    name: "GPT-3.5 Turbo (03/01)",
    maxLimit: 4097,
  },
  "text-davinci-003": {
    id: "text-davinci-003",
    name: "Text Davinci 003",
    maxLimit: 4097,
  },
  "text-davinci-002": {
    id: "text-davinci-002",
    name: "Text Davinci 002",
    maxLimit: 4097,
  },
  "code-davinci-002": {
    id: "code-davinci-002",
    name: "Code Davinci 002",
    maxLimit: 8001,
  },
};
