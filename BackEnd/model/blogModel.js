const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    tittle: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        refer: "category"
    },
    description: {
        type: String
    },
    thumbnail: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refer: "Users"
    }
})


const blogModel = mongoose.model('Blog', blogSchema);
module.exports = blogModel;
