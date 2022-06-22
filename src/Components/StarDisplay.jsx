import "./starDisplay.css"
import { ReactComponent as GoldStar } from "../assets/gold_star.svg"
import { ReactComponent as SilverStar } from "../assets/silver_star.svg"
import { ReactComponent as BronzeStar } from "../assets/bronze_star.svg"
import { ReactComponent as HollowStar } from "../assets/hollow_star.svg"
import { useAppContext } from "../stores/AppProvider"

const StarDisplay = () => {
  const { numOfCorrectAnswers } = useAppContext()

  const generateFirstStar = (num) => {
    if (num > 0 && num < 4) {
      return <BronzeStar className="star" />
    } else if (num > 3 && num < 7) {
      return <SilverStar className="star" />
    } else if (num > 6) {
      return <GoldStar className="star" />
    } else {
      return <HollowStar className="star" />
    }
  }
  const generateSecondStar = (num) => {
    if (num > 1 && num < 5) {
      return <BronzeStar className="star" />
    } else if (num > 4 && num < 8) {
      return <SilverStar className="star" />
    } else if (num > 7) {
      return <GoldStar className="star" />
    } else {
      return <HollowStar className="star" />
    }
  }
  const generateThirdStar = (num) => {
    if (num > 2 && num < 6) {
      return <BronzeStar className="star" />
    } else if (num > 5 && num < 9) {
      return <SilverStar className="star" />
    } else if (num >= 9) {
      return <GoldStar className="star" />
    } else {
      return <HollowStar className="star" />
    }
  }

  return (
    <div className="starContainer">
      {generateFirstStar(numOfCorrectAnswers)}
      {generateSecondStar(numOfCorrectAnswers)}
      {generateThirdStar(numOfCorrectAnswers)}
    </div>
  )
}

export default StarDisplay
