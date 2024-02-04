import { Router } from "express";
import { FilmsController } from "../controllers/films_controller.js";
import { FilmsMiddleware } from "../middlewares/films_middleware.js";

const router = Router();
const filmController = new FilmsController();
const filmsMiddleware = new FilmsMiddleware();

router.get("/", (req, res) => filmController.getAll(req, res));
router.post("/", filmsMiddleware.validateSearch, (req, res) => filmController.createSearchInput(req, res));

export default router;
