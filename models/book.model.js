var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    category: String,
    price: Number,
    imageUrl: String,
    isBestSeller: Boolean
});

var Book = mongoose.model('Book', bookSchema, 'books');

module.exports = Book;