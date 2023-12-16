import React from "react";

const TodoItem = props => {

  const {
    complete,
    name,
    id,
    onComplete,
    onDestroy
  } = props;

    return<li className={ complete ? 'completed' : ''}>
         <div className="view">
            <input 
              className="toggle" 
              type="checkbox" 
              checked={ complete } 
              id={ `todo-${id}`} 
              onChange={ onComplete } 
            />
           <label>{ name }</label>
           <button className="destroy" onClick={ onDestroy }/>
         </div>
         <form>
           <input className="edit" defaultValue={ name } />
           <input type="submit" value="Valider" className="hidden" />
         </form>
       </li>
}

export default TodoItem;