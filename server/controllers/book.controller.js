const { book } = require("../model/book.model");

const handelBookStoreController = async (req, res) => {
    try {
        const body = req.body;
        if (
            !body.bookName ||
            !body.bookTitle ||
            !body.Author ||
            !body.SellingPrice ||
            !body.publishDate
        ) {
            return res
                .status(400)
                .json({ message: "All fields are required ", Success: false });
        }
        const bookAdd = await book.insertOne(body);
        if (bookAdd) {
            return res
                .status(201)
                .json({
                    message: "Data created successfully !",
                    Success: true,
                    Id: bookAdd._id,
                });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message, Success: false });
    }
};

module.exports = {
    handelBookStoreController,
};
