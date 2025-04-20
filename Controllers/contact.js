import { Contact } from "../Models/Contact.js";

//get all contact
export const getAllContact = async (req, res) => {
    const userContact = await Contact.find();
    if (!userContact) return res.json({ message: " No contactc Found....!", success: false })

    res.json({ message: "All Contact Fetched", userContact, success: true })
}

//create new contact

export const newContact = async (req, res) => {
    const { name, email, phone, type } = req.body
    if (name == "" || email == "" || phone == "" || type == "") return res.json({ message: "All felds are required" });
    let saveContact = await Contact.create({ name, email, phone, type, user: req.user });

    res.status(201).json({ message: "Contact saved succesfully", saveContact, success: true })
}

//update contact by id
export const updateContactById = async (req, res) => {
    const id = req.params.id;
    const { name, email, phone, type } = req.body
    let updatedContact = await Contact.findByIdAndUpdate(id, { name, email, phone, type }, { new: true });

    if (!updatedContact) return res.json({ message: "no contact exist ...!", success: false })
    res.json({ message: "Contact updated Successfully.....!", success: true, updatedContact })

}


//Get contact by id
export const getContactById = async (req, res) => {
    const id = req.params.id;
    const userContact = await Contact.findById(id)
    if (!userContact) return res.json({ message: "No contact found...!", success: false });
    res.json({ message: `contact fetched`, userContact, success: true })
}


//Delete contact by id

export const deleteContactById = async (req, res) => {
    const id = req.params.id;

    let deleteContact = await Contact.findByIdAndUpdate(id);

    if (!deleteContact) return res.json({ message: "no contact exist ...!", success: false })
    res.json({ message: "Contact deleted Successfully.....!", success: true })

}


//Get contact by user id
export const getContactByUserId = async (req, res) => {
    const id = req.params.id;
    const userContact = await Contact.find({ user: id })
    if (!userContact) return res.json({ message: "No contact found...!", success: false });
    res.json({ message: `User specific contact fetched`, userContact, success: true })
}

