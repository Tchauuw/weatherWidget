import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Form from './Form'

const App = () => {

  const [todoList, setTodoList] = useState([
    {  
      id: 'todo-1',  
      name: 'Taper un tacos 5 viandes',  
      complete: true
    }, {  
      id: 'todo-2',  
      name: 'Battre Mimie MATHY à la bagarre',  
      complete: false
    }, {  
      id: 'todo-3',  
      name: 'Boire de la water avec JCVD',  
      complete: false
    }
  ]);

  const handleAdd = name => {
    setTodoList([
      ...todoList,
      {
        id: 'todo-' + todoList.length,
        name: name,
        complete: false
      }
    ]);
  }

  return <section className="todoapp">
    <header className="header">
      <h1>Todo</h1>
     <Form onAdd={ handleAdd }/>
    </header>
    {/* Cette section doit être cachée par défaut et affichée quand il y a des todos */}
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Tout compléter</label>
      <ul className="todo-list">
        {todoList.map(todo => <TodoItem 
            id={todo.id}
            key={todo.id}
            name={todo.name}
            complete={todo.complete}
          />)}
      </ul>
    </section>
    {/* Ce footer doit être caché par défaut et affichée quand il y a des todos */}
    <footer className="footer">
      {/* Ceci devrait être "0 restants" par défaut */}
      <span className="todo-count">
        <strong>
          2
        </strong> tâches restantes
      </span>
      <ul className="filters">
        <li>
          <button className="selected">
            Tous
          </button>
        </li>
        <li>
          <button>
            Actifs
          </button>
        </li>
        <li>
          <button>
            Complétés
          </button>
        </li>
      </ul>
      {/* Caché si aucun élément complété restant */}
      <button className="clear-completed">
        Effacer les complétés
      </button>
    </footer>
  </section>
}

export default App

