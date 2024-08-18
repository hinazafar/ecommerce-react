const mongoose = require('mongoose');

const connectToMongo = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  };
  
  connectToMongo();

module.exports = connectToMongo;