import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/slice';


const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <label>
        Find contacts by name
        <input
          className={css.input}
          onChange={event => dispatch(filterContact(event.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};
