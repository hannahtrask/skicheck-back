//environmental variables//
require('dotenv').config();
const { PORT = 4000, NODE_ENV = 'development' } = process.env;

//mongo connection
const mongoose = require('./db/connection');

//cors
const cors = require('cors');
const corsOptions = require('./configs/cors.js');

//express
const express = require('express');
const app = express();

//middleware
NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());

//route to test server
app.get('/', (req, res) => {
	res.json({ msg: 'default route set' });
});

//controllers
const guestController = require('./controllers/guest');
app.use('/skis', guestController);

//listener
app.listen(PORT, () => {
	console.log(`Running on PORT ${PORT}`);
});
