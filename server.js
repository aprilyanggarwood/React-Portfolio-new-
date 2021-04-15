const path = require("path");
const router = express.Router();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(expree.static(path.resolve(__dirname, "../client/build")));
app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
  //send to db or email, etc...
  console.log("someone contacted you!, data - ", JSON.stringify(req.body));
});

// app.get("/api", (req, res) => {
//   res.json({ message: "hello from server!" });
// });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
