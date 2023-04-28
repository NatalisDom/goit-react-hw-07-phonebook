import { useState, useEffect } from 'react';
import css from './ContactForm.module.css';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/operations';

function Form() {
  const [dataForm, setDataForm] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const nameChange = event => {
    const { name, value } = event.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    for (const contact of contacts) {
      if (
        dataForm.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      ) {
        return Notify.failure(`${dataForm.name} is already in contacts.`);
      }
    }
    dispatch(addContact(dataForm));
    reset();
  };

  const reset = () => {
    setDataForm({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name <br />
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={dataForm.name}
          onChange={nameChange}
        />
      </label>
      <br />
      <label>
        Number <br />
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={dataForm.number}
          onChange={nameChange}
        />
      </label>
      <br />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
