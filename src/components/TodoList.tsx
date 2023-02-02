import React from 'react';
import { Todo } from '../model';
import { SingleTodo } from './SingleTodo';
import './styles.css';

interface Props {
  todos: Todo[]; //to tablica todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
/* export const TodoList: React.FC = ({ todos, setTodos }: Props) => { 
    ===  blad Type '({ todos, setTodos }: Props) => JSX.Element' is not assignable to type 'FC<{}>'.
  Types of parameters '__0' and 'props' are incompatible.
  Type '{}' is missing the following properties from type 'Props': todos, setTodos*/

export const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos_heading">Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos_heading">Completed Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};
// 1.09***********************************************************************
