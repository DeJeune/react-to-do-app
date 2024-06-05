import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    console.log('useEffect for initial load');
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    if (savedTodos) {
      setTodos(savedTodos);
    }
    setIsInitialLoad(false);
  }, []);

  useEffect(() => {
    console.log('Saving todos to localStorage');
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, isInitialLoad]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { text, completed: false, id: Date.now() };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <Header />
      <AddToDo addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
