const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogControlller,
} = require("../controllers/blogController");

const router = express.Router();

//routes
//GET
router.get("/all-blog", getAllBlogsController);

//POST
router.post("/create-blog", createBlogController);

//PUT
router.put("/update-blog/:id", updateBlogController);

//GET single blog
router.get("/get-blog/:id", getBlogByIdController);

//DELETE
router.delete("/delete-blog/:id", deleteBlogController);

//GET || user blog
router.get("/user-blog/:id", userBlogControlller);

module.exports = router;
