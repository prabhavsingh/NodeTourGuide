const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
  // console.log(con.connection);
  console.log('DB connection successful!');
});

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ' A tour must have a name'],
    unique: true,
  },
  rating: {
    typr: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Tour = mongoose.Model('Tour', tourSchema);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
