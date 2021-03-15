import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var dev = new Schema({
    name: {
        type: String,
        required: true
    },
});

mongoose.models = {};

var Dev = mongoose.model('Dev', dev);

export default Dev;