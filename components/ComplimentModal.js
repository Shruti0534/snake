// components/ComplimentModal.js
import React from "react";

const compliments = [
  "You're unstoppable!",
  "What a legend!",
  "Amazing effort!",
  "Fantastic skills!",
  "Snake pro!",
  "You're a winner!",
  "Keep slithering!",
];

const ComplimentModal = ({ score, onRestart, onExit }) => {
  
  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

  return (
    <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
      <p className="mb-4 text-lg">{randomCompliment}</p>
      <p className="mb-6 text-lg">Your Final Score: {score}</p>
      <div className="flex space-x-4">
        <button
          className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
          onClick={onRestart}
        >
          Restart
        </button>
        <button
          className="px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
          onClick={onExit}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default ComplimentModal;
