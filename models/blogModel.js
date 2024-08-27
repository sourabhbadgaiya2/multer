const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
  image: {
    type: String,
    default:
      'https://media.wired.com/photos/5b17381815b2c744cb650b5f/master/w_2560%2Cc_limit/GettyImages-134367495.jpg',
  },
});

module.exports = mongoose.model('imgage', blogSchema);
