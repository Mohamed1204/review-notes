const express = require("express")
const reviewNotesRouter = require("./reviewNotes")


const router = express.Router();

router.use("/reviewNotes", reviewNotesRouter);


module.exports = router;
