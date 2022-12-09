import React, { useState } from 'react';
import PromptResponse from './PromptResponse';

const Form = () => {
  const [prompt, setPrompt] = useState('');
  const [promptResponse, setPromptResponse] = useState('');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/get-prompt-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data: {
      result: string;
    } = await response.json();
    setPromptResponse(data.result);
  };

  const handleClear = () => {
    setPrompt('');
    setPromptResponse('');
  };
  return (
    <div>
      <form
        action="POST"
        className="block mx-auto p-4"
        onSubmit={submit}
      >
        <div className="block mx-auto p-2 bg-gray-300">
          <label htmlFor="application-type">Prompt:</label>
          <br />
          <textarea
            name="prompt"
            id="prompt"
            cols={10}
            rows={7}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-white p-1"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 block mx-auto p-2 my-1 w-full text-white"
        >
          Submit
        </button>
        <button
          onClick={handleClear}
          className="bg-red-600 block mx-auto p-2 my-1 w-full text-white"
        >
          Clear All
        </button>
      </form>
      {promptResponse && (
        <PromptResponse promptResponse={promptResponse} />
      )}
    </div>
  );
};

export default Form;
