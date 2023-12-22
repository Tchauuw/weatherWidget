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
      {
        id: 'todo-' + todoList.length,
        complete: false,
        name: name
      },
      ...todoList
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
    
    const filterItem = todo => {
      if (filter === 'completed') {
        return todo.completed
      } else if (filter === 'active') {
        return !todo.completed
      } else {
        return true
      }
    }
    
    const leftTodos = todoList.filter((todo) => !todo.complete ).length;
    
    const handleDestroy = (id) => {
      setTodoList(
        todoList.filter((todo) => todo.id !== id)
      );
    }
      
    const [editing, setEditing] = useState(null);
      
  const handleChange = (id, name) => {
    setTodoList(
      todoList.map((todo) => todo.id === id
      ? {
        ...todo,
        name
      }
      : todo
      )
    )
  }
    
  
  const handleEdit = (id) => {
    setEditing(id);
    console.log(`Tâche éditée - ID: ${id}`);
  }

  const handleToggleAll = () => {
    setTodoList(todoList.map((todo) => ({
          ...todo,
          complete: leftTodos > 0
          // complete: !todo.complete
        })  
      )
    )
  }

  const handleDelete = () => {
    setTodoList(todoList.filter((todo) => (todo.complete === false)
      )
    )
  }

  return <section className="todoapp">
    <header className="header">
      <h1>Todo</h1>
     <Form onAdd={ handleAdd }/>
    </header>
    {/* Cette section doit être cachée par défaut et affichée quand il y a des todos */}
    {/* {leftTodos > 0 && <section className="main"> */}
    {todoList.length > 0 && <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={leftTodos === 0}
        onChange={handleToggleAll}
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
                onDestroy={ () => handleDestroy(todo.id) }
                onEdit={() => handleEdit( todo.id )}
                editing={editing === todo.id}
                onChange={(editedName) => handleChange(todo.id, editedName)}
                />)
          }
      </ul>
    </section>}
    {/* Ce footer doit être caché par défaut et affichée quand il y a des todos */}
    {todoList.length > 0 && <footer className="footer">
      {/* Ceci devrait être "0 restants" par défaut */}
      <span className="todo-count">
        <strong>
          { leftTodos }
        </strong> { leftTodos <= 1 ? 'tâche restante' : 'tâches restantes' }
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
      <button 
        className={ todoList.length > leftTodos ? 'clear-completed' : 'hidden' }
        onClick={ handleDelete }
      >
        Effacer les complétés
      </button>
    </footer>}
  </section>
}

export default App
