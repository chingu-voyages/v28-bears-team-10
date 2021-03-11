import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var dev = new Schema({
    username: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
    location: {
        type: String,
    },
    skills: {
        type: Array
    },
    description: {
        type: String
    },
    avatar: {
        type: String
    },
    website: {
        type: String
    },
    twitter: {
        type: String
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

var Dev = mongoose.model('Dev', dev);

export default Dev;