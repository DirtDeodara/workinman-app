import "./gameConsole.css"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import EquationDisplay from "./EquationDisplay"
import NumbersPad from "./NumbersPad"
import StarDisplay from "./StarDisplay"
import LevelDisplay from "./LevelDisplay"
import { useAppContext } from "../stores/AppProvider"
import { ReactComponent as Finished } from "../assets/finished.svg"

import PraiseDisplay from "./PraiseDisplay"

const GameGonsole = () => {
  const { shouldPraise, numOfCorrectAnswers } = useAppContext()

  const praiseRef = useRef()

  useEffect(() => {
    if (numOfCorrectAnswers >= 27) {
      gsap.fromTo(
        praiseRef.current,
        { scale: 0 },
        { delay: .5, duration: 4, scale: 1, ease: "elastic" }
      )
    }
  }, [numOfCorrectAnswers])

  const whatToShow = () => {
    if (numOfCorrectAnswers >= 27) {
      return (
        <div ref={praiseRef} className="finished">
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
