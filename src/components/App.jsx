import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitDataForm = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    for (const contact of contacts) {
      if (contact.name === name) {
        return Notify.failure(`${name} is already in contacts.`);
      }
    }

    setContacts(prev => [newContact, ...prev]);
  };

  const filtrated = event => {
    setFilter(event.currentTarget.value);
  };

  const visibleContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  return (
    <div className="thumb">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={submitDataForm} data={contacts} />
      <h2>Contacts</h2>
      <Filter value={filter} filter={filtrated} />
      <ContactList contacts={visibleContact()} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
