const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/resumeapp', {useNewUrlParser: true});

const sweAppSchema = mongoose.Schema({
  name: String,
  jobTitle: String,
  techs: Array,
  description: String,
  bullets: Array
})

const SweApp = mongoose.model('SweApp', sweAppSchema);

const getSweApps = (callback) => {
  let query = SweApp.find({});

  query.exec((err, docs) => {
    if (err) {
      console.log(`error getting SWE Apps from MongoDB: ${err}`);
      callback(err, null);
    } else {
      console.log(`MongoDB query successful!`);
      callback(null, docs);
    }
  })
}

module.exports.getSweApps = getSweApps;