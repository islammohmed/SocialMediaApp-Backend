const analyticsSchema = new mongoose.Schema({
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    followersGrowth: {
        type: Number,
        default: 0,
    },
    engagementRate: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

export const analyticsModel = mongoose.model('analytics', analyticsSchema);
