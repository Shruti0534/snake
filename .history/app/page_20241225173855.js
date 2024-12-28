'use client'
import React, { useState, useEffect } from "react";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";

export default function Home() {
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4 sm:px-8 md:px-16">
      <h1 className="text-8xl text-center text-black sm:text-5xl md:text-6xl font-bold bg-slate-400 mb-8 p-4 rounded-md">
        Snake Game
      </h1>
      <ScoreBoard score={score} />
      <div className="w-full max-w-4xl">
        <GameBoard score={score} setScore={setScore} />
      </div>
    </div>
  );
}

