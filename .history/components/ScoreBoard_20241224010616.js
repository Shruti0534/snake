import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <div className="bg-slate-800 px-4 sm:px-6 md:px-8 py-2 text-lg sm:text-xl font-semibold mb-4">
      <span>Score: </span>
      <span className="text-green-400">{score}</span>
    </div>
  );
};

export default ScoreBoard;
