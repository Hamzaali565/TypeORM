import { Response, Router } from "express";
import {
  create_user,
  delete_user,
  find_user,
  update_user,
} from "../controller/user";

const router = Router();

router.post("/api/v1/user", create_user);
router.get("/api/v1/user", find_user);
router.put("/api/v1/user", update_user);
router.delete("/api/v1/user", delete_user);

export default router;
