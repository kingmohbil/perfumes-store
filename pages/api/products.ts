import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '../../lib/dbConnect';
import Products from '../../models/products';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    dbConnection();
    // Products.create({
    //   name: 'welcome',
    //   image: 'test image',
    // });
    res.status(201).json({});
  } else res.status(404).json(null);
}
