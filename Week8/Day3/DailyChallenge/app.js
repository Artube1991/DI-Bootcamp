const express = require('express');
const userRouter = require('./server/__routes/userRouter.js');
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "register.html"));
});

// app.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "login.html"));
// });

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
});

app.use("/", userRouter);