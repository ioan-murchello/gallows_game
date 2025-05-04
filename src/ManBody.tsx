import styled from "styled-components";
import { useGameContext } from "./ctx";

const Gallows = styled.div`
  position: relative;
  width: 160px;
  height: 240px;
  margin: 2rem auto;
  border-left: 4px solid black;
  border-top: 4px solid black;

  @media (max-width: 600px) {
    width: 120px;
    height: 180px;
  }
`;

const AllBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Rope = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 40px;
  background-color: black;

  @media (max-width: 600px) {
    height: 25px;
  }
`;

const Head = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border: 4px solid black;
  border-radius: 50%;

  @media (max-width: 600px) {
    width: 25px;
    height: 25px;
    top: 30px;
  }
`;

const Body = styled.div`
  position: absolute;
  top: 84px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 70px;
  background-color: black;

  @media (max-width: 600px) {
    height: 50px;
    top: 65px;
  }
`;

const Arm = styled.div<{ $side: "left" | "right" }>`
  position: absolute;
  top: 90px;
  left: 63%;
  width: 40px;
  height: 4px;
  background-color: black;
  transform: ${({ $side }) =>
    $side === "left"
      ? "translateX(-50%) rotate(140deg)"
      : "translateX(-50%) rotate(45deg)"};
  transform-origin: left;

  @media (max-width: 600px) {
    width: 30px;
    top: 80px;
  }
`;

const Leg = styled.div<{ $side: "left" | "right" }>`
  position: absolute;
  top: 150px;
  left: 65%;
  width: 50px;
  height: 4px;
  background-color: black;
  transform: ${({ $side }) =>
    $side === "left"
      ? "translateX(-50%) rotate(135deg)"
      : "translateX(-50%) rotate(45deg)"};
  transform-origin: left;

  @media (max-width: 600px) {
    width: 35px;
    top: 110px;
  }
`;

const ManBody = () => {
  const { incorectCount } = useGameContext();
  return (
    <Gallows>
      <Rope />
      <AllBody>
        {incorectCount >= 3 && <Head />}
        {incorectCount >= 4 && <Body />}
        {incorectCount >= 5 && <Arm $side="left" />}
        {incorectCount >= 6 && <Arm $side="right" />}
        {incorectCount >= 7 && <Leg $side="left" />}
        {incorectCount >= 8 && <Leg $side="right" />}
      </AllBody>
    </Gallows>
  );
};

export default ManBody;
