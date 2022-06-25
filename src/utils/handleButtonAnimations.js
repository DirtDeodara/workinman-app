import { gsap } from "gsap"

const handleBtnGrow = (ref) => {
  gsap.to(ref, { scale: "1.1" })
}

const handleBtnShrink = (ref) => {
  gsap.to(ref, { scale: "1", ease: "bounce" })
}

export { handleBtnGrow, handleBtnShrink }
