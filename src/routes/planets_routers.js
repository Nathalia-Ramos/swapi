import { Router } from "express";
import { PlanetController } from "../controllers/planets_controller.js";

const router = Router();

const planetController = new PlanetController();

router.get("/", (req, res) => planetController.getAll(req, res));

export default router;
