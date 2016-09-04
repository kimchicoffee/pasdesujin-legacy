const express = require('express');

const app = express();

app.use(express.static(__dirname + '/build'));

const PORT = 8000;

app.listen(PORT, function (err) {
  if (err) {
    throw err;
  } else {
    console.info("==> 🌎  Listening on PORT %s. Open up http://localhost:%s/ in your browser.", PORT, PORT);
  }
});

module.exports = app;