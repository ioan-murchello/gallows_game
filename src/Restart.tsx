import styled from "styled-components";
import { useGameContext } from "./ctx";

const RestartBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  font-size: 1.4rem;
  border-radius: 6px;
  width: 50px;
  height: 35px;
  background-color: yellow;
  box-shadow: 0 2px 0 1px #000;
  cursor: pointer;

  &:active {
    top: 3px;
  }
`;

type RestartProps = {
  children: React.ReactNode;
};

const Restart = ({ children }: RestartProps) => {
  const { setWordToGuess, setGuessedLetters, wordsShuffler } = useGameContext();
  return (
    <RestartBtn
      onClick={() => {
        setWordToGuess(wordsShuffler());
        setGuessedLetters([]);
      }}
    >
      {children}
    </RestartBtn>
  );
};
export default Restart;
