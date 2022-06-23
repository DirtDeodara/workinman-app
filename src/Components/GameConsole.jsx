import "./gameConsole.css"
import EquationDisplay from "./EquationDisplay"
import NumbersPad from "./NumbersPad"
import StarDisplay from "./StarDisplay"
import LevelDisplay from "./LevelDisplay"
import { useAppContext } from "../stores/AppProvider"
import { ReactComponent as Finished } from "../assets/finished.svg"

import PraiseDisplay from "./PraiseDisplay"

const GameGonsole = () => {
  const { shouldPraise, numOfCorrectAnswers } = useAppContext()

  const whatToShow = () => {
    if (numOfCorrectAnswers >= 27 ) {
      return (
        <div className="finished">
          <Finished />
        </div>
      )
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
