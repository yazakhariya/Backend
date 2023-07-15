const Book = require("../models/books");

const getBooks = (request, response) => {
  return Book.find({}).then((data) => {
    response.status(200).send(data);
  }).catch(e => response.status(500).send(e.message));
};
const getBookById = (request, response) => {
  const { id } = request.params;
  return Book.findById(id).then((book) => {
    response.status(200).send(book);
  }).catch(e => response.status(500).send(e.message));
};
const createBook = (request, response) => {
  return Book.create({ ...request.body }).then((book) => {
    response.status(201).send(book);
  }).catch(e => response.status(500).send(e.message));
};
const updateBook = (request, response) => {
  const { id } = request.params;
  return Book.findByIdAndUpdate(id, { ...request.body }).then((book) => {
    response.status(200).send(book);
  }).catch(e => response.status(500).send(e.message));
};
const deleteBook = (request, response) => {
  const { id } = request.params;
  return Book.findByIdAndDelete(id).then((book) => {
    response
      .status(200)
      .send(`Book ${book.bookTitle} was successfully deleted`);
  }).catch(e => response.status(500).send(e.message));
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
