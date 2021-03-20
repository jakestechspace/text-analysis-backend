const rateLimit = require("express-rate-limit");

// limit api to 10 requests / min
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10
});

module.exports = limiter