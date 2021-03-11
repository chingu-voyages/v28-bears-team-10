import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var charity = new Schema({
    name: {
        type: String,
        required: true
    },
});

mongoose.models = {};

var Charity = mongoose.model('Charity', charity);

export default Charity;