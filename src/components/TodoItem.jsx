import React from "react";

const TodoItem = props => {

    const {
        name,
        complete,
        id
    } = props

    return<li className="completed">
    <div className="view">
      <input className="toggle" type="checkbox" checked={ complete } id={ id }/>
      <label>{ name }</label>
      <button className="destroy" />
    </div>
    <form>
      <input className="edit" defaultValue={ name } />
      <input type="submit" value="Valider" className="hidden" />
    </form>
  </li>
}

export default TodoItem;