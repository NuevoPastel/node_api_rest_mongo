const moongose = require('mongoose')

const bookSchema = moongose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        publication_date: String,
    }
)

module.exports = moongose.model('Book', bookSchema)