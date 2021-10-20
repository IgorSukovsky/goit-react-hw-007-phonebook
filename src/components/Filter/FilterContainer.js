import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./Filter";
import { handleChange } from "../../redux/phonebook/phonebookAction";

const FilterContainer = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const onHandleChange = (value) => dispatch(handleChange(value));

  return <Filter filter={filter} handleChange={onHandleChange} />;
};

export default FilterContainer;
