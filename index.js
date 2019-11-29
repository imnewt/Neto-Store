const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/netodb", { useNewUrlParser: true });

const Book = require("./models/book.model");

app.get('/books', async (req, res) => {
   const books = await Book.find();
   res.send(books);
})

app.listen(5000, () => {
   console.log('App listening on port 5000')
})