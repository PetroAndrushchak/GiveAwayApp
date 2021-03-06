require("dotenv").config();
var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");
var authRoutes = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.json({ message: "Make a POST requst to /api/auth/signup to signup" });
});

app.use('/api/auth', authRoutes);

const PORT = 8081

app.listen(PORT, function(){
  console.log(`Server is listening on port ${PORT}`);
});