const reviewNote = require("../dal/reviewNotes")

module.exports = {
  getAll : async (
  limit, offset
) => {
  console.log("service");
  return await reviewNote.getAll(limit, offset);
}

}


