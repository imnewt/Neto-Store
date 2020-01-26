const Book = require('../../models/book.model');

module.exports.index = async (req, res, next) => {
    const books = await Book.find();
    res.send({
        success: true,
        message: books
    });
}