const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const hbs = require('hbs');

const indexRouter = require('./controllers/index');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Register Handlebars partials (if you're using partials)
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Use Morgan for logging
app.use(logger('dev'));

// Built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the router for the root URL
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

