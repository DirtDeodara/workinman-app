import "./levelDisplay.css"
import { ReactComponent as Level } from "../assets/level.svg"
import { ReactComponent as One } from "../assets/purple_1.svg"
import { ReactComponent as Two } from "../assets/purple_2.svg"
import { ReactComponent as Three } from "../assets/purple_3.svg"
import { useAppContext } from "../stores/AppProvider"

const LevelDisplay = () => {
  const { level } = useAppContext()

  const levelToDisplay = () => {
    switch (level) {
      case 1:
        return <One className="text"/>
      case 2:
        return <Two className="text"/>
      case 3:
        return <Three className="text"/>
      default:
        break
    }
  }
  
  return (
    <div className="level-container">
      <Level className="text"/>
      {levelToDisplay()}
    </div>
  )
}

export default LevelDisplay
