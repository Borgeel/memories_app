import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Indexes
postSchema.index({ createdAt: -1 }); // Descending index for sorting by creation date
postSchema.index({ tags: 1, createdAt: -1 }); // Compound index for tags and sorting by creation date
postSchema.index({ likes: -1 }); // Descending index for querying posts by likes
postSchema.index({ creator: 1 }); // Ascending index for querying posts by creator
postSchema.index({ title: "text", message: "text" }); // Text indexes for full-text search
postSchema.index({ comments: -1 }); // Descending index for querying posts by comments

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
