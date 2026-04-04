import { motion } from "framer-motion";
import Section from "./Section";

function Services({ fadeUp, serviceNames }) {
  return (
    <Section id="services" eyebrow="Our Services" title="Our Services">
      <div className="service-grid service-grid-text">
        {serviceNames.map((service, index) => (
          <motion.article
            key={service}
            className="service-card service-text-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
          >
            <p className="tamil-text service-title service-title-centered">{service}</p>
          </motion.article>
        ))}
      </div>

      <div className="note-card tamil-text">
        மேற்கண்ட அனைத்து வேலைகளும் மிகக் குறைந்த விலையில் மற்றும் சிறந்த முறையில் செய்து
        தரப்படும்.
      </div>
    </Section>
  );
}

export default Services;
