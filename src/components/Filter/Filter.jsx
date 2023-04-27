import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/slice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <label>
        Find contacts by name
        <input
          className={css.input}
          onChange={e => dispatch(filter(e.target.value))}
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
