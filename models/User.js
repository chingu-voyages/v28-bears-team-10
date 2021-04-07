import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
    username: {
        type: String,
        required: true
    },
    userType: {
        enum: ['volunteer', 'charity', 'unknown'],
        default: 'unknown'
    },
    profileUpdated: {
        type: Boolean,
        default: false
    },
    location: {
        type: String
    },
    description: {
        type: String,
        maxlength: 150
    },
    avatar: {
        type: String
    },
    job_listings: {
        type: Array
    },
    website: {
        type: String
    },
    twitter: {
        type: String
    },
    skills: {
        type: Array
    },
    linkedin: {
        type: String
    },
    github: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;
