import React, { useState } from 'react';
import DocumentList from './DocumentList';

const Form = () => {
  const [application, setApplication] = useState('');
  const [state, setState] = useState('');
  const [documentList, setDocumentList] = useState('');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/what-documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ application, state }),
    });
    const data: { result: string } = await response.json();
    setDocumentList(data.result);
    setState('');
    setApplication('');
  };

  return (
    <div>
      <form
        action="POST"
        className="block mx-auto p-4"
        onSubmit={submit}
      >
        <div className="block mx-auto p-2 bg-gray-300">
          <label htmlFor="application-type">Application:</label>
          <br />
          <input
            type="text"
            name="application"
            id="application"
            value={application}
            onChange={(e) => setApplication(e.target.value)}
            className="w-full bg-white p-1"
          />
        </div>
        <div className="block mx-auto p-2 bg-gray-300">
          <label htmlFor="state">State:</label>
          <br />
          <input
            type="text"
            name="state"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full bg-white p-1"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 block mx-auto p-2 my-1 w-full"
        >
          Submit
        </button>
      </form>
      {documentList && (
        <DocumentList
          documents={documentList}
          state={state}
          application={application}
        />
      )}
    </div>
  );
};

export default Form;
