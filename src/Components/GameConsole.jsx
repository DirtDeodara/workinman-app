import "./gameConsole.css"
import EquationDisplay from "./EquationDisplay"
import NumbersPad from "./NumbersPad"
import StarDisplay from "./StarDisplay"
import LevelDisplay from "./LevelDisplay"
import { useAppContext } from "../stores/AppProvider"
import PraiseDisplay from "./PraiseDisplay"

const GameGonsole = () => {
  const {shouldPraise } = useAppContext()

  return (
    <div className="console-container">
      {shouldPraise ? <PraiseDisplay /> :<LevelDisplay />}
      <StarDisplay />
      <EquationDisplay />
      <NumbersPad />
    </div>
  )
}

export default GameGonsole
