const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const router = require('./routes');
require('env2')('.env');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;