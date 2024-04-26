import styled from "styled-components"

const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div><img src="/images/dices 1.png" alt="dice image" width="649px" height="522px" /></div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>

        </Container>
    )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    align-items: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Button = styled.button`
    padding: 10px 18px;
    background: black ;
    color: white;
    min-width: 220px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;
    float: right;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;