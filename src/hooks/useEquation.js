import { useMemo, useState } from "react"

const useEquation = () => {
  const [userAnswer, setUserAnswer] = useState("")
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  console.log("numOfCorrectAnswers:", numOfCorrectAnswers)

  const partsOfEquation = useMemo(() => {
    const level = Math.floor(numOfCorrectAnswers / 3)
    const max = (1 + level) * 10
    const min = level * 10
    const a = Math.ceil(Math.random() * (max - min) + min)
    const b = Math.ceil(Math.random() * (max - min) + min)
    const operator = true ? "+" : "-"

    return {
      a,
      b,
      operator,
    }
  }, [numOfCorrectAnswers])

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
      }, 2000)
    } else {
      setHasSubmitted(true)
      setIsCorrect(false)
      setTimeout(() => {
        setUserAnswer("")
        setHasSubmitted(false)
      }, 2000)
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
  }
}

export default useEquation
