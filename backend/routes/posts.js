const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const multer = require("../middleware/multer-config");

const postsCtrl = require("../controllers/posts");

router.post("/", postsCtrl.createPost);
router.put("/:id", postsCtrl.modifyPost);
router.delete("/:id", postsCtrl.deletePost);
router.get('/:id', postsCtrl.getOnePost);
router.get("/", postsCtrl.getAllPosts);
router.post("/:id/like", postsCtrl.likePost);

module.exports = router;
