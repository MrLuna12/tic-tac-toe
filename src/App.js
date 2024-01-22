//React provides a special function called useState 
//that you can call from your component to let it “remember” things
import { useState } from "react";
// This is a component.
// Components are used to render, manage, and update UI elements in the application
function Square({ value, onSquareClick }) {
    return <button className="square" onClick={onSquareClick}>
        {value}
    </button>;
}


// 'export' makes the Square() accessible outside the file
// 'default' tells other files using our code that it's the main funciton in the our file
export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const winner = calculateWinner(squares);
    let status;

    function handleClick(i) {
        if (!squares[i] && !winner ) {
            const nextSquares = squares.slice();
            if (xIsNext) {
              nextSquares[i] = 'X';
            } else {
              nextSquares[i] = 'O';
            }
            setSquares(nextSquares);
            setXIsNext(!xIsNext);
        }
    }

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

  return (
    <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
    </>

  );
}

function calculateWinner(squares) {
    let winner = null;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        winner = squares[a];
      }
    }
    return winner;
  }