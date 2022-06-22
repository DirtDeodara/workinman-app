import "./equationDisplay.css"
import { ReactComponent as Equal } from "../assets/equal.svg"
import { useAppContext } from "../stores/AppProvider"
import generateIcons from "../utils/generateIcons"

const EquationDisplay = () => {
  const { userAnswer, partsOfEquation } = useAppContext()
  const { a, b, operator } = partsOfEquation
  
  const aToDisplay = a
    .toString()
    .split("")
    .map((number) => generateIcons(number))

  const bToDisplay = b
    .toString()
    .split("")
    .map((number) => generateIcons(number))

  const answerToDisplay = userAnswer
    .split("")
    .map((number) => generateIcons(number))

  return (
    <div className="equationContainer">
      <div className="element">{aToDisplay}</div>
      <div className="element">{generateIcons(operator)}</div>
      <div className="element">{bToDisplay}</div>
      <div className="element">
        <Equal />
      </div>
      <div className="element">{answerToDisplay}</div>
    </div>
  )
}

export default EquationDisplay
