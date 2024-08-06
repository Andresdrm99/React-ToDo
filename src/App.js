import './App.css';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import {TodoItem} from './TodoItem/TodoItem';
import {CreateTodoButton} from './CreateTodoButton/CreateTodoButton'

import React from 'react'

const defaultTodos = [
  {text: 'Learn Events', completed: true},
  {text: 'Use States', completed: true},
  {text: 'Count TODOS', completed: true},
  {text: 'Search todos', completed: true},
  {text: 'Complete and remove todos', completed: false},
];

function App() {
  const[searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    todo => {
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <div className='search'>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <CreateTodoButton/>
      </div>
      <TodoList>
   
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
    </>
  );
}


export default App;
