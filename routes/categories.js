const { Router } = require("express");

const router = Router();

router.get("/create", (req, res) => {
  res.send("NOT IMPLEMENTED");
});

router.post("/create", (req, res) => {
  res.send("NOT IMPLEMENTED");
});

router.get("/:id/delete", (req, res) => {
  res.send("NOT IMPLEMENTED");
});

router.post("/:id/delete", (req, res) => {
  res.send("NOT IMPLEMENTED");
});

router.get("/:id/update", (req, res) => {
  res.send("NOT IMPLEMENTED");
});

router.post("/:id/update", (req, res) => {
  res.send("NOT IMPLEMENTED");
});

router.get("/:id", (req, res) => {
  res.send("NOT IMPLEMENTED");
});

router.get("/", (req, res) => {
  res.send("NOT IMPLEMENTED");
});

module.exports = router;
