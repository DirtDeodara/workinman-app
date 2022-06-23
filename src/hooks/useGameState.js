import { useMemo, useState, useEffect } from "react"

const useGameState = () => {
  const [userAnswer, setUserAnswer] = useState("")
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [level, setLevel] = useState(1)
  const [shouldPraise, setShouldPraise] = useState(false)

  useEffect(() => {
    setLevel(Math.floor(1 + numOfCorrectAnswers / 9))
  }, [numOfCorrectAnswers])

  const partsOfEquation = useMemo(() => {
    const factor = Math.floor((numOfCorrectAnswers % 9) / (3 * level))
    const max = (1 + factor) * 10
    const min = factor * 10
    const a = Math.ceil(Math.random() * (max - min) + min)
    const b = Math.ceil(Math.random() * (max - min) + min)
    const operator = level === 1 ? "+" : "-"

    return {
      a,
      b,
      operator,
    }
  }, [level, numOfCorrectAnswers])

  const evaluateUserAnswer = () => {
    setHasSubmitted(true)

    const { a, b, operator } = partsOfEquation
    let result
    switch (operator) {
      case "+":
        result = a + b
        break
      case "-":
        result = a - b
        break
      default:
        break
    }

    const hasAdvancedLevel = (numOfCorrectAnswers + 1) % 9 === 0
    const timeout = hasAdvancedLevel ? 2000 : 1000

    const handleCorrect = () => {
      setIsCorrect(true)
      numOfCorrectAnswers > 0 && hasAdvancedLevel
        ? setShouldPraise(true)
        : setShouldPraise(false)

      setTimeout(() => {
        setNumOfCorrectAnswers((prevState) => prevState + 1)
        setUserAnswer("")
        setHasSubmitted(false)
        setIsCorrect(false)
        setShouldPraise(false)
      }, timeout)
    }

    const handleIncorrect = () => {
      setIsCorrect(false)

      setTimeout(() => {
        setUserAnswer("")
        setHasSubmitted(false)
      }, timeout)
    }

    if (parseInt(userAnswer) === result) {
      handleCorrect()
    } else {
      handleIncorrect()
    }
  }

  return {
    userAnswer,
    setUserAnswer,
    partsOfEquation,
    evaluateUserAnswer,
    numOfCorrectAnswers,
    isCorrect,
    hasSubmitted,
    level,
    shouldPraise,
  }
}

export default useGameState
