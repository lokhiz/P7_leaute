const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "jwtkey");
    const userId = decodedToken.userId;

    req.auth = {
      userId: userId,
    };

    next();
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.isAdmin = (req, res, next) => {
  auth(req, res, () => {
    if (req.auth.isAdmin) {
      next();
    } else {
      res.status(403).send("Accès refusé.");
    }
  });
};
