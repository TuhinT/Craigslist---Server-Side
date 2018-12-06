const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('_helpers/db');
const Home = db.Home;


const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date,default: Date.now},
    cart: {type: Array, default:[]},
    isAdmin: {type: Boolean,default: 0},
    address: String,
    contact: String
});

schema.set('toJSON', { virtuals: true });
schema.set('versionKey', false);

module.exports = mongoose.model('User', schema);