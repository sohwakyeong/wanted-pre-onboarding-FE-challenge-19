import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import TodoItem from './todoItem';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;