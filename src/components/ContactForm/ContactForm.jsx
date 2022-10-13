// import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { FormButton, FormInput } from './ContactForm.styled';
import { contactsState } from 'redux/selectors';
import { addContact } from 'redux/operations';


const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contactsItem = useSelector(contactsState);
  const dispatch = useDispatch();

  const formSubmit = (value, { resetForm }) => {
    if (contactsItem.some(cont => cont.name === value.name)) {
      alert(`${value.name} is already in contacts`);
      return;
    }

    if (contactsItem.some(cont => cont.namber === value.number)) {
      alert(`User number ${value.number} already exists`);
      return;
    }

    dispatch(addContact(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formSubmit}
    >
      <Form>
        <label>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </label>
        <br />
        <label>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </label>
        <br />
        <FormButton type="submit">Add Contact</FormButton>
      </Form>
    </Formik>
  );
};
