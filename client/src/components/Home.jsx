import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi2";
import Section from "./Section";
import homePhoto from "../assets/home/homephoto.jpeg";

function Home({ fadeUp }) {
  return (
    <Section id="home" eyebrow="Home" title="Home">
      <div className="hero-card hero-card-centered">
        <motion.div
          className="hero-visual"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="hero-image-card hero-image-card-large">
            <img
              className="excavator-image excavator-image-large"
              src={homePhoto}
              alt="Arul Earth Movers mini excavator"
            />
          </div>
        </motion.div>

        <motion.div
          className="hero-copy hero-copy-centered hero-copy-below"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="hero-pill">
            <HiOutlineSparkles />
            Trusted Earthmoving Support
          </span>
          <p className="tamil-text home-description home-description-wide">
            எங்களிடம் கட்டுமானத்திற்கு தொடர்பான அனைத்து வேலைகளும் சிறந்த முறையில் செய்து
            தரப்படும்.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

export default Home;
