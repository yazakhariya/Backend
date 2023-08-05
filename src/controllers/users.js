const User = require("../models/users");

const getUsers = (request, response) => {
  return User.find({}).then((data) => {
    response.status(200).send(data);
  }).catch(e => response.status(500).send(e.message));
};
const getUserById = (request, response) => {
  const { id } = request.params;
  return User.findById(id).then((user) => {
    response.status(200).send(user);
  }).catch(e => response.status(500).send(e.message));
};
const createUser = (request, response) => {
  return User.create({ ...request.body }).then((user) => {
    response.status(201).send(user);
  }).catch(e => response.status(500).send(e.message));
};
const updateUser = (request, response) => {
  const { id } = request.params;
  return User.findByIdAndUpdate(id, { ...request.body }).then((user) => {
    response.status(200).send(user);
  }).catch(e => response.status(500).send(e.message));
};
const deleteUser = (request, response) => {
  const { id } = request.params;
  return User.findByIdAndDelete(id).then((user) => {
    response
      .status(200)
      .send(`User ${user.firstName} was successfully deleted`);
  }).catch(e => response.status(500).send(e.message));
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
