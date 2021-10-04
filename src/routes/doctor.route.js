import Router from 'express-promise-router';
import {
    getDoctor,
    getAllDoctors,
    createDoctor,
    deleteDoctor,
    editDoctor
} from '../controllers/doctor.controller';

const router = Router();

router.get("/:id", getDoctor);
router.put("/:id", editDoctor);
router.get("/", getAllDoctors);
router.post("/add", createDoctor);
router.delete("/:id", deleteDoctor);

export default router;