const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "jwtkey");
    const userId = decodedToken.user._id;

    req.auth = {
      userId: userId,
    };

    next();
  } catch (error) {
    res.status(400).json({ error });
  }
};