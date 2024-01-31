import { Router } from "express";

import charactersRoutes from '../routes/characters_routes.js';
import planetsRoutes from '../routes/planets_routers.js';
import starshipsRoutes from '../routes/starships_routes.js';

const router = Router();

router.use("/characters", charactersRoutes);
router.use("/planets", planetsRoutes);
router.use("/starships", starshipsRoutes);


export default router;
