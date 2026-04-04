import { motion } from "framer-motion";
import Section from "./Section";

function Work({ fadeUp, workImages }) {
  return (
    <Section id="work" eyebrow="Our Work" title="Our Work">
      <div className="gallery-grid gallery-grid-work">
        {workImages.map((image, index) => (
          <motion.figure
            key={image.id}
            className="gallery-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
          >
            <img src={image.src} alt={image.title} />
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

export default Work;
