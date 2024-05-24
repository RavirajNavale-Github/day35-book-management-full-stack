const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    author: String,
    releaseYear: Number,
    category: String,
});

const Book = mongoose.model('books', bookSchema);

module.exports = Book;