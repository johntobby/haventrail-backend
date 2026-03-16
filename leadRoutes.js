const express = require("express");

const router = express.Router();

const {
createLead,
getLeads,
updateLead
} = require("../controllers/leadController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", createLead);

router.get("/", authMiddleware, getLeads);

router.put("/:id", authMiddleware, updateLead);

module.exports = router;