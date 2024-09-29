import { useState } from 'react';
import './App.css';

export default function App() {
  const [turn, setTurn] = useState('X');

  return (
    <div className="App">
      <h1>Tic Tac Toe Game</h1>
      <div className='grid-container'>
        <div><Box turn={turn} setTurn={setTurn}/></div>
        <div><Box turn={turn} setTurn={setTurn}/></div>
        <div><Box turn={turn} setTurn={setTurn}/></div>
        <div><Box turn={turn} setTurn={setTurn}/></div>
        <div><Box turn={turn} setTurn={setTurn}/></div>
        <div><Box turn={turn} setTurn={setTurn}/></div>
        <div><Box turn={turn} setTurn={setTurn}/></div>
        <div><Box turn={turn} setTurn={setTurn}/></div>
        <div><Box turn={turn} setTurn={setTurn}/></div>
      </div>
    </div>
  );
}

function Box({turn, setTurn}) {
  const [value, setValue] = useState('');

  function onClick(){
    if(value == ''){
      setValue(turn);
      if(turn == 'X'){
        setTurn('O')
      } else {
        setTurn('X')
      }
    }
  }

  return (
    <button onClick={onClick}>{value}</button>
  )
}
