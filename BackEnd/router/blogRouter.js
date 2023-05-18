const { getAllBlogs, addNewBlog, getSingleBlog } = require('../controller/blogController');
const multer = require('multer');
const verifyToken = require('../middleWare/auth');
const Router = require('express').Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

Router.get('/getAllBlogs', verifyToken, getAllBlogs);
Router.post('/addNewBlog', upload.single('thumbnail'), verifyToken, addNewBlog);
Router.get('/getSingleBlog/:id', verifyToken, getSingleBlog);

module.exports = Router;