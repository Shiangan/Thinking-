import { useState, useEffect } from 'react';

export default function CommentsSection({ obituaryId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch(`/api/comments?obituaryId=${obituaryId}`);
      const data = await res.json();
      setComments(data);
    }
    fetchComments();
  }, [obituaryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ obituaryId, content: newComment }),
    });
    setNewComment('');
    // Refresh comments
    const res = await fetch(`/api/comments?obituaryId=${obituaryId}`);
    const data = await res.json();
    setComments(data);
  };

  return (
    <section className="comments-section">
      <h3 className="text-xl font-semibold mb-4">留言板</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="輸入您的留言..."
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button type="submit" className="btn btn-primary">提交留言</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="mb-2 p-2 border-b border-gray-200">
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
