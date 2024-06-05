import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className="flex justify-between items-center bg-gray-800 p-2 my-2 rounded">
      <span
        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="ml-4 bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
        onClick={() => deleteTodo(todo.id)}
      >
        删除
      </button>
    </li>
  );
};

export default ToDoItem;

