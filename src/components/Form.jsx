import React, { useState } from "react";

const Form = props => {
  
  const [value, setValue] = useState('');

  const onAdd = props.onAdd;

  const handleChange = evt => {
    setValue(evt.target.value.charAt(0).toUpperCase() + evt.target.value.slice(1));
  }
  
  const handleSubmit = evt => {
    evt.preventDefault();
    onAdd(value);
    alert('Nouveau todo: ' + value);
  }
  
  return<form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        placeholder="Qu'avez-vous à faire ?"
        onChange={handleChange}
        value={value}
        autoFocus
      />
      <input className="hidden" type="submit" value="Ajouter" />
    </form>
}

export default Form;