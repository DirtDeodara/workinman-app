import { useMemo, useState, useEffect } from "react"

const useGameState = () => {
  const [userAnswer, setUserAnswer] = useState("")
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [level, setLevel] = useState(1)

  useEffect(() => {
    setLevel(Math.floor(1 + numOfCorrectAnswers / 9))
  }, [numOfCorrectAnswers])

  console.log(level)

  const partsOfEquation = useMemo(() => {
    const stage = Math.floor(numOfCorrectAnswers / 3)
    const max = (1 + stage) * 10
    const min = stage * 10
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

    if (parseInt(userAnswer) === result) {
      setIsCorrect(true)
      setTimeout(() => {
        setNumOfCorrectAnswers((prevState) => prevState + 1)
        setUserAnswer("")
        setHasSubmitted(false)
        setIsCorrect(false)
      }, 1000)
    } else {
      setIsCorrect(false)
      setTimeout(() => {
        setUserAnswer("")
        setHasSubmitted(false)
      }, 1000)
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
    level
  }
}

export default useGameState
