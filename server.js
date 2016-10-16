const express = require('express');
const path = require('path');
const stormpath = require('express-stormpath');

const app = express();

app.use(express.static(__dirname + '/build'));

app.use(stormpath.init(app, {
  // Disable logging until startup, so that we can catch errors
  // and display them nicely.
  debug: 'none',
  web: {
    produces: ['application/json']
  }
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, function (err) {
  if (err) {
    throw err;
  } else {
    console.info("==> 🌎  Listening on PORT %s. Open up http://localhost:%s/ in your browser.", PORT, PORT);
    app.get('stormpathLogger').transports.console.level = 'error';
  }
});

module.exports = app;