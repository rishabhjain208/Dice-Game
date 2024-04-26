import styled from "styled-components"
const TotalScore = ({ score }) => {
    return (
        <Container>
            <h1>{score}</h1>
            <p>Total Score</p>
        </Container>
    )
}

export default TotalScore

const Container = styled.div`
     padding-left: 30px;
    max-width: 200px;
    text-align: center;
    h1{
        font-size: 100px;
    }
    p{
       
        font-size: 24px;
        font-weight: 800;
    }
`;