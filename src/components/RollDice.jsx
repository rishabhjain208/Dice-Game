import { useState } from "react"
import styled from "styled-components"


const RollDice = ({ currentState, RoleDice }) => {
    return (
        <DiceContainer>
            <div className="dice" onClick={RoleDice}>
                <img src={`/images/dice/dice_${currentState}.png`} alt="dice_1" />
                <p>Click on Dice to roll</p>

            </div>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`
  
    display: flex;
    justify-content: center;
    
    p{
        display: flex;
        justify-content: center;
        font-size: 24px;
        font-weight: 600;
    }
    
`;

