const mongoose = require("mongoose");

const DBConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo DB connect successfully");
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports =  DBConnect ;
