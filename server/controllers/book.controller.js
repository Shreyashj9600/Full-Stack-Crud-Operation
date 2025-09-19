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

const handelBookListController = async (req, res) => {
    try {
        const bookList = await book.find({})

        return res
            .status(200)
            .json({
                message: "All books fetched successfuly",
                Success: true,
                TotalCount: bookList.length,
                bookList: bookList
            });
    } catch (error) {
        return res
            .status(400)
            .json({ message: error.message, Success: false });
    }
}

const handelBookDeleteController = async (req, res) => {
    const body = req.body;
    try {
        const deleted = await book.deleteOne({ _id: body.Id })
        console.log("deleted", deleted)
        if (deleted.acknowledged) {
            return res
                .json({
                    message: "Book Deleted successfuly",
                    Success: true,
                });
        }
    } catch (error) {
        return res.status(400).json({ message: error.message, Success: false });
    }
}

const handelBookUpdateController = async (req, res) => {
    try {
        const body = req.body;
        const updating = await book.updateOne({ _id: body?._id }, { $set: body })
        if (updating.acknowledged) {
            return res.json({
                message: "book updated successfully !",
                Success: true
            })
        }
    } catch (error) {
        return res.status(400).json({ msg: error.message, Success: false })
    }
}

module.exports = {
    handelBookStoreController,
    handelBookListController,
    handelBookDeleteController,
    handelBookUpdateController
};
