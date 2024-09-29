import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe Game</h1>
      <div className='grid-container'>
        <div><Box /></div>
        <div><Box /></div>
        <div><Box /></div>
        <div><Box /></div>
        <div><Box /></div>
        <div><Box /></div>
        <div><Box /></div>
        <div><Box /></div>
        <div><Box /></div>
      </div>
    </div>
  );
}

function Box() {
  //initialize state with useState
  const [value, setValue] = useState('');

  function onClick(){
    setValue('X'); //update state
  }

  return (
    <button onClick={onClick}>{value}</button>
  )
}
