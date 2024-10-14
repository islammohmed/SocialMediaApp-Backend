const audienceSchema = new mongoose.Schema({
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: true,
    },
    ageGroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export const audienceModel = mongoose.model('audience', audienceSchema);
