import { useEffect } from "react";
import ContactForm from "./components/ContactForm//ContactForm";
import ContactsList from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";

import FilterContainer from "./components/Filter/FilterContainer";
import { setContacts } from "./redux/phonebook/phonebookOperations";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <div>
        <FilterContainer />
        <ContactsList />
      </div>
    </div>
  );
};

export default App;
