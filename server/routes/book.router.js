const express = require('express');
const { handelBookStoreController, handelBookListController } = require('../controllers/book.controller');

const router = express.Router();

// http://localhost:8000/book/addbook
router.post('/addbook', handelBookStoreController)
router.get('/booklists' , handelBookListController)

module.exports = router