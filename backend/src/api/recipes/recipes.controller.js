const express = require("express");
const router = express.Router();
const recipesService = require("./recipes.service");

/* POST req to create a recipe */
router.get("/createRecipe", async (req, res, next) => {
  try {
    // const ingredients = req.body.ingredients;
    const { recipe } = await recipesService.createRecipe();
    return res.status(200).json({ recipe });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
