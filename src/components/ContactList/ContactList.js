import { useSelector } from "react-redux";
import { getFilteredContacts } from "../../redux/phonebook/phonebookSelector";
import ContactsListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";

const ContactsList = () => {
  const filteredItems = useSelector(getFilteredContacts);

  return (
    <>
      <ul className={styles.ul}>
        {filteredItems.map((item) => (
          <ContactsListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
