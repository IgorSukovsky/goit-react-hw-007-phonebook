import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addNewContactsSuccess,
  handleChange,
  handleDeleteSuccess,
  setContactsSuccess,
} from "./phonebookAction";

export const contactItemsReducer = createReducer([], {
  [addNewContactsSuccess]: (state, { payload }) => [...state, payload],
  [setContactsSuccess]: (_, { payload }) => payload,
  [handleDeleteSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filterReducer = createReducer("", {
  [handleChange]: (_, { payload }) => payload,
});

const phonesReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
});

export default phonesReducer;
