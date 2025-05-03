import "./App.css";
import styled from "styled-components";
import { useCallback, useEffect } from "react";

import Word from "./Word.js";
import Keyboard from "./Keyboard.js";
import ManBody from "./ManBody.js";
import { useGameContext } from "./ctx.js";
import Info from "./Info.js"; 

const Main = styled.main`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  width: 100%;
  margin: 0 auto;
  gap: 2rem;
`;

function App() {
  const { guessedLetters, setGuessedLetters, wordToGuess } = useGameContext();

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((prevLetters) => [
        ...prevLetters,
        letter.toLowerCase(),
      ]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (!key.match(/^[a-z]$/)) return;

      const isWinner = wordToGuess.answer
        .split("")
        .every((letter) => guessedLetters.includes(letter));

      const incorrectLetters = guessedLetters.filter(
        (letter) => !wordToGuess.answer.includes(letter)
      );
      const isLoser = incorrectLetters.length >= 8;

      if (isWinner || isLoser) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetters, wordToGuess.answer]);

  return (
    <Main>
      <Info />
      <ManBody />
      <Word />
      <Keyboard />
    </Main>
  );
}

export default App;
