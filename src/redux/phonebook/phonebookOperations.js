import axios from "axios";
import {
  addNewContactsSuccess,
  addNewContactsError,
  setContactsSuccess,
  setContactsError,
  handleDeleteSuccess,
  handleDeleteError,
} from "./phonebookAction.js";

axios.defaults.baseURL = "http://localhost:3001/";

export const addNewContact = (contact) => async (dispatch) => {
  try {
    const { data } = await axios.post("contacts", contact);
    dispatch(addNewContactsSuccess(data));
  } catch (error) {
    dispatch(addNewContactsError(error));
  }
};

export const setContacts = () => async (dispatch) => {
  try {
    const { data } = await axios.get("contacts");
    dispatch(setContactsSuccess(data));
  } catch (error) {
    dispatch(setContactsError(error));
  }
};

export const handleDelete = (id) => async (dispatch) => {
  try {
    await axios.delete(`contacts/${id}`);
    dispatch(handleDeleteSuccess(id));
  } catch (error) {
    dispatch(handleDeleteError(error));
  }
};
