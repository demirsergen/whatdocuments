import React, { useState } from 'react';
import DocumentList from '../components/DocumentList';

const Dashboard = () => {
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
        className="py-8 px-4 w-full md:w-1/2 lg:w-1/3 mx-auto rounded bg-teal-50"
        onSubmit={submit}
      >
        <div className="rounded">
          <label htmlFor="application-type">Application:</label>
          <br />
          <input
            type="text"
            name="application"
            id="application"
            value={application}
            onChange={(e) => setApplication(e.target.value)}
            className="w-full  p-1 rounded bg-gray-300"
          />
        </div>
        <div className=" rounded">
          <label htmlFor="state">State:</label>
          <br />
          <input
            type="text"
            name="state"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full p-1 rounded bg-gray-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 my-1 p-1 text-white rounded"
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

export default Dashboard;
