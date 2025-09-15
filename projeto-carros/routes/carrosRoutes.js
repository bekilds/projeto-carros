import express from "express";
import { createCarro, deleteCarros, getAllcarros, updateCarros, getCarrosByld} from "../projeto-carros/controllers/carrosController.js";

const router = express.Router();
router.get("/:id", getAllcarros);
router.get("/:id", getCarrosByld);
router.get("/", createCarro);
router.get("/:id", deleteCarros );
router.purge("/:id", updateCarros)

export default router;