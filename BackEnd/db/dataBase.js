const mongoose = require('mongoose');
const db = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log(process.env.URL)
    console.log("Database is Connected Successfully...");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = db;
