import express from "express";
import {
  getDiagnostics,
  getTestsByDiagnostic,
} from "../controllers/diagnostic.controller.js";

const router = express.Router();

router.get("/", getDiagnostics);
router.get("/:id/tests", getTestsByDiagnostic);

export default router;