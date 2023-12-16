import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Form from './Form'
import FilterButton from './FilterButton';

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

  const handleComplete = (todoChecked) => {
    setTodoList(
      todoList.map((todo) => (todoChecked === todo.id)
        ? {
          ...todo,
          complete: !todo.complete
        } : todo
      )
    );
  }

  const [filter, setFilter] = useState(null);
  const filterItem = todo => ( filter === 'completed' ) ? todo.complete : (filter === 'active') ? !todo.complete : true;

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
          { todoList
              .filter(filterItem)
              .map((todo) => <TodoItem 
                id={todo.id}
                key={todo.id}
                name={todo.name}
                complete={todo.complete}
                onComplete={() => handleComplete(todo.id)}
              />)
          }
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
        <FilterButton 
          label="Tous"
          onClick={() => setFilter(null)}
          selected={filter === null}
        />
        <FilterButton 
          label="Complétés"
          onClick={() => setFilter('completed')}
          selected={filter === 'completed'}
        />
        <FilterButton 
          label="Actifs"
          onClick={() => setFilter('active')}
          selected={filter === 'active'}
        />
      </ul>
      {/* Caché si aucun élément complété restant */}
      <button className="clear-completed">
        Effacer les complétés
      </button>
    </footer>
  </section>
}

export default App

