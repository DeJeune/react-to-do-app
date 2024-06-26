import React from 'react';
import ToDoItem from './ToDoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className="w-full max-w-md">
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
