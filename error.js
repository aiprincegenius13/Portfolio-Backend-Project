// Error-handling middleware
function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({
        error: {
            status,
            message,
        },
    });
}

function handleError(error) {
    console.error(`[ERROR]: ${error.message}`);
  }
  
  function notFound(req, res) {
    res.status(404).send('Not Found');
  }
  
  module.exports = {
    handleError,
    notFound,
  };
  
module.exports = errorHandler;
