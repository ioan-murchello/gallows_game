import styled from "styled-components";
import { useGameContext } from "./ctx";
import "animate.css";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const LettersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(38px, 1fr));
  gap: 0.5rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 0.2rem;
    padding: 0.5rem;
  }

  button {
    aspect-ratio: 1;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    border-radius: 8px;
    cursor: pointer;
  }
`;

const Letter = styled.button<{ $inactive: boolean }>`
  outline: none;
  display: flex;
  background-color: #000000;
  justify-content: center;
  color: #29ff29;
  align-items: center;
  border: 2px solid black;
  width: 40px;
  height: 40px;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0 0 8px #29ff29;
  cursor: pointer;
  opacity: ${({ $inactive }) => ($inactive ? 0.4 : 1)};
  pointer-events: ${({ $inactive }) => ($inactive ? "none" : "auto")};
  /* if button not disabled, focus and hover active */
  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: #565656;
  }

  &:disabled {
    cursor: no-drop;
  }
`;

const Keyboard = () => {
  const { incorrectLetters, addGuessedLetter, isLoser, isWinner } =
    useGameContext();
  return (
    <LettersWrapper>
      {letters.map((el) => {
        const inactive = incorrectLetters.includes(el.toLowerCase());
        return (
          <Letter
            className="font2 "
            disabled={isLoser || isWinner}
            $inactive={inactive}
            onClick={() => addGuessedLetter(el.toLowerCase())}
            key={el}
          >
            {el}
          </Letter>
        );
      })}
    </LettersWrapper>
  );
};
export default Keyboard;
