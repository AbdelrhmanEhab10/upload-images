const express = require("express");
const {
  allUploads,
  postImage,
  editTitle,
  deleteImage,
} = require("../controllers/upload.services");
const router = express.Router();

router.get("/all", allUploads);
router.post("/", postImage);
router.patch("/edit", editTitle);
router.delete("/delete", deleteImage);

module.exports = router;
