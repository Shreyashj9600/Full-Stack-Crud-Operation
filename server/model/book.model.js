const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        require: true
    },
    bookTitle: {
        type: String,
        require: true
    },
    Author: {
        type: String,
        require: true
    },
    SellingPrice: {
        type: String,
        require: true
    },
    publishDate: {
        type: String
    }
}, { timestamps: true })

const book = mongoose.model('books', bookSchema)

module.exports = { book }