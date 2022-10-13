import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { filterContact } from 'components/Filter/FilterContact/FilterContact';
import { contactsState, filterState } from 'redux/selectors';
import {
  Button,
  ContactItem,
  ContactText,
} from '../ContactList/ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsItem = useSelector(contactsState);
  const filter = useSelector(filterState);

  const contacts = filterContact(contactsItem, filter);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, phone }) => {
          return (
            <ContactItem key={id}>
              <ContactText>{name}: </ContactText>
              <ContactText>{phone}</ContactText>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </ContactItem>
          );
        })}
      </ul>
    </div>
  );
};
