import React, { useState } from "react";

const TodoItem = (props) => {
  const {
    complete,
    name,
    id,
    onComplete,
    onDestroy,
    onChange,
    editing,
    onEdit
  } = props;

  const [value, setValue] = useState(name);

  const handleChange = (evt) => {
    setValue(evt.target.value)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onChange(value)
  };

  return (
    <li className={editing ? "editing" : complete ? "completed" : ""}>
      <div 
        className="view"
        >
        <input
          className="toggle"
          type="checkbox"
          checked={complete}
          id={`todo-${id}`}
          onChange={onComplete}
          />
        <label 
          onDoubleClick={ editing ? null : onEdit }
        >{name}</label>
        <button 
          className="destroy" 
          onClick={onDestroy} 
        />
      </div>
      {editing && 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="edit"
            autoFocus
            value={value}
            onChange={handleChange}
            onBlur={handleSubmit}
          />
          <input type="submit" value="Valider" className="hidden" />
        </form>
      }
    </li>
  );
};

export default TodoItem;
