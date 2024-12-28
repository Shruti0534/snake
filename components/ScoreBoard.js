import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <div className="bg-slate-800 px-6 py-3 rounded-lg shadow-md text-center w-full max-w-md text-white sm:text-xl md:text-2xl font-semibold mb-6">
      <span>Score: </span>
      <span className="text-green-400">{score}</span>
    </div>
  );
};

export default ScoreBoard;
