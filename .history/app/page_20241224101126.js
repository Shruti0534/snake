'use client'
import React, { useState, useEffect } from "react";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";

export default function Home() {
  const [score, setScore] = useState(0);

  return (
   
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-8 md:px-16">
    <h1 className="text-4xl  text-black sm:text-5xl md:text-6xl font-bold mb-8 bg-slate-100">Snake Game</h1>
    <ScoreBoard score={score} />
    <GameBoard score={score} setScore={setScore} />
  </div>


  );
}
