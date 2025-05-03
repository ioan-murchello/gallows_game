import { createContext, useContext, useState } from "react";
import { words } from "./words";

type GuessWords = {
  description: string;
  answer: string;
};

type GameContextType = {
  wordToGuess: GuessWords;
  setWordToGuess: React.Dispatch<React.SetStateAction<GuessWords>>;
  guessedLetters: string[];
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  incorrectLetters: string[];
  incorectCount: number;
  addGuessedLetter: (letter: string) => void;
  isLoser: boolean; 
  isWinner: boolean;
  wordsShuffler: () => GuessWords;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  // ** Function to shuffle words
  function wordsShuffler(): GuessWords {
    return words[Math.floor(Math.random() * words.length)];
  }

  const [wordToGuess, setWordToGuess] = useState<GuessWords>(wordsShuffler());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => {
    return !wordToGuess.answer.includes(letter);
  });

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((prevLetters) => [...prevLetters, letter.toLowerCase()]);
  };

  const isLoser = incorrectLetters.length >= 8; 
  
  const isWinner = wordToGuess.answer
    .split("")
    .every((letter) => guessedLetters.includes(letter));
 
  return (
    <GameContext.Provider
      value={{
        wordToGuess,
        setWordToGuess,
        guessedLetters,
        setGuessedLetters,
        incorrectLetters,
        addGuessedLetter,
        isLoser,
        isWinner,
        wordsShuffler, 
        incorectCount: incorrectLetters.length,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
