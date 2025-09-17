const mongoose = require('mongoose')

const dataBaseConnection = async () => {

    await mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log('MongoDB Error', err))
}

module.exports = dataBaseConnection