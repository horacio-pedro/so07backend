const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

mongoose.connect('mongodb://localhost/so07backend', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const app = express();

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resize')))
app.use(require('./routes'))

app.listen(2000);