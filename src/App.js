import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SimpleRouting from './SimpleRouting/Routing';

export default function Game() {
  const[xIsNext, setXIsNext]=useState(true);
  const[history,SetHistory]=useState([Array(9).fill(null)]);
  let currentSquares = history[history.length-1];
  // console.log(history);
  // console.log(currentSquares);

  function handlePlay(nextSquares){
    //console.log(nextSquares);
    const newHistory = history.slice();
    newHistory[history.length]=nextSquares;
    SetHistory(newHistory);    
    setXIsNext(!xIsNext);
  }
  function jumpTo(index){
    // currentSquares = history[index];
  }

  const move = history.map((Squ,index)=>{
    let Description;
    //console.log(index);
    if(index>0){
      Description = 'Go to move #'+index;
    }
    else{
      Description = "Go to Start";
    }
    //console.log(Description);
    return 
      <li key={index}><button onClick={() => jumpTo(index)}>{ Description }</button></li>;
  });
  //console.log(move);
  return (<div className="game">
  <div className="game-board">
    <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}/>
  </div>
  <div >
    <ol>
      {move}
    </ol>
  </div>
  </div>
  );

}
function Board({xIsNext,squares,onPlay}) {
  //const[squares, setSquare]=useState(Array(9).fill(null));
  
  

  function handleClick(i){
    if(squares[i] || calculateWinner(squares.slice()))
      return;
    const nextSquares = squares.slice();
    if(xIsNext)
    nextSquares[i]="X";
  else
    nextSquares[i]="O";
    //setSquare(nextSquares);
    //console.log(nextSquares);
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares.slice());
  let status;
  if(winner)
  {
    status = "Winner: "+ (!xIsNext ?"X":"O");
  }
  else
    status ='Next Player: '+ (xIsNext ? "X" : "O");

  return (
    <div className="App">
      {/* <BrowserRouter>
      <SimpleRouting></SimpleRouting>
      </BrowserRouter> */}
      <header className="App-header">
        <button className='btn btn-primary'>xyz</button>
    <div className='board-row'>
      <Square value={squares[0]}  onSquareClick={()=>handleClick(0)}/>
      <Square value={squares[1]}  onSquareClick={() => handleClick(1) }/>
      <Square value={squares[2]}  onSquareClick={() => handleClick(2) }/>
  </div>
  <div className='board-row'>
      <Square value={squares[3]}  onSquareClick={() => handleClick(3) } />
      <Square value={squares[4]}  onSquareClick={() => handleClick(4) }/>
      <Square value={squares[5]}  onSquareClick={() => handleClick(5) }/>
  </div>
  <div className='board-row'>
    <Square value={squares[6]}  onSquareClick={() => handleClick(6) }/>
    <Square value={squares[7]}  onSquareClick={() => handleClick(7) }/>
    <Square value={squares[8]}  onSquareClick={() => handleClick(8) }/>
  </div>
  <p className="status">{status}</p>
  </header>
  </div>
  );
}

function Square({value,onSquareClick}){
  // const [value, SetValue] = useState(null);

  // function handleClick(){
  //   SetValue('X');
  // }  onSquareClick={handleClick}

  return (<button className='square' onClick={onSquareClick} >{value}</button>);
}

//export default Board;

function calculateWinner(squares){
  const lines=[[0,1,2] ,
[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  let result= false;
  lines.forEach(i => {
    if(squares[i[0]] && squares[i[0]] === squares[i[1]] && squares[i[0]]=== squares[i[2]])
    {
      result = true;
      return true;
    }
  });
  return result;
}
