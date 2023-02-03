import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

/* I COULDN FIND A WAY HOW TO MAKE DRAGGABLE ELEMENT TO MOVE
THE ONLY THING I DID IS TO REMOVE REACT.STRICT.MODE
BUT IT IS NOT OPTIMAL, I WUISH I COULD SOLVE IT IN OTHER WAY*/

root.render(<App />);
