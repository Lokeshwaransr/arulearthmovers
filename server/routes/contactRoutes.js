import express from "express";
import { Contact } from "../models/Contact.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(20);
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch contacts" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    const contact = await Contact.create({ name, phone, message });
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(400).json({ success: false, message: "Failed to save contact" });
  }
});

export default router;
