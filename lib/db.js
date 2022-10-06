import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://oyolcinar:admin1023admin1023@cluster0.3r7mi8f.mongodb.net/Medilab?retryWrites=true&w=majority',
  );

  return client;
}
