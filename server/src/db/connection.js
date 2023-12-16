const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Group4:WebAppDevCOMP229@userdata.zgbrtd1.mongodb.net/';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log(err));

module.exports = mongoose;
