import "./praiseDisplay.css"
import { ReactComponent as WellDone } from "../assets/well_done.svg"

const PraiseDisplay = () => {
  return true ? <WellDone className="praise"/> : null
}

export default PraiseDisplay
