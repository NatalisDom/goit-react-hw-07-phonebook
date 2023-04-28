import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const List = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts.items);
  
  const contactsFilter = contacts.filter(el =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );
  return (
    <ul className={css.list}>
      {contactsFilter.map(({ id, name, number }) => {
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
