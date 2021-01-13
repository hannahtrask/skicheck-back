const { Schema, model } = require('mongoose');
const mongoose = require('../db/connection');

const guestSchema = new Schema({
	lastName: { type: String, required: true },
	firstName: { type: String, required: true },
	skiOrSnowboard: { type: String, required: true },
	length: { type: Number, required: true },
	slot: { type: String, required: true },
});

const Guest = model('Guest', guestSchema);

module.exports = Guest;
