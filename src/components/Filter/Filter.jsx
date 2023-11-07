import { useDispatch } from 'react-redux';
import { FilterContainer, InputItem, LabelInput } from './Filter.styled';
import { setFilterValue } from 'components/redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const filterValue = evt.target.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <FilterContainer>
      <LabelInput>Find contacts by name</LabelInput>
      <InputItem type="text" onChange={handleChange} />
    </FilterContainer>
  );
};
export { Filter };
