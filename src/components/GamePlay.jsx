import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [setectedNumber, setSetNumber] = useState();
    const [currentState, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showrules, setRules] = useState(false)

    const generateRandomNumnber = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min);
    }

    const RoleDice = () => {
        if (!setectedNumber) {
            setError("You have not selected any number");
            return;
        }

        const RandNumber = generateRandomNumnber(1, 7);
        setCurrentDice((prev) => RandNumber);


        if (setectedNumber == RandNumber) {
            setScore((prev) => prev + RandNumber)
        } else {
            setScore((prev) => prev - 2)
        }

        setSetNumber(undefined)
    }

    const SetScore = () => {
        setScore(0);
    }
    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelector
                    setError={setError}
                    error={error}
                    setectedNumber={setectedNumber}
                    setSetNumber={setSetNumber} />
            </div>
            <RollDice currentState={currentState}
                RoleDice={RoleDice} />
            <div className="btn">
                <OutlineButton onClick={SetScore}>Reset Score</OutlineButton>
                <Button onClick={() => setRules((prev) => !prev)}>
                    {showrules ? "Hide" : "Show"} Rules
                </Button>
            </div>
            {showrules && <Rules />}
        </MainContainer>
    )
}

export default GamePlay


const MainContainer = styled.div`
padding-right: 50px;
.top_section{
    padding-top: 50px;
    margin-right: 40px;
    align-items: end;
    display: flex;
    justify-content: space-between;
}
.btn{
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
    flex-direction: column;
    /* width: 220px; */
}
`;
