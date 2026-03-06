import mongoose from "mongoose";

const comment = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  content: {
      required: true,
      type: String
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
    required: true
  }
})

export default mongoose.model('Comment', comment);