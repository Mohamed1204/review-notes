const express = require("express");

const reviewNotesController = require('../controllers/reviewNote/index')
const reviewNotesRouter = express.Router();




reviewNotesRouter.get('/:offset/:limit', async (req, res) => {
  try {
    const limit = parseInt(req.params.limit)
    const offset = parseInt(req.params.offset)
    console.log("route");
    console.log(offset)
    console.log(limit)

    const results = await reviewNotesController.getAll(limit, offset);

    
    return res.status(200).send(results);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});


module.exports = reviewNotesRouter
