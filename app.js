const express = require("express");
const path = require("path");

const app = express();

const workingHours = require("./middleware/workingHours");
const pageRoutes = require("./routes/pages");

// View Engine

app.set("view engine", "ejs");

// Static files

app.use(express.static(path.join(__dirname, "public")));

// Middleware

app.use(workingHours);

// Routes

app.use("/", pageRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});