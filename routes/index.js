const express = require('express');
const router = express.Router();
const Blog = require('../models/blogModel');
const upload = require('../utils/multer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
      image: req.file.filename,
    });
    await newBlog.save();
    res.redirect('/');
  } catch (error) {
    res
      .status(500)
      .json({ message: 'An error occurred', error: error.message });
  }
});

module.exports = router;
