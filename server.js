import express from "express";
import bodyParser from "body-parser";
import studentRoutes from "./routes/studentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

const app = express();
app.use(bodyParser.json());

// Mount routes
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
