import React from "react"

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

    return<ul>
        {todoList.map(todo => <TodoItem 
            id={todo.id}
            name={todo.name}
            complete={todo.complete}
            key={todo.id}
        />)}
    </ul>
}

export default TodoItem