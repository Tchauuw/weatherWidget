import React, { useState } from "react";

const Form = props => {
  
  const [value, setValue] = useState('');

  const handleChange = evt => {
    setValue(evt.target.value.charAt(0).toUpperCase() + evt.target.value.slice(1));
  }
  
  const handleSubmit = evt => {
    evt.preventDefault();
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
      <input type="submit" className="hidden" value="Ajouter" />
    </form>
}

export default Form;