import mongoose from 'mongoose';

const connection = {};

const connect = async () => {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(
    process.env.NEXT_PUBLIC_MONGODB_URI
  );

  connection.isConnected = db.connections[0].readyState;
};

export default connect;
