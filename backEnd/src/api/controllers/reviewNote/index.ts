import * as service from "../../services/reviewNoteService"


export const getAll = async (limit: number, offset:number) => {
    
  return (await service.getAll(limit, offset))

}
 

