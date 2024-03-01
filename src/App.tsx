import React from 'react';
import TodoForm from './components/List/todoForm';
import TodoList from './components/List/todoList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
