const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// getting all the categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "category_name"],
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "category_name"],
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creating a category
router.post("/", async (req, res) => {
  try {
    const categoryCreate = await Category.create({
      
        category_name: req.body.category_name,
     
    });
    res.status(200).json(categoryCreate);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: "Nothing found with that ID" });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const categoryDel = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryDel) {
      res.status(404).json({ message: "Nothing found with that ID" });
      return;
    }
    res.status(200).json(categoryDel);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
