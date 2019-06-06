const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('../db/index.js');

app.use(bodyParser());
app.use(cors());
app.use((req, res, next) => {
  console.log(`serving a ${req.method} request at ${new Date} to url ${req.url}`);
  next();
})

app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/bundle.js', express.static(__dirname + '/../client/dist/bundle.js))'));

app.get('/sweApps', (req, res) => {
  db.getSweApps((err, results) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.send(err);
    } else {
      res.json(results);
    }
  })
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})