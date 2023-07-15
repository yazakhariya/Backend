const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
    minlength: 2,
  },
  bookAuthor: {
    type: String,
    required: true,
    minlength: 2,
  },
  releaseDate: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("book", bookSchema);
