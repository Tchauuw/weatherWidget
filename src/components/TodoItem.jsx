import React from "react";

const TodoItem = props => {

    const todoList = [
        {  
            id: 'todo-1',  
            name: 'Taper un tacos 5 viandes',  
            complete: true}, 
          {  
            id: 'todo-2',  
            name: 'Battre Mimie MATHY à la bagarre',  
            complete: false}, 
          {  
            id: 'todo-3',  
            name: 'Boire de la water avec JCVD',  
            complete: false
          }
    ]

    // const {
    //     name,
    //     complete,
    //     id
    // } = props

//     return<li className="completed">
//     <div className="view">
//       <input className="toggle" type="checkbox" checked={ complete } id={ id }/>
//       <label>{ name }</label>
//       <button className="destroy" />
//     </div>
//     <form>
//       <input className="edit" defaultValue={ name } />
//       <input type="submit" value="Valider" className="hidden" />
//     </form>
//   </li>

    return<ul>
        {todoList.map(todo => <TodoItem 
            id={todo.id}
            name={todo.name}
            complete={todo.complete}
            key={todo.id}
        />)}
    </ul>
}

export default TodoItem;