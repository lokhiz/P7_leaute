const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const User = require("../models/User");

exports.register = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Identifiant ou mot de passe incorrecte" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              return res
                .status(401)
                .json({ message: "Identifiant ou mot de passe incorrecte" });
            } else {
              const token = jwt.sign(
                { userId: user._id, isAdmin: user.isAdmin },
                "jwtkey"
              );

              res
                .cookie(
                  "access_token",
                  token,
                  { maxAge: 86400000 },
                  {
                    httpOnly: true,
                    secure: true,
                    sameSite: false,
                  }
                )
                .status(200)
                .json("Token created");
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.logout = (req, res, next) => {
  const token = jwt.sign("jwtkey", "a");

  res
    .cookie(
      "access_token",
      token,
      { maxAge: 1 },
      {
        httpOnly: true,
        secure: true,
        sameSite: false,
      }
    )
    .status(200)
    .json("Disconnected.");
};
