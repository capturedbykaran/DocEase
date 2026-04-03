import express from "express";
import cors from "cors";

import doctorRoutes from "./routes/doctor.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true , limit: "16kb" }));
// Routes   
app.use("/api/doctors", doctorRoutes);

export default app;