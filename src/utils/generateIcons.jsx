import { ReactComponent as One } from "../assets/1.svg"
import { ReactComponent as Two } from "../assets/2.svg"
import { ReactComponent as Three } from "../assets/3.svg"
import { ReactComponent as Four } from "../assets/4.svg"
import { ReactComponent as Five } from "../assets/5.svg"
import { ReactComponent as Six } from "../assets/6.svg"
import { ReactComponent as Seven } from "../assets/7.svg"
import { ReactComponent as Eight } from "../assets/8.svg"
import { ReactComponent as Nine } from "../assets/9.svg"
import { ReactComponent as Zero } from "../assets/0.svg"
import { ReactComponent as Plus } from "../assets/plus.svg"
import { ReactComponent as Minus } from "../assets/minus.svg"
import { ReactComponent as Multiply } from "../assets/multiply.svg"

const generateIcons = (value, i) => {
  switch (value) {
    case "1":
      return <One key={`${value}${i}`} />
    case "2":
      return <Two key={`${value}${i}`} />
    case "3":
      return <Three key={`${value}${i}`} />
    case "4":
      return <Four key={`${value}${i}`} />
    case "5":
      return <Five key={`${value}${i}`} />
    case "6":
      return <Six key={`${value}${i}`} />
    case "7":
      return <Seven key={`${value}${i}`} />
    case "8":
      return <Eight key={`${value}${i}`} />
    case "9":
      return <Nine key={`${value}${i}`} />
    case "0":
      return <Zero key={`${value}${i}`} />
    case "+":
      return <Plus key={`${value}${i}`} />
    case "-":
      return <Minus key={`${value}${i}`} />
    case "*":
      return <Multiply key={`${value}${i}`} />
    default:
      return null
  }
}

export default generateIcons
