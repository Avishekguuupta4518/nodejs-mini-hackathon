const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

// POST /api/complaints - Create complaint
router.post("/", async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json(complaint);
  } catch (error) {
    res.status(400).json({
        error: error.message 
    });
  }
});

// GET /api/complaints - Get all complaints
router.get("/", async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ 
        error: error.message 
    });
  }
});

// GET /api/complaints/:id - Get complaint by ID
router.get("/:id", async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint)
      return res.status(404).json({ 
    message: "Complaint not found" 
});
    res.json(complaint);
  } catch (error) {
    res.status(500).json({ 
        error: error.message 
    });
  }
});

// PUT /api/complaints/:id - Update complaint
router.put("/:id", async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!complaint)
      return res.status(404).json({ 
    message: "Complaint not found" 
});
    res.json(complaint);
  } catch (error) {
    res.status(400).json({ 
        error: error.message 
    });
  }
});

// DELETE /api/complaints/:id - Delete complaint
router.delete("/:id", async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndDelete(req.params.id);
    if (!complaint)
      return res.status(404).json({ 
    message: "Complaint not found" 
});
    res.json({ 
        message: "Complaint deleted successfully" 
    });
  } catch (error) {
    res.status(500).json({ 
        error: error.message 
    });
  }
});

module.exports = router;
