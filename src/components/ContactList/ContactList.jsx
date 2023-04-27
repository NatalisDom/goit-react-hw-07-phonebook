import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts, fetchFilter } from 'redux/slice';

export const List = () => {
  const dispatch = useDispatch();
  const count = useSelector(fetchContacts);

  const count1 = useSelector(fetchFilter);
  return (
    <ul className={css.list}>
      {count.map(({ id, name, number }) => {
        if (!name.toLowerCase().includes(count1.toLowerCase())) {
          return null;
        }
        return (
          <li key={id} className={css.name}>
            {name}: {number}
            <button
              className={css.btn}
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
