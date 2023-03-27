import { Input } from './Filter.styled'
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="search"> Find contacts by name: </label>
      <Input
        onChange={(e) => {
                  dispatch(setFilter(e.target.value));
              }}
        type="text"
        id="search"
      />
      </>
      
  );
    
};
    


