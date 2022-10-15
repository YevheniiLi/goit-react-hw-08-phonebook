import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import { Section } from './ContactForm.styled';
import { Label, Form } from 'components/styles/GlobalStyle';
import { ButtonForm } from 'components/AppBar/AppBar.styled';
export const ContactForm = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    let isAdded = false;
    const {
      elements: { name, number },
    } = e.currentTarget;

    contacts.map(contact => {
      if (contact.name === name.value) {
        alert(`${name.value} is already in contacts`);
        return (isAdded = true);
      }
      return isAdded;
    });

    if (!isAdded) {
      const addedContact = {
        name: name.value,
        number: number.value,
        id: nanoid(),
      };
      dispatch(addContact(addedContact));
    }
    e.currentTarget.reset();
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <ButtonForm className="button" type="submit">
          Add contact
        </ButtonForm>
      </Form>
    </Section>
  );
};

ContactForm.propType = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
