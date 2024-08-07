import dbConnect from '../../utils/dbConnect';
import Obituary from '../../models/Obituary';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const obituaries = await Obituary.find({});
      res.status(200).json(obituaries);
