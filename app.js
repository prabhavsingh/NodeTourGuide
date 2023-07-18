const express = require("express");
const fs = require("fs");

const app = express();

//adds body data on req - data from the body is added to req object
app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "hello from server side!",
//     app: "Natours",
//   });
// });

// app.post("/", (req, res) => res.send("u can post to thi endpoint..."));
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    () => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
});

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
