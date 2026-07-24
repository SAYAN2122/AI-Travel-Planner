const errorHandler = (err, req, res, next) => {
  console.error("=================================");
  console.error(err);
  console.error("=================================");

  res.status(err.status || err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandler;