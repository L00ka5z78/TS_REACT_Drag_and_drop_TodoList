import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //element skopiowany ze zmiennej settodo z app.
  handleAdd: (e: React.FormEvent) => void; //funkcja ktora nic nie zwraca i do propsow
}

export const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  //todo i set todo sa any type na poczatku dlatego dajesz interface

  const inputRef = useRef<HTMLInputElement>(null); //jak klasy w css pobierz cos        inputRef.current?.blur() == zmienia nasze zaciemnienie background coloru

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={todo}
        className="input__box"
        placeholder="write a task..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        GO!
      </button>
    </form>
  );
};

//btn masz typ submit dlatego dajesz w FORMIE on submit funkcje handleADD
