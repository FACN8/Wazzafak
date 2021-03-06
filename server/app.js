const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const compression = require('compression');
const controllers = require('./controllers/index');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(controllers);
module.exports = app;
