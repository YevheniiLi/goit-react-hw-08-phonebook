import { Label, Form } from 'components/styles/GlobalStyle';
import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/contacts/searchSlice';
import { SearchField } from './Filter.styled';
import { MessageFinder } from 'components/styles/GlobalStyle';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  return (
    <Label>
      <MessageFinder>Find contacts by name</MessageFinder>
      <Form>
        <SearchField type="text" onChange={handleSearch} />
      </Form>
    </Label>
  );
};
