const Guest = require('../models/Guest');
const express = require('express');
const router = express.Router();

// index

router.get('/guests', async (req, res) => {
	res.json(await Guest.find({}));
});

// post

router.post('/guests', async (req, res) => {
	res.json(await Guest.create(req.body));
});

//get one by id

router.get('/guests/:id', async (req, res) => {
	res.json(await Guest.findById(req.params.id));
});

//update one by id route

router.put('/guests/:id', async (req, res) => {
	res.json(
		await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true })
	);
});

//delete one by id

router.delete('/guests/:id', async (req, res) => {
	res.json(await Guest.findByIdAndRemove(req.params.id));
});

module.exports = router;
