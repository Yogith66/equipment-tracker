const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const filePath = path.join(__dirname, "../data/equipment.json");

const readData = () => JSON.parse(fs.readFileSync(filePath));
const writeData = (data) =>
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// GET
router.get("/", (req, res) => {
  res.json(readData());
});

// POST
router.post("/", (req, res) => {
  const newItem = { id: uuidv4(), ...req.body };
  const data = readData();
  data.push(newItem);
  writeData(data);
  res.status(201).json(newItem);
});

// PUT
router.put("/:id", (req, res) => {
  const data = readData();
  const index = data.findIndex(e => e.id === req.params.id);
  if (index === -1) return res.status(404).json({ msg: "Not found" });

  data[index] = { ...data[index], ...req.body };
  writeData(data);
  res.json(data[index]);
});

// DELETE
router.delete("/:id", (req, res) => {
  const data = readData().filter(e => e.id !== req.params.id);
  writeData(data);
  res.json({ msg: "Deleted" });
});

module.exports = router;
