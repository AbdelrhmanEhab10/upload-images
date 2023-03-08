const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const DBConnect = require("./DBConnect/DBConnection");

dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/upload", require("./routes/upload.routes"));

DBConnect();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
