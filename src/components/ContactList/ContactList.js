import { Message } from 'components/styles/GlobalStyle';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectSearchValue } from 'redux/contacts/selectors';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, error }) => {
  const filter = useSelector(selectSearchValue);

  let filteredContacts = contacts;

  if (filter.searchValue.toLowerCase()) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.searchValue.toLowerCase())
    );
  }

  return (
    <>
      {!contacts.length && !error && (
        <Message>Your contact list is empty</Message>
      )}
      {error && (
        <Message>{error}</Message>
      )}
      {!filteredContacts.length && Boolean(contacts.length) && (
        <Message>No contacts found</Message>
      )}
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem id={id} name={name} number={number} key={id} />
          );
        })}
      </ul>
    </>
  );
};

ContactList.propType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  error: PropTypes.string,
};
