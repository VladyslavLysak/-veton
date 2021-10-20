import Router from 'express-promise-router';
import {
    getDoctor,
    getAllDoctors,
    createDoctor,
    deleteDoctor,
    editDoctor,
    getPopularDoctors
} from '../controllers/doctor.controller';

const router = Router();

router.get("/id/:id", getDoctor);
router.put("/id/:id", editDoctor);
router.get("/", getAllDoctors);
router.get("/popular", getPopularDoctors);
router.post("/add", createDoctor);
router.delete("/id/:id", deleteDoctor);

export default router;