const Tour = require('../model/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  //1. Get tour data from collection
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = async (req, res) => {
  const [tour] = await Tour.find({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'revview rating user',
  });

  res.status(200).render('tour', {
    title: tour.title,
    tour,
  });
};
