const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/Hello')
  .then(() => {
    console.log(`db isc connectd`);
  })
  .catch((err) => {
    console.log(err.message);
  });
