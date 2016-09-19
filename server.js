const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, function (err) {
  if (err) {
    throw err;
  } else {
    console.info("==> 🌎  Listening on PORT %s. Open up http://localhost:%s/ in your browser.", PORT, PORT);
  }
});

module.exports = app;