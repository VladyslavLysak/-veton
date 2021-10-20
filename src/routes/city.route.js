import Router from 'express-promise-router';
import {
    getCity,
    getAllCities,
    createCity,
    deleteCity,
    editCity
} from '../controllers/city.controller';

const router = Router();

router.get("/:id", getCity);
router.put("/:id", editCity);
router.get("/", getAllCities);
router.post("/add", createCity);
router.delete("/:id", deleteCity);

export default router;