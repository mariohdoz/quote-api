const express = require('express');

app = express();

app.use(require('./home.routes'));
app.use(require('./quotes.routes'));

module.exports = app;  