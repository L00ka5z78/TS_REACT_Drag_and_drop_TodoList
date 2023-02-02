import React, { useState } from 'react';
import { InputField } from './components/InputField';
import './App.css';
import { Todo } from './model';
import { TodoList } from './components/TodoList';

export const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); //todos to tablica todo dlatego taki typ

  const handleAdd = (e: React.FormEvent) => {
    // e = any type typ znaleziony w intenrecie
    e.preventDefault();
    if (todo) {
      //jak stworzyles todosa to setTodo jest pusty ''
      setTodos([...todos, { id: Date.now(), task: todo, isDone: false }]);
      setTodo('');
    }
  };

  console.log(todos);
  return (
    <div className="App">
      <span className="heading">TasKifY</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
//zawartosc  komponentow można poprzenosic do ich plikow
