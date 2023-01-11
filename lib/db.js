import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export async function connectToDatabase() {
  const client = await MongoClient.connect(uri);

  return client;
}

export async function disconnectFromDatabase() {
  const client = await MongoClient.close();

  return client;
}
