const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    tittle: {
        type: String
    }
})

const categoryModel = mongoose.model('category', categorySchema)
module.exports = categoryModel;