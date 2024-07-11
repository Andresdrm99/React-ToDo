import './App.css';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import {TodoItem} from './TodoItem/TodoItem';
import {CreateTodoButton} from './CreateTodoButton/CreateTodoButton'
import React from 'react'

const defaultTodos = [
  {text: 'Clean house', completed: true},
  {text: 'Watch movie', completed: false},
  {text: 'Wash dishes', completed: true},
  {text: 'Go to the Gym', completed: true},
];

function App() {
  const[searchValue, setSearchValue] = React.useState('');
  const [todos, setodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  console.log('el value es: ', searchValue)
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <div className='search'>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <CreateTodoButton/>
      </div>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
    </>
    // </div>
  );
}


export default App;
