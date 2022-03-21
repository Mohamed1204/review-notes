const service = require("../../services/reviewNoteService")



module.exports = {

   getAll : async (limit, offset) => {
    console.log("controller");
  return (await service.getAll(limit, offset))
}

}
 

