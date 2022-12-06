// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
  application: string;
  state: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { application, state } = req.body;

  const response = await openai.createCompletion({
    model: 'text-curie-001',
    prompt: `What documents do I need for ${application} in ${state}? Use bullet points, keep it short.`,
    temperature: 0.7,
    max_tokens: 132,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const text = response.data?.choices?.[0].text;
  if (text === undefined) {
    throw new Error('No result.');
  }
  res.status(200).json({ result: text });
}
