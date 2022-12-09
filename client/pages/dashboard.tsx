import React from 'react';
import Form from '../components/Form';
import { useRouter } from 'next/router';
import mongoose from 'mongoose';

const Dashboard = () => {
  const router = useRouter();

  // useEffect(() => {
  //   if (!mongoose.isAuthenticated) {
  //     router.push('/');
  //   }
  // }, []);

  return (
    <div className="mx-full md:w-1/3 lg:w-1/2 mx-auto">
      <Form />
    </div>
  );
};

export default Dashboard;
