const Post = require("../models/Post");
const fs = require("fs");

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  const post = new Post({
    ...postObject,
    likes: 0,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  post
    .save()
    .then(() => res.status(201).json({ message: "Post enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyPost = (req, res, next) => {
  Post.findOne({ _id: req.params.id }).then((post) => {
    const filename = post.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      const postObject = req.file
        ? {
            ...JSON.parse(req.body.post),
            imageUrl: `${req.protocol}://${req.get("host")}/images/${
              req.file.filename
            }`,
          }
        : { ...req.body };
      Post.updateOne(
        { _id: req.params.id },
        { ...postObject, _id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Post modifié" }))
        .catch((error) => res.status(400).json({ error }));
    });
  });
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Post supprimé" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(400).json({ error }));
};

exports.likePost = (req, res, next) => {
  const postId = req.params.id;
  const userId = req.body.userId;
  const like = req.body.like;

  if (like === 1) {
    Post.updateOne(
      { _id: postId },
      {
        $inc: { likes: like },
        $push: { usersLiked: userId },
      }
    )
      .then((post) => res.status(200).json({ message: "Post liké" }))
      .catch((error) => res.status(500).json({ error }));
  } else if (like === -1) {
    Post.updateOne(
      { _id: postId },
      {
        $inc: { dislikes: -1 * like },
        $push: { usersDisliked: userId },
      }
    )
      .then((post) => res.status(200).json({ message: "Post disliké" }))
      .catch((error) => res.status(500).json({ error }));
  } else {
    Post.findOne({ _id: postId })
      .then((post) => {
        if (post.usersLiked.includes(userId)) {
          Post.updateOne(
            { _id: postId },
            { $pull: { usersLiked: userId }, $inc: { likes: -1 } }
          )
            .then((post) => {
              res.status(200).json({ message: "Post disliké" });
            })
            .catch((error) => res.status(500).json({ error }));
        }
      })
      .catch((error) => res.status(401).json({ error }));
  }
};
