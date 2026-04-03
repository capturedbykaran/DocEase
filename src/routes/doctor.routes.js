import express from "express";
import {
  getDoctors,
  getDoctorById,
} from "../controllers/doctor.controller.js";

const router = express.Router();

router.get("/", getDoctors);

router.get("/:id", (req, res, next) => {
  console.log("Route /:id HIT");
  next();
}, getDoctorById);

router.get("/test", (req, res) => {
  res.send("Test route working");
});
export default router;