import type { NextApiRequest, NextApiResponse } from 'next';
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
  prompt: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = req.body;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `I'm going to give you a prompt and I need you to explain it like I'm a 10 year old kid. Make it funny and interesting. Prompt:${prompt}`,
    temperature: 0.7,
    max_tokens: 150,
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
