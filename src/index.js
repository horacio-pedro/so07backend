const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors')

mongoose.connect('mongodb://localhost/so07backend', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use((req, res) => {
	req.io = io
})

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resize')))
app.use(require('./routes'))

app.listen(2000);