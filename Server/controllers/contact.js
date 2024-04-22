import Contact from "../models/contact.js";
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, services, message } = req.body;
    console.log(name, email, phone, services, message);
    const data = await Contact.create({
      name,
      email,
      phone,
      services,
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
