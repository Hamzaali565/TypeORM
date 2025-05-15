import { Response, Router } from "express";
import { create_user } from "../controller/user";

const router = Router();

router.get("/api/v1/user", create_user);

export default router;
