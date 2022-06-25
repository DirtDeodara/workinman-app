import "./endGameView.css"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { useAppContext } from "../stores/AppProvider"
import { ReactComponent as Finished } from "../assets/finished.svg"
import { ReactComponent as PlayAgainBtn } from "../assets/play_again_btn.svg"
import { handleBtnGrow, handleBtnShrink } from "../utils/handleButtonAnimations"

const EndGameView = () => {
  const { numOfCorrectAnswers, setNumOfCorrectAnswers } = useAppContext()
  const endGameRef = useRef()
  const playAgainRef = useRef()

  useEffect(() => {
    if (numOfCorrectAnswers >= 27) {
      gsap.fromTo(
        endGameRef.current,
        { scale: 0 },
        { delay: 0.5, duration: 4, scale: 1, ease: "elastic" }
      )
    }
  }, [numOfCorrectAnswers])

  return (
    <div ref={endGameRef} className="finished">
      <Finished />
      <button
        className="play-again"
        onClick={() => setNumOfCorrectAnswers(0)}
        ref={playAgainRef}
        onMouseEnter={() => handleBtnGrow(playAgainRef.current)}
        onMouseLeave={() => handleBtnShrink(playAgainRef.current)}
      >
        <PlayAgainBtn />
      </button>
    </div>
  )
}

export default EndGameView
