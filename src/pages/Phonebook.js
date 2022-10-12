import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
// import { Phonebook } from './App.styled';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';


export const Phonebook = () => {

  const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);



  return (
    <>
      <h1>hey</h1>
      <ContactForm />
      <h2>My contacts</h2>
      <Filter />
      <ContactList />
      {contacts.length === 0 }
      <GlobalStyle />
    </>
  );
};
