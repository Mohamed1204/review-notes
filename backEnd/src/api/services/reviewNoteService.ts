 import * as reviewNotesDal from "../dal/reviewNotes"


  export const getAll = async (
  limit:number, offset:number
) => {
  console.log("service");
  return await reviewNotesDal.getAll(limit, offset);
}




