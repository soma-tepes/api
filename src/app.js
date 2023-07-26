const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const globalErrorHander = require('./controllers/error.controller');
//routes
const userRoutes = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const AppError = require('./utils/app.error');
const app = express();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', authRoute);

app.all('*', (req, res, next) => {
  /*  return res.status(404).json({
    status: 'error',
    message: `Cant find ${req.originalUrl} on this server`,
  }); */
  /*  const err = new Error(`Cant find ${req.originalUrl} on this server`);
  err.status = 'error';
  err.statusCode = 404;
  next(err); */
  return next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHander);
module.exports = app;
