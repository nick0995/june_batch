import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBaord] = useState(intialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBaord((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updateBoard[rowIndex][colIndex] = "X";
      return updateBoard;
    });
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
