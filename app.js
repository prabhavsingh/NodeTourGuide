const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello from server side!",
    app: "Natours",
  });
});

app.post("/", (req, res) => res.send("u can post to thi endpoint..."));

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
