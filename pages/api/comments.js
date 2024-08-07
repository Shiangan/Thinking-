import dbConnect from '../../utils/dbConnect';
import Comment from '../../models/Comment';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const comment = new Comment(req.body);
      await comment.save();
      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ error: '提交留言失敗' });
    }
  } else if (req.method === 'GET') {
    try {
      const { obituaryId } = req.query;
      const comments = await Comment.find({ obituaryId });
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: '獲取留言失敗' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
