import { Router } from "express";

import reviewNotesRouter  from "./reviewNotes"


const router = Router();

router.use("/reviewNotes", reviewNotesRouter);


export default router
