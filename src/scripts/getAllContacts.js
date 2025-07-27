import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const contacts = await readContacts();

    if (contacts.length === 0) {
        console.log("There are no contacts");
        return;
    }

    console.log("All contacts:");
    return contacts;
};

console.log(await getAllContacts());
