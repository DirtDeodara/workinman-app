import "./numberButton.css"
import { useState, SetStateAction } from "react"
import { ReactComponent as One } from "../assets/number-1.svg"

const NumberButton = () => {
  const [frogClicked, setFrogClicked] = useState(false)

  return (
    <button className="btn">
      <One />
    </button>
  )
}

export default NumberButton
