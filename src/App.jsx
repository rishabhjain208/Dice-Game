import StartGame from "./components/StartGame"
import { useState } from "react"
import GamePlay from "./components/GamePlay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleTheGame = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleTheGame} />}
    </>
  )
}

export default App
