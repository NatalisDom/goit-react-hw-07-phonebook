import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

function App() {
  const loading = useSelector(state => state.contacts.contacts.isLoading);
  return (
    <>
      {loading ? Loading.dots() : Loading.remove()}
      <div className="thumb">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

export default App;
