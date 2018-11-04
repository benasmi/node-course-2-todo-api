var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://node:BenasMiliunas123@ds249873.mlab.com:49873/node_api');

module.exports = {
  mongoose: mongoose
};
