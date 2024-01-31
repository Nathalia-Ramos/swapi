import { Router } from "express";
import { starshipController } from "../controllers/starships_controller.js";

const router = Router();

const starshipsController = new starshipController();

router.get("/", (req, res) => starshipsController.getAll(req, res));

export default router;
