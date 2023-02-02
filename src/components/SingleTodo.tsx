import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';
import { TodoList } from './TodoList';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.task);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //    wszyskie inne niz szukany sa filtrowane a ten ktory nie jest w wynikach jest usuniety

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);

    //map the [] if todo is the same as id send in submit then edit if not show tasks text
  };

  return (
    <form className="todo__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {/* edit mode is on */}
      {/* value={editTodo} daje taska do okna edycji stad: useState<string>(todo.task); */}
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text "
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.task}</s>
      ) : (
        <span className="todos__single--text">{todo.task}</span>
      )}

      {/* if todo is done show s.tag otherwise show todo text */}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          {/* if edit mode is not on and is not done then set on no edit         */}
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
