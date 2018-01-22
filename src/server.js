const express = require('express');
const pets = require('./pets.js');

const app = express();
app.use(express.static('src/public'));

app.get('/pets', function (req, res) {
  var urls = pets.getPets();
  res.send(urls);
})

app.listen(3000, () => console.log('web server listening on port 3000!'));


