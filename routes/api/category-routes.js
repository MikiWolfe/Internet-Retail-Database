const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categories = await Category.findAll()

  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.fideByPk(req.params.id);
    if (!category){
      res.status(404).json({ message :"No category found with this ID"})
      return;
    }
    res.status(200).json(category)
  }
  catch (err){
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
try {
  const category = await Category.create({
    // creat new category here
    // username: req.body.username,
    // email: req.body.email,
    // password: req.body.password,
    // numberOfPets: req.body.numberOfPets,

  });
  res.status(200).json(category);
} catch (err)
{
  res.status(500).json(err)
}
});

  // update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: { 
      id: req.params.id,
    },
    });
    if (!category[0]){
      res.status(404).json({ message: 'No category with this id found'})
      return
    }
res.status(200).json(category)
  } catch (err) {
res.status(500).json(err)
  }
});

 // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
    try {
const category = await Category.delete(req.body, {
  where: {
    id: req.params.id,
  }
}) 
if (!category[0]){
  res.status(404).json({message: 'No category with this id found'})
  return
}
res.status(200).json(category);
  }
  catch (err) {
res.status(500).json(err)
  }
 
});

module.exports = router;
