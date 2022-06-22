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

  const answerBtnRef = useRef()

  useEffect(() => {
    gsap.to(answerBtnRef, { rotation: "+=360" })
  })

  return (
    <div className="numPadContainer">
      <button
        className="answerBtn"
        disabled={hasSubmitted}
        onClick={() => evaluateUserAnswer()}
        ref={answerBtnRef.current}
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
              onClick={() => {
                setUserAnswer((prevState) => {
                  return prevState + number
                })
              }}
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
