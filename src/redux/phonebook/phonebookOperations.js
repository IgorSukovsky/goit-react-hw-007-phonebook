import axios from "axios";
import {
  addNewContactsSuccess,
  addNewContactsError,
  setContactsSuccess,
  setContactsError,
  handleDeleteSuccess,
  handleDeleteError,
  addNewContactsRequest,
  setContactsRequest,
  handleDeleteRequest,
} from "./phonebookAction.js";

axios.defaults.baseURL = "http://localhost:3001/";

export const addNewContact = (contact) => (dispatch) => {
  dispatch(addNewContactsRequest());
  axios
    .post("contacts", contact)
    .then(({ data }) => dispatch(addNewContactsSuccess(data)))
    .catch((error) => dispatch(addNewContactsError(error.message)));
};

export const setContacts = () => (dispatch) => {
  dispatch(setContactsRequest());

  axios
    .get("contacts")
    .then(({ data }) => dispatch(setContactsSuccess(data)))
    .catch((error) => dispatch(setContactsError(error.message)));
};

export const handleDelete = (id) => async (dispatch) => {
  dispatch(handleDeleteRequest());
  try {
    await axios.delete(`contacts/${id}`);
    dispatch(handleDeleteSuccess(id));
  } catch (error) {
    dispatch(handleDeleteError(error.message));
  }
};
