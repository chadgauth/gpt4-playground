import { OpenAIChatModels, OpenAIModel } from "@/utils/OpenAI";
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = (req.headers["authorization"] as string)?.split(" ")[1];
  if (!apiKey) {
    return res.status(401).json({ error: "Missing token" });
  }

  const openAi = new OpenAI({
    apiKey,
  });

  try {
    const { data } = await openAi.models.list();
  const models = data.map<Record<string, OpenAIModel>>(({ id }) => ({ id: id }));

    // Get the list of models

    //const models = data.map<Record<string, OpenAIModel>>(({ id }) => [id]: { id: id });

    // Get the models that can interface with the chat API and return
    // Assuming data is your Model array
  const chatModels = data.map<OpenAIModel>(({ id, maxLimit }) => {
      return {
          id: id,
          name: id, // Replace with actual value
          maxLimit,    // Replace with actual value
      };
  });


    return res.status(200).json({
      models,
      chatModels,
    });
  } catch (e: any) {
    if (e.response) {
      return res.status(e.response.status).json({ error: e.response.data });
    }

    return res.status(500).json({ error: e.message });
  }
}
