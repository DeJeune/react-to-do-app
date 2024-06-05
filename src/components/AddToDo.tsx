import React, { useState } from 'react';

interface AddToDoProps {
  addTodo: (text: string) => void;
}

const AddToDo: React.FC<AddToDoProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 rounded-l-md bg-gray-800 text-white border-2 border-r-0 border-blue-500 focus:outline-none"
        placeholder="添加新的待办事项"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md"
      >
        添加
      </button>
    </form>
  );
};

export default AddToDo;
