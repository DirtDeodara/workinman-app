import { useContext, createContext } from "react"
import useGameState from "../hooks/useGameState"

const initalContext = {
  userAnswer: "",
  setUserAnswer: () => {},
  partsOfEquation: {
    a: Math.ceil(Math.random() * 9),
    b: Math.ceil(Math.random() * 9),
    operator: "+",
  },
  evaluateUserAnswer: () => {},
  numOfCorrectAnswers: 0,
  isCorrect: false,
  hasSubmitted: false,
  level: 1,
}

const AppContext = createContext(initalContext)

const AppProvider = ({ children }) => {
  const equationContext = useGameState()

  return (
    <AppContext.Provider value={{ ...equationContext }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined)
    throw new Error("Cant access context outside of the provider")

  return context
}

export { AppProvider, useAppContext }
