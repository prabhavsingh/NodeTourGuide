const Tour = require('../model/tourModel');

// exports.checkID = (req, res, next, val) => {
//   console.log(`tour id is: ${val}`);
//   if (val * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'invalid id',
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'missing name or price',
//     });
//   }
//   next();
// };

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  const tours = Tour.find();
  res.status(200).json({
    status: 'success',
    // results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  //   console.log(req.params);
  //   const id = req.params.id * 1;
  //   // const tour = tours.find((el) => el.id === id);
  // const tour=Tour.findById(id)
  //   res.status(200).json({
  //     status: 'success',
  //     results: tours.length,
  //     data: {
  //       tour,
  //     },
  //   });
};

exports.createTour = async (req, res) => {
  try {
    // const newTour=new Tour({})
    // newTour.save()

    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'invalid data sent!',
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<updated tourd here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
