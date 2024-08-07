import dbConnect from '../../utils/dbConnect';
import Obituary from '../../models/Obituary';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const obituary = new Obituary(req.body);
      await obituary.save();
      res.status(201).json(obituary);
    } catch (error) {
      res.status(400).json({ error: '提交訃聞失敗' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
