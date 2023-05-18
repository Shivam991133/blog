const blogModel = require('../model/blogModel')
const getAllBlogs = async (req, res) => {
    try {
        const fetchAllBlogs = await blogModel.find({user:req.userId})
        return res.status(200).json({ fetchAllBlogs })  
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const addNewBlog = async (req, res) => {
    const { tittle, category, description } = req.body
    try {
        if (tittle && category && description) {
            const addBlog = await blogModel({
                tittle: tittle,
                category: category,
                description: description,
                thumbnail: req.file.filename,
                user: req.userId._id
            })
            const saveBlog = await addBlog.save();
            console.log(saveBlog)
            if (saveBlog) {
                return res.status(200).json({ message: "Blog Added SuccesFully" });
            }
        } else {
            return res.status(400).json({ message: "All fields are required" });
        }

    } catch (error) {
        return res.status(400).json({ message: error.message });

    }

}

const getSingleBlog = async (req, res) => {
    try {
        const userBlogId = await blogModel.findById(req.params.id);
        if (userBlogId) {
            return res.status(200).json({ message: "Single Blog Found SucesFully" ,result:userBlogId });
        } else {
            return res.status(400).json({ message: "Invalid Url" });
        }

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllBlogs,
    addNewBlog,
    getSingleBlog
}