import { Response, Router } from "express";
import {
  create_user,
  delete_user,
  find_user,
  update_user,
} from "../controller/user";
import { find_query } from "../controller/findQuery";
import { insert_user } from "../controller/1-to-1";

const router = Router();

router.post("/api/v1/user", create_user);
router.get("/api/v1/user", find_user);
router.put("/api/v1/user", update_user);
router.delete("/api/v1/user", delete_user);
router.get("/api/v1/find_query", find_query);

// 1 to 1 //
router.post("/api/v1/user_one_one", insert_user);

export default router;
