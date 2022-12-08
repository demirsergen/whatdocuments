import React from 'react';

type Props = {
  promptResponse: String;
};

const PromptResponse: React.FC<Props> = ({ promptResponse }) => {
  return (
    <div className="p-4 bg-gray-600">
      <p className="text-white">{promptResponse}</p>
    </div>
  );
};

export default PromptResponse;
