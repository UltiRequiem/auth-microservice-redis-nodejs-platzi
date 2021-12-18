import { Router } from "express";

import { success } from "../../../network/response.js";
import { list } from "./controller.js";

const router = Router();

router.get("/", (req, res) => {
  success(res, list());
});

export default router;
