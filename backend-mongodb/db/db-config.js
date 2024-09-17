const mongoose = require('mongoose');

const connectToMongo = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  };
  
  connectToMongo();

module.exports = connectToMongo;