import styled from "styled-components";
import { useGameContext } from "./ctx";
import Restart from "./Restart";

import { IoReload } from "react-icons/io5";
import { RxDoubleArrowRight } from "react-icons/rx";

const GameInfo = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  font-size: 1.5rem;
  min-height: 100px;

  @media (max-width: 600px) {
    min-height: 75px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  min-height: 100%;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    gap: 0.3rem;
  }
`;

const Info = () => {
  const { isLoser, isWinner } = useGameContext();

  return (
    <GameInfo
      className="font2"
      style={{ visibility: isWinner || isLoser ? "visible" : "hidden" }}
    >
      <InfoWrapper>
        {isLoser && "You lose. Try one more time"}
        {isWinner && "Congratulations, You win!"}
        {(isLoser || isWinner) && (
          <Restart>{isLoser ? <IoReload /> : <RxDoubleArrowRight />}</Restart>
        )}
      </InfoWrapper>
    </GameInfo>
  );
};
export default Info;
