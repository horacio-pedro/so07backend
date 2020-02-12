const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/so07backend', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const app = express();

app.listen(2000);