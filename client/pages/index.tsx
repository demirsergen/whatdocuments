import Head from 'next/head';
import type { NextPage } from 'next';
import LoginPage from './auth/login';

const Home: NextPage = () => {
  // work on this.
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="WhatDocuments App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoginPage />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;

// export async function getServerSideProps(context) {
//   const client = await clientPromise;

//   const db = client.db('nextjs-openai-demo');

//   let users = await db.collection('users').find({}).toArray();
//   users = JSON.parse(JSON.stringify(users));

//   return {
//     props: { users },
//   };
// }
