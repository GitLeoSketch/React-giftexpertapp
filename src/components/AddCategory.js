import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const [categoryAlert, setCategoryAlert] = useState("AddCategory");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitHandlerd = (e) => {
    e.preventDefault();

    if (inputValue === "" || inputValue === undefined) {
      setCategoryAlert("La entrada esta vacia o undefined");
    } else {
      setCategories((prevState) => {
        if (prevState.find((element) => element === inputValue)) {
          setCategoryAlert("El elemento ya existe");

          return prevState;
        } else {
          setCategoryAlert("AddCategory");
          return [inputValue, ...prevState];
        }
      });
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmitHandlerd}>
      <h3>{categoryAlert}</h3>

      <input type="text" value={inputValue} onChange={onChangeHandler}></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
