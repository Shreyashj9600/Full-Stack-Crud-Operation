const express = require('express');
const { handelBookStoreController } = require('../controllers/book.controller');

const router = express.Router();

// http://localhost:8000/book/addbook
router.post('/addbook', handelBookStoreController)

module.exports = router