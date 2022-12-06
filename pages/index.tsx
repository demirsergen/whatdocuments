import Head from 'next/head';
import type { NextPage } from 'next';
import Form from '../components/Form';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="WhatDocuments App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
