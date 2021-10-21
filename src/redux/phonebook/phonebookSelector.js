import { createSelector } from "reselect";

export const itemsSelector = (state) => state.contacts.items;
export const filterSelector = (state) => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [itemsSelector, filterSelector],

  (contactsList, filterValue) => {
    console.log(contactsList);
    return contactsList.filter((item) =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
