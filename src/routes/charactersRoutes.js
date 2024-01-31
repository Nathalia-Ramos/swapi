import { Router } from "express";
import { CharacterController } from "../controllers/characters _controller.js";

const router = Router();

const characterController = new CharacterController();

router.get("/characters", (req, res) => characterController.getAll(req, res));

export default router;
