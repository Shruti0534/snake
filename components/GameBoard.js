import React, { useState, useEffect } from "react";
import ComplimentModal from "./ComplimentModal"; // Import ComplimentModal

const GameBoard = ({ score, setScore }) => {
  const boardSize = 20;
  const initialSnake = [42, 41, 40];
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState(generateFood());
  const [isGameOver, setIsGameOver] = useState(false);

  function generateFood() {
    return Math.floor(Math.random() * boardSize * boardSize);
  }

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[0];
    let newHead;

    if (direction === "RIGHT") newHead = head + 1;
    if (direction === "LEFT") newHead = head - 1;
    if (direction === "UP") newHead = head - boardSize;
    if (direction === "DOWN") newHead = head + boardSize;

    // Collision checks
    if (
      newHead < 0 || // Out of bounds (top)
      newHead >= boardSize * boardSize || // Out of bounds (bottom)
      (direction === "RIGHT" && head % boardSize === boardSize - 1) || // Wall collision (right)
      (direction === "LEFT" && head % boardSize === 0) || // Wall collision (left)
      snake.includes(newHead) // Collision with self
    ) {
      setIsGameOver(true);
      return;
    }

    newSnake.unshift(newHead);
    if (newHead === food) {
      setScore(score + 1);
      setFood(generateFood());
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
    if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
    if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
    if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
  };

  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [snake, direction, isGameOver]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {isGameOver && (
        <ComplimentModal
          score={score}
          onRestart={() => {
            setSnake(initialSnake);
            setDirection("RIGHT");
            setFood(generateFood());
            setScore(0);
            setIsGameOver(false);
          }}
          onExit={() => setIsGameOver(false)} // Example exit function, you can adjust it as needed
        />
      )}

      <div
        className="grid gap-0.5 bg-gray-800"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, minmax(15px, 1fr))`,
          gridTemplateRows: `repeat(${boardSize}, minmax(15px, 1fr))`,
          width: "90vmin",
          height: "90vmin",
        }}
      >
        {Array.from({ length: boardSize * boardSize }).map((_, index) => (
          <div
            key={index}
            className={`w-full h-full ${
              snake.includes(index)
                ? "bg-green-500"
                : index === food
                ? "bg-gray-950"
                : "bg-gray-700"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
