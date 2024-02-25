import PrettyError from 'pretty-error';

function errorLogger(error, req, res, next) {
  const pe = new PrettyError();
  console.log(pe.render(error));
  next(error);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  const name = error.name || 'Internal Server Error';
  let statusCode = error.status || 500;
  let message = error.message || 'Something went wrong';

  // TODO: improve
  if (message.startsWith('Cast to ObjectId')) {
    statusCode = 404;
    message = 'Resource not found';
  }

  const err = {
    statusCode,
    message,
    name: process.env.NODE_ENV === 'development' ? name : undefined,
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  };

  return res.status(statusCode).json(err);
}

function invalidPathHandler(req, res) {
  const statusCode = 404;
  const message = 'Invalid path';

  const response = {
    message,
  };

  return res.status(statusCode).json(response);
}

export { errorLogger, errorHandler, invalidPathHandler };
