import "./starDisplay.css"
import { useRef, useEffect, useMemo } from "react"
import { gsap } from "gsap"
import { ReactComponent as GoldStar } from "../assets/gold_star.svg"
import { ReactComponent as SilverStar } from "../assets/silver_star.svg"
import { ReactComponent as BronzeStar } from "../assets/bronze_star.svg"
import { ReactComponent as HollowStar } from "../assets/hollow_star.svg"
import { useAppContext } from "../stores/AppProvider"

const StarDisplay = () => {
  const { numOfCorrectAnswers, hasSubmitted, isCorrect, level } =
    useAppContext()

  const firstStarRef = useRef()
  const secondStarRef = useRef()
  const thirdStarRef = useRef()

  const refs = useMemo(() => {
    return [firstStarRef, secondStarRef, thirdStarRef]
  }, [])

  useEffect(() => {
    refs.forEach((ref, i) => {
      return gsap.to(ref.current, { rotate: 720 })
    })
  }, [hasSubmitted, isCorrect, refs])

  const starCount = numOfCorrectAnswers % 9

  const generateFirstStar = (num, ref) => {
    if (num > 0 && num < 4) {
      return <BronzeStar ref={ref} className="star" />
    } else if (num > 3 && num < 7) {
      return <SilverStar ref={ref} className="star" />
    } else if (num > 6) {
      return <GoldStar ref={ref} className="star" />
    } else {
      return <HollowStar ref={ref} className="star" />
    }
  }
  const generateSecondStar = (num, ref) => {
    if (num > 1 && num < 5) {
      return <BronzeStar ref={ref} className="star" />
    } else if (num > 4 && num < 8) {
      return <SilverStar ref={ref} className="star" />
    } else if (num > 7) {
      return <GoldStar ref={ref} className="star" />
    } else {
      return <HollowStar ref={ref} className="star" />
    }
  }
  const generateThirdStar = (num, ref) => {
    if (num > 2 && num < 6) {
      return <BronzeStar ref={ref} className="star" />
    } else if (num > 5 && num < 9) {
      return <SilverStar ref={ref} className="star" />
    } else if (num >= 9) {
      return <GoldStar ref={ref} className="star" />
    } else {
      return <HollowStar ref={ref} className="star" />
    }
  }

  return (
    <div className="starContainer">
      {generateFirstStar(starCount, firstStarRef)}
      {generateSecondStar(starCount, secondStarRef)}
      {generateThirdStar(starCount, thirdStarRef)}
    </div>
  )
}

export default StarDisplay
