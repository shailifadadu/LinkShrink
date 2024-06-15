const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  if (!url) {
    throw new Error("MongoDB URI is not provided.");
  }
  console.log("Connecting to MongoDB with URI:", url); // Debug line
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  connectToMongoDB,
};
