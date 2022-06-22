import "./App.css"
import { AppProvider } from "./stores/AppProvider"
import background from "./assets/space-background.jpg"
import NumbersPad from "./Components/NumbersPad"
import EquationDisplay from "./Components/EquationDisplay"
import StarDisplay from "./Components/StarDisplay"

const App = () => {

  return (
    <AppProvider>
      <div className="app">
        <img
        className="background"
        src={background}
        alt="an illustration of outer space"
      />
        <StarDisplay />
        <EquationDisplay />
        <NumbersPad />
      </div>
    </AppProvider>
  )
}

export default App
