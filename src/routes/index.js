import { Router } from "express";

import charactersRoutes from '../routes/characters_routes.js';
import planetsRoutes from '../routes/planets_routers.js';
import starshipsRoutes from '../routes/starships_routes.js';
import filmsRoutes from "../routes/films_route.js";

const router = Router();

router.use("/characters", charactersRoutes);
router.use("/planets", planetsRoutes);
router.use("/starships", starshipsRoutes);
router.use("/films", filmsRoutes);
router.use("/search_film", filmsRoutes);

export default router;
