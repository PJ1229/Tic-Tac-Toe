import { useState } from 'react';
import './App.css';

const positions = [null, null, null, null, null, null, null, null, null];

export default function App() {
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="App">
      <h1>Tic Tac Toe Game</h1>
      <p className='credits'>by PJ Kim</p>
      <div className='grid-container'>
        <div><Box turn={turn} setTurn={setTurn} position={1} gameOver={gameOver} setGameOver={setGameOver} setWinner={setWinner}/></div>
        <div><Box turn={turn} setTurn={setTurn} position={2} gameOver={gameOver} setGameOver={setGameOver} setWinner={setWinner}/></div>
        <div><Box turn={turn} setTurn={setTurn} position={3} gameOver={gameOver} setGameOver={setGameOver} setWinner={setWinner}/></div>
        <div><Box turn={turn} setTurn={setTurn} position={4} gameOver={gameOver} setGameOver={setGameOver} setWinner={setWinner}/></div>
        <div><Box turn={turn} setTurn={setTurn} position={5} gameOver={gameOver} setGameOver={setGameOver} setWinner={setWinner}/></div>
        <div><Box turn={turn} setTurn={setTurn} position={6} gameOver={gameOver} setGameOver={setGameOver} setWinner={setWinner}/></div>
        <div><Box turn={turn} setTurn={setTurn} position={7} gameOver={gameOver} setGameOver={setGameOver} setWinner={setWinner}/></div>
        <div><Box turn={turn} setTurn={setTurn} position={8} gameOver={gameOver} setGameOver={setGameOver} setWinner={setWinner}/></div>
        <div><Box turn={turn} setTurn={setTurn} position={9} gameOver={gameOver} setGameOver={setGameOver} setWinner={setWinner}/></div>
      </div>
      <div className='winner'>{winner}</div>
    </div>
  );
}

function Box({turn, setTurn, position, gameOver, setGameOver, setWinner}) {
  const [value, setValue] = useState('');

  function onClick(){
    if(gameOver == false){
      if(value == ''){
        setValue(turn);
        if(turn == 'X'){
          positions[position - 1] = 1;
          setTurn('O')
        } else {
          positions[position - 1] = 2;
          setTurn('X')
        }
      }
    }

    const checkWinner = CheckWin();
    if (checkWinner === 1){
      setGameOver(true);
      setWinner('X wins!');
    } else if(checkWinner === 2) {
      setGameOver(true);
      setWinner('O wins!');
    }
  }

  return (
    <button onClick={onClick}>{value}</button>
  )
}

function CheckWin(){
  // columns
  if(positions[0] == positions[3] && positions[0] == positions[6]){
    return positions[0];
  }
  if(positions[1] == positions[4] && positions[1] == positions[7]){
    return positions[1];
  }
  if(positions[2] == positions[5] && positions[2] == positions[8]){
    return positions[2];
  }

  //rows
  if(positions[0] == positions[1] && positions[0] == positions[2]){
    return positions[0];
  }
  if(positions[3] == positions[4] && positions[3] == positions[5]){
    return positions[3];
  }
  if(positions[6] == positions[7] && positions[6] == positions[8]){
    return positions[6];
  }

  //diagonals
  if(positions[0] == positions[4] && positions[0] == positions[8]){
    return positions[0];
  }
  if(positions[2] == positions[4] && positions[2] == positions[6]){
    return positions[2];
  }
  return 0;
}