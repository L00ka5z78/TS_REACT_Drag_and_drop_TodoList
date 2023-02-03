import React from 'react';
import { Todo } from '../models/models';
import { SingleTodo } from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  todos: Array<Todo>; //to tablica todo
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  CompletedTodos: Array<Todo>;
}

/* export const TodoList: React.FC = ({ todos, setTodos }: Props) => {
    ===  blad Type '({ todos, setTodos }: Props) => JSX.Element' is not assignable to type 'FC<{}>'.
 Types of parameters '__0' and 'props' are incompatible.
  Type '{}' is missing the following properties from type 'Props': todos, setTodos*/

export const TodoList = ({
  todos,
  setTodos,
  CompletedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {/* div z active task ktorego bedziemy przenosic */}
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todos  ${
              snapshot.isDraggingOver ? 'dragcomplete' : 'remove'
            }`}
          >
            <span className="todos__heading">Completed Tasks</span>
            {CompletedTodos?.map((todo, index) => (
              <SingleTodo
                index={index}
                todos={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
// /* Dropable to element ktory jest przenoszony
// droppableId to po to zeby zidentyfikowac przenoszony element*/
