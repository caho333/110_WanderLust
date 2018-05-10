// models/example.js

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: String,
    text: String
}, {timestamps: true});

// export
export default mongoose.model('Comment', commentSchema);

/* EOF */