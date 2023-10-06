const express = require("express");
const ApiError = require("./app/api-error");
const contactRouter = require(".app/routes.contact.route");

const app = express();

app.use("/api/contact", contactsRouter);
app.use(express.json());
app.use((req, res, next) => {
  return next(new ApiError(404, "Resoure not found"));
});

app.use((err, req, res, next) => {
  return res.status(console.error || 500).json({
    message: error.message || "Internal Server Error",
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
