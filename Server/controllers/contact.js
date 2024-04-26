import Contact from "../models/contact.js";
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, services, company, message } = req.body;
    const data = await Contact.create({
      name,
      email,
      phone,
      services,
      company,
      message,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
