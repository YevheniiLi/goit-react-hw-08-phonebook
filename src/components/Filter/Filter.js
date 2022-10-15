import { Label, Form } from 'components/styles/GlobalStyle';
import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/contacts/searchSlice';
import { SearchField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Form>
        <SearchField type="text" onChange={handleSearch} />
      </Form>
    </Label>
  );
};
