
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