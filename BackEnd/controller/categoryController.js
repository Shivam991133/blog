const categoryModel = require('../model/categoryModel');
const getAllCategory = async (req, res) => {
    try {
        const fetchALlCategrory = await categoryModel.find({});
        if (fetchALlCategrory){
            return res.status(200).json({ result: fetchALlCategrory });
        } else {
            return res.status(404).json({ message: "No Category Found"});
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const addNewCategory = async (req, res) => {
    try {
        const { tittle } = req.body;
        if (tittle) {
            const newCategory = await categoryModel({
                tittle
            })
            const saveCateogry = await newCategory.save();
            if (saveCateogry) {
                return res.status(200).json({ message: "Category Added SuccesFully", result : saveCateogry})
            }
        } else {
            return res.status(400).json({ message: "ALl fields are required" });
        }

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllCategory,
    addNewCategory
}