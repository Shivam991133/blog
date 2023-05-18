const mongoose = require('mongoose');
const url = process.env.URL
const db = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database is Connected Successfully...");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = db;
