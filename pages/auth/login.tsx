import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      action="/api/login"
      method="post"
      className="py-8 px-4 w-full bg-teal-50 md:w-1/2 lg:w-1/3 mx-auto rounded"
    >
      <div>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-1 bg-gray-300 w-full rounded"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-1 bg-gray-300 w-full rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 my-1 p-1 text-white rounded"
      >
        Login
      </button>
      <div>
        <Link href="/auth/signup" className="block text-center">
          Create new account
        </Link>
      </div>
    </form>
  );
};

export default LoginPage;
