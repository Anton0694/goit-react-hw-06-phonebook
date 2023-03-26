import { Input } from './Filter.styled'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
    return (
        <>  
            <label htmlFor="search"> Find contacts by name: </label>
            <Input onChange={e => {
                dispatch(setFilter(e.target.value));
            }}
                type="text"
                id="search" />
        </>
    )
}

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
  
};