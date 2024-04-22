import express from "express";
const router = express.Router();
import { createContact, getContacts } from "../controllers/contact.js";
router.post("/createContact", createContact);
router.get("/contacts", getContacts);

export default router;
