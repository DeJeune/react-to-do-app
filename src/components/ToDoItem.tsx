import React from 'react';
import { FaCheck } from 'react-icons/fa';

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

const ToDoItem: React.FC<ToDoItemProps> = ({
  todo,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <li className="flex justify-between items-center bg-gray-800 p-2 my-2 rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        hidden={todo.completed}
        className="mr-2"
      />
      <span
        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-white'}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
        {todo.completed && <FaCheck className="inline ml-2 text-white" />}
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
