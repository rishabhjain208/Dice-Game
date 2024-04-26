
import styled from "styled-components"

const NumberSelector = ({ setError, error, setectedNumber, setSetNumber }) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
    const setEventErrorHandler = (value) => {
        setSetNumber(value)
        setError("");
    }
    return (
        <NumberSelectorContainer>
            <p className="Color">{error}</p>
            <div className="number">
                {arrNumber.map((value, i) => (
                    <Box key={i} onClick={() => setEventErrorHandler(value)}
                        isSelected={value == setectedNumber}
                    >{value}</Box>
                ))}

            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>

    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    
    .Color{
        color: red;
        font-size: 14px;
        font-weight: 500;
    }
    .number{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 800;
        padding-top: 24px;
    }
`;

const Box = styled.div`
    border: 1px solid black;
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 800;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`;