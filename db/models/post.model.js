const postSchema = new mongoose.Schema({
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: true,
    },
    postId: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likesCount: {
        type: Number,
        default: 0,
    },
    commentsCount: {
        type: Number,
        default: 0,
    },
    sharesCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

export const postModel = mongoose.model('post', postSchema);
