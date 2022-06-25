import "./numbersPad.css"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { numberButtonIconMap } from "../utils/numberIconsMap"
import { ReactComponent as Answer } from "../assets/answer_btn.svg"
import { ReactComponent as Correct } from "../assets/correct_btn.svg"
import { ReactComponent as TryAgain } from "../assets/try_again_btn.svg"
import { ReactComponent as Clear } from "../assets/clear_btn.svg"
import { useAppContext } from "../stores/AppProvider"
import { handleBtnGrow, handleBtnShrink } from "../utils/handleButtonAnimations"

const NumbersPad = () => {
  const { setUserAnswer, evaluateUserAnswer, hasSubmitted, isCorrect } =
    useAppContext()

  const numberIconArray = Object.entries(numberButtonIconMap)

  const numberBtnsRef = useRef([])
  const answerBtnRef = useRef()
  const clearBtnRef = useRef()

  const handleUserAnswer = (answer) => {
    setUserAnswer((prevState) => {
      return prevState + answer
    })
  }

  useEffect(() => {
    numberBtnsRef.current = numberBtnsRef.current.slice(
      0,
      numberIconArray.length
    )
  }, [numberIconArray.length])

  return (
    <div className="numPadContainer">
      <div className="actionBtns">
        <button
          className="answerBtn"
          disabled={hasSubmitted}
          onClick={() => evaluateUserAnswer()}
          ref={answerBtnRef}
          onMouseEnter={() => handleBtnGrow(answerBtnRef.current)}
          onMouseLeave={() => handleBtnShrink(answerBtnRef.current)}
        >
          {hasSubmitted && isCorrect ? (
            <Correct />
          ) : hasSubmitted && !isCorrect ? (
            <TryAgain />
          ) : (
            <Answer />
          )}
        </button>
      </div>

      <div className="numbers">
        {numberIconArray.map(([_, value], i) => {
          const Icon = value.icon
          const number = value.number
          return (
            <button
              key={i}
              className="numBtn"
              disabled={hasSubmitted}
              onClick={() => handleUserAnswer(number)}
              ref={(el) => (numberBtnsRef.current[i] = el)}
              onMouseEnter={() => handleBtnGrow(numberBtnsRef.current[i])}
              onMouseLeave={() => handleBtnShrink(numberBtnsRef.current[i])}
            >
              <Icon />
            </button>
          )
        })}
        <button
          className="clearBtn"
          disabled={hasSubmitted}
          onClick={() => setUserAnswer("")}
          ref={clearBtnRef}
          onMouseEnter={() => handleBtnGrow(clearBtnRef.current)}
          onMouseLeave={() => handleBtnShrink(clearBtnRef.current)}
        >
          <Clear />
        </button>
      </div>
    </div>
  )
}

export default NumbersPad
