
PODSTAWY ************


const name: string;         //definiujes typ zmiennej
const age: number;          //  const age: number | string; === moze byc albo string albo number 

const isStudent: boolean;
const hobbies: string[];
const role: [string, number]; // najpierw string potem number inczej nie działa np:  role = ['ee', 5];


type Person = {
   name: string;
   age: number; //age? === opcjonalne moze ale nie musi
 };
 const person: Person = {
   name: 'Lukasz',
 };

 jak wpiszesz tylko name to daje blad:  Property 'age' is missing in type '{ name: string; }' but required in type 'Person' */ 
 
 const perso1: Person = {
   // wpiszesz obato jest dobrze
   name: 'Lukasz',
   age: 10,
 }; const people: Person[]

  interfce Person = {    // interface  === type
  name: string;
  age: number; //age? === opcjonalne moze ale nie musi
};



const printName = (name) => { // <== name has any type
  console.log(name)
   }

const print = (name: string) => { // <== ok
  console.log(name)
}

const printName: (name: string) => void;  //nic nie zwraca  PRZYPISANIE TYPU DO FUNKCJI


 type X = {
   a: string;
   b: number;
 }
 type Y = X &  {
   c: string;
   d: number;
 }

let y: Y = {
   c: "asior",
   d: 43
}

interfce Guy extends Person {
  proffesion: string
}
**************************
** IKONY Z REACT icons  **
**************************

npm install react-icons 

***IMPORTUJESZ

import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';


**** I WSTAWIASZ
  <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>

*************************************************************************
      <s> tag specifies text that is no longer correct, accurate or relevant. The text will be displayed with a line through it.
      *********************************************************************

DROPABLE ELEMENTS *******************************************

      > npm i react-beautiful-dnd
       npm install  @types/react-beautiful-dnd

       ******   importujesz w pliku głownym  *****       

       import { DragDropContext } from 'react-beautiful-dnd';

i owijasz aplikacje

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">TasKifY</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

***************************************************************
  ****** importujesz w komponencie ktory chcesz UPUSZZAC  *****
***************************************************************

import { Droppable } from 'react-beautiful-dnd';

i owijasz.  rozpraszasz provided i po kropce dodajesz DROPPABLEprops

     <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
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
        )}
      </Droppable>

      oprocz tego wrzucasz element we funkcje z useRef'em
      do parent diva
      jak ponizej:

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Completed Tasks</span>
            {todos.map((todo) => (
              <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
                        {provided.placeholder}    ===zapobiega wiszeniu w powietrzu elementu
                        

          </div>
        )}
      </Droppable>

**********************************************************
***  importujesz w komponencie ktory chcesz przeciagac ***
**********************************************************

import { Draggable } from 'react-beautiful-dnd';

i owijasz caly element/ formularz jak ponizej. 

oprócz tego dajesz id unikalne czyli id i dajesz je toString()
oraz index

i owijasz.  rozpraszasz provided i po kropce dodajesz DRaggablEprops
plus          {...provided.dragHandleProps}
i innerRef'a.


 <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todo__single"
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
      )}
    </Draggable>