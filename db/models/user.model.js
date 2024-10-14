import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, 'name is too short'],
        maxLength: [20, 'name is too long'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });


userSchema.pre('save', function () {
    this.password = bcrypt.hashSync(this.password, 8)
})

export const userModel = mongoose.model('user', userSchema);
