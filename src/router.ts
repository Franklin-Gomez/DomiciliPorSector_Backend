import { Router } from "express";
import { SectorController } from "./controllers/SectorController";

const router = Router()

router.post('/' , SectorController.createSector )
router.get('/' , SectorController.getAllSector)
router.get('/validate' , SectorController.validateSectors )
router.delete('/:id' , SectorController.deleteSector )

export default router