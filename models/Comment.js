import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  obituaryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Obituary', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
