import { createAction } from "@reduxjs/toolkit";

const addNewContactsRequest = createAction("contact/addNewContactsRequest");
const addNewContactsSuccess = createAction("contact/addNewContactsSuccess");
const addNewContactsError = createAction("contact/addNewContactsError");

const setContactsRequest = createAction("contact/setContactsRequest");
const setContactsSuccess = createAction("contact/setContactsSuccess");
const setContactsError = createAction("contact/setContactsError");

const handleChange = createAction("contact/handleChange");

const handleDeleteRequest = createAction("contact/handleDeleteRequest");
const handleDeleteSuccess = createAction("contact/handleDeleteSuccess");
const handleDeleteError = createAction("contact/handleDeleteError");

export {
  addNewContactsRequest,
  addNewContactsSuccess,
  addNewContactsError,
  setContactsRequest,
  setContactsSuccess,
  setContactsError,
  handleChange,
  handleDeleteRequest,
  handleDeleteSuccess,
  handleDeleteError,
};
