const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const postsCtrl = require("../controllers/posts");

router.post("/", auth, multer, postsCtrl.createPost);
router.put("/:id", auth, multer, postsCtrl.modifyPost);
router.delete(":/id", auth, postsCtrl.deletePost);
router.get("/", auth, postsCtrl.getAllPosts);
router.post("/:id/like", auth, postsCtrl.likePost);

module.exports = router;
