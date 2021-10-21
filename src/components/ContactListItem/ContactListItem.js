import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { handleDelete } from "../../redux/phonebook/phonebookOperations";
import styles from "./ContactListItem.module.css";
const ContactsListItem = ({ item }) => {
  const { name, number, id } = item;
  const dispatch = useDispatch();

  const onHandleDelete = () => dispatch(handleDelete(id));

  return (
    <li>
      <div className={styles.textContent}>
        <span>
          {name}: {number}
        </span>
        <button className={styles.btn} onClick={onHandleDelete}>
          X
        </button>
      </div>
    </li>
  );
};

ContactsListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsListItem;
