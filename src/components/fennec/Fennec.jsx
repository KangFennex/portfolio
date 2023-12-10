import "../../sass/components/_index.scss"
import fennec from "../../assets/background/fennec.png"
import { motion, useScroll } from "framer-motion";

const Fennec = () => {
  const { scrollY } = useScroll();

  return (
    <>
      <motion.div
        style={{ x: scrollY, y: scrollY }}
        className="fennec-container">
        <img src={fennec} alt="Fennec" className="fennec-container__fennec" />
      </motion.div>
    </>
  )
}

export default Fennec
