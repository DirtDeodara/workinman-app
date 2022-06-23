import "./numbersPad.css"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { numberButtonIconMap } from "../utils/numberIcons"
import { ReactComponent as Answer } from "../assets/answer_btn.svg"
import { ReactComponent as Correct } from "../assets/correct_btn.svg"
import { ReactComponent as TryAgain } from "../assets/try_again_btn.svg"
import { useAppContext } from "../stores/AppProvider"

const NumbersPad = () => {
  const { setUserAnswer, evaluateUserAnswer, hasSubmitted, isCorrect } =
    useAppContext()

  const numberIconArray = Object.entries(numberButtonIconMap)

  const numberBtnsRef = useRef([])
  const answerBtnRef = useRef()

  const handleBtnGrow = (ref) => {
    gsap.to(ref, { scale: "1.1", ease: "back" })
  }

  const handleBtnShrink = (ref) => {
    gsap.to(ref, { scale: "1", ease: "back" })
  }

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
      <div className="flexbox">
        {numberIconArray.map(([key, value], i) => {
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
      </div>
    </div>
  )
}

export default NumbersPad
