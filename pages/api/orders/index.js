import { getSession } from 'next-auth/react';
import db from '../../../utils/db';
import { connectToDatabase } from '../../../lib/db';
import Order from '../../../models/Order';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  const { user } = session;
  await db.connect();
  const client = await connectToDatabase();

  const usersCollection = client.db().collection('users');

  const foundUser = await usersCollection.findOne({
    email: user.email,
  });

  const newOrder = new Order({
    ...req.body,
    user: user._id ? user._id : foundUser._id,
  });

  const order = await newOrder.save();
  res.status(201).send(order);
};

export default handler;
