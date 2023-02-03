import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  //todo i set todo sa any type na poczatku dlatego dajesz interface

  const inputRef = useRef<HTMLInputElement>(null);
  //jak klasy w css pobierz cos        inputRef.current?.blur() == zmienia nasze zaciemnienie background coloru

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO!
      </button>
    </form>
  );
};
//btn masz typ submit dlatego dajesz w FORMIE on submit funkcje handleADD
