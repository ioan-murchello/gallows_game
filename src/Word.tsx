import styled from "styled-components";
import { useGameContext } from "./ctx";
import "animate.css";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WordWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: clamp(1.2rem, 5vw, 3rem);
  gap: 0.5rem;

  @media (max-width: 600px) {
    gap: 0.2rem;
  }
`;

const KeyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  border-bottom: 3px solid black;
  width: 3rem;
  height: 3rem;
  text-transform: uppercase;
  font-size: 2rem;
  color: #000;
  background-color: yellow;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    gap: 0.2rem;
    width: 2rem;
    height: 2rem;
  }
`;

const Description = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }
`;

const Key = styled.div<{ $active: boolean }>`
  outline: none;
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
`;

const Word = () => {
  const { guessedLetters, wordToGuess } = useGameContext();

  return (
    <Wrapper>
      <Description className="font">{wordToGuess.description}:</Description>
      <WordWrapper>
        {wordToGuess.answer.split("").map((el, idx) => (
          <KeyWrapper key={idx}>
            <Key
              className={
                guessedLetters.includes(el)
                  ? "animate__animated animate__headShake"
                  : ""
              }
              $active={guessedLetters.includes(el)}
            >
              {el}
            </Key>
          </KeyWrapper>
        ))}
      </WordWrapper>
    </Wrapper>
  );
};

export default Word;
