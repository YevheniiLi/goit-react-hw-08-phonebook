import { InputFilter } from '../Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/reducer';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Filter</h2>
      <InputFilter
        type="text"
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </div>
  );
};
