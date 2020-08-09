const app = require('express').express();

app.use(require('./home.routes'));

module.exports = app;  