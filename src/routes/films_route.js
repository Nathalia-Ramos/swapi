import { Router } from "express";
import { FilmsController } from "../controllers/films_controller.js";

const router = Router();

const filmController = new FilmsController();

router.get("/", (req, res) => filmController.getAll(req, res));

export default router;
