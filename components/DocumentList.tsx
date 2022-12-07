import React from 'react';

const DocumentList = ({ documents, state, application }) => {
  const list = documents.split('\n');
  return (
    <div>
      <p>
        Documents needed for {application} in {state}
      </p>
      <ul className="p-4 text-white mx-auto">
        {list?.map((item: string, i: number) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default DocumentList;
