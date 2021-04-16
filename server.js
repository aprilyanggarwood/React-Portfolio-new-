const path = require("path");
const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const transporter = require("./config");

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(cors());
app.use(express.json());
app.get("/test", (req, res) => res.json("server running!"));
app.post("/contact", async (req, res) => {
  //send to db or email, etc...
  try {
    await transporter.sendMail({
      from: `"Fred Foo 👻" <${process.env.email}>`, // sender address
      to: "rgyyhappy@outlook.com", // list of receivers
      subject: `Hello from ${req.body.name} ✔`, // Subject line
      // plain text body
      html: `<b>${req.body.email} sent you an email!
      
      ${req.body.message}</b>`,
    });
  } catch (err) {
    console.log(err);
  }
  console.log("someone contacted you!, data - ", JSON.stringify(req.body));
  res.json(true);
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
