const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const multer = require("../middleware/multer-config");

const postsCtrl = require("../controllers/posts");

router.post("/", auth, postsCtrl.createPost);
router.put("/:id", auth, postsCtrl.modifyPost);
router.delete("/:id", auth, postsCtrl.deletePost);
router.get('/:id', auth, postsCtrl.getOnePost);
router.get("/", auth, postsCtrl.getAllPosts);
router.post("/:id/like", auth, postsCtrl.likePost);

module.exports = router;
