import { motion } from "framer-motion";

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="content-section">
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2>{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export default Section;
