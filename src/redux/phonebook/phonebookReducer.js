import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  // addNewContactsRequest,
  // addNewContactsSuccess,
  // handleChange,
  // handleDeleteSuccess,
  // setContactsSuccess,
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
} from "./phonebookAction";

const loading = createReducer(false, {
  [addNewContactsRequest]: () => true,
  [addNewContactsSuccess]: () => false,
  [addNewContactsError]: () => false,
  [setContactsRequest]: () => true,
  [setContactsSuccess]: () => false,
  [setContactsError]: () => false,
  [handleDeleteRequest]: () => true,
  [handleDeleteSuccess]: () => false,
  [handleDeleteError]: () => false,
});

export const contactItemsReducer = createReducer([], {
  [addNewContactsSuccess]: (state, { payload }) => [...state, payload],
  [setContactsSuccess]: (_, { payload }) => payload,
  [handleDeleteSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filterReducer = createReducer("", {
  [handleChange]: (_, { payload }) => payload,
});

export const error = createReducer(null, {
  [addNewContactsError]: (state, { payload }) => [...state, payload],
  [setContactsError]: (_, { payload }) => payload,
  [handleDeleteError]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const phonesReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
  loading,
  error,
});

export default phonesReducer;
