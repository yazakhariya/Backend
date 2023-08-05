const addressLogger = (request, responce, next) => {
  console.log("http://localhost:3006");
  next();
};

module.exports = addressLogger;
