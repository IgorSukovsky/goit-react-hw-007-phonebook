import { useState } from "react";
// import { v4 as uuid } from "uuid";
import styles from "./ContactForm.module.css";
import { connect, useDispatch } from "react-redux";
import { addNewContact } from "../../redux/phonebook/phonebookOperations";

const ContactForm = ({ contacts }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (term) => {
    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === term.name.toLowerCase()
    );
    if (isDuplicate) {
      alert("Контакт: " + term.name + " уже существует ");
      return;
    }

    const newTodo = {
      name: term.name,
      number: term.number,
    };

    dispatch(addNewContact(newTodo));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    handleSubmit({ name, number });

    setName("");
    setNumber("");
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <span className={styles.title}>Name</span>
        <input
          onChange={handleChange}
          className={styles.inputContact}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="имя:"
        />
        <span className={styles.title}>Number</span>
        <input
          className={styles.inputContact}
          name="number"
          type="tel"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="тел:"
        />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(ContactForm);
