const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    platform: {
        type: String,
        enum: ['facebook', 'twitter', 'inestgram'],
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    profileLink: {
        type: String,
        required: true,
    },
    followersCount: {
        type: Number,
        default: 0,
    },
    postsCount: {
        type: Number,
        default: 0,
    },
    engagementRate: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

export const accountModel = mongoose.model('account', accountSchema);
