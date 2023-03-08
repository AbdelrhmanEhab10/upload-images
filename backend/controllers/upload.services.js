const mongoose = require("mongoose");
const uploadSchema = require("../models/upload.model");

const allUploads = async (req, res) => {
  try {
    const image = await uploadSchema.find({}).sort({ _id: -1 });
    res.status(200).json(image);
  } catch (err) {
    res.status(404).json({ msg: "Data error" });
  }
};

const postImage = async (req, res) => {
  try {
    const { image, title } = req.body;
    const createImage = {
      title,
      image,
    };
    if (createImage) {
      const newImage = await uploadSchema.create(createImage);
      res.status(201).json(newImage);
    }
  } catch (err) {
    res.status(404).json({ msg: "Invalid Data" });
  }
};

const editTitle = async (req, res) => {
  try {
    const { id, title } = req.body;
    const newTitleImage = await uploadSchema.findByIdAndUpdate({ id, title });
    res.status(202).json(newTitleImage);
  } catch (error) {
    res.status(404).json({ msg: "Invalid Data" });
  }
};

const deleteImage = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedImage = await uploadSchema.findByIdAndDelete(id);
    res.status(202).json(newTitleImage);
  } catch (error) {
    res.status(404).json({ msg: "Invalid Data" });
  }
};

module.exports = { allUploads, postImage, editTitle, deleteImage };
