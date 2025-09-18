const express = require("express");
const {
    handelBookStoreController,
    handelBookListController,
    handelBookDeleteController,
} = require("../controllers/book.controller");

const router = express.Router();

// http://localhost:8000/book/addbook
router.post("/addbook", handelBookStoreController);
router.get("/booklists", handelBookListController);
router.post("/deletebook", handelBookDeleteController);

module.exports = router;
