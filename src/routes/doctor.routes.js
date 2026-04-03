import express from "express";
import {
  getDoctors,
  addDoctor,
} from "../controllers/doctor.controller.js";

const router = express.Router();

router.get("/", getDoctors);
router.post("/", addDoctor);

export default router;