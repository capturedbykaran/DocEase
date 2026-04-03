import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import diagnosticRoutes from "./routes/diagnostic.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true , limit: "16kb" }));
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/diagnostics", diagnosticRoutes);

export default app;