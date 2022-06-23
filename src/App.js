import "./App.css"
import { AppProvider } from "./stores/AppProvider"
import GameGonsole from "./Components/GameConsole"


const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <GameGonsole />
      </div>
    </AppProvider>
  )
}

export default App
