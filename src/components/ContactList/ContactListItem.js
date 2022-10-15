import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ListItem } from './ContactList.styled';
import { ButtonForm } from 'components/AppBar/AppBar.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li key={id}>
      <ListItem>
        {name} - {number}
      </ListItem>
      <ButtonForm type="button" onClick={handleDelete}>
        Delete
      </ButtonForm>
    </li>
  );
};

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
