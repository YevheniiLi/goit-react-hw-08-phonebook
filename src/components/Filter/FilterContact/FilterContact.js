export const filterContact = (contacts, filter) => {

  if (filter === "") {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
}
