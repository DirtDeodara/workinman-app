import "./gameConsole.css"
import EquationDisplay from "./EquationDisplay"
import NumbersPad from "./NumbersPad"
import StarDisplay from "./StarDisplay"
import LevelDisplay from "./LevelDisplay"
import { useAppContext } from "../stores/AppProvider"

import PraiseDisplay from "./PraiseDisplay"
import EndGameView from "./EndGameView"

const GameGonsole = () => {
  const { shouldPraise, numOfCorrectAnswers } =
    useAppContext()

  const whatToShow = () => {
    if (numOfCorrectAnswers >= 27) {
      return <EndGameView />
    } else {
      return (
        <div className="console-container">
          {shouldPraise ? <PraiseDisplay /> : <LevelDisplay />}
          <StarDisplay />
          <EquationDisplay />
          <NumbersPad />
        </div>
      )
    }
  }

  return whatToShow()
}

export default GameGonsole
