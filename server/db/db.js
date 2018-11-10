var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://node:BenasMiliunas123@ds249873.mlab.com:49873/node_api');

module.exports = {
  mongoose: mongoose
};
