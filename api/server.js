require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
	process.env.DB_URL, { useNewUrlParser: true }
);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

// Send requests of posts to postRouter
const postRouter = require('./routes/posts');
app.use('/posts', postRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
})