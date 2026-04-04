import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp
} from "react-icons/fa";
import Section from "./Section";

function Contact({ contactActions, fadeUp }) {
  return (
    <Section id="contact" eyebrow="Contact" title="Contact">
      <div className="contact-layout">
        <motion.div
          className="contact-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h3>Phone Numbers</h3>
          <a href="tel:9360423350" className="contact-number">
            9360423350
          </a>
          <a href="tel:8190008077" className="contact-number">
            8190008077
          </a>
          <p className="contact-copy tamil-text">
            அழைக்கவும், வாட்ஸ்அப் செய்யவும், இன்ஸ்டாகிராமில் தொடர்பு கொள்ளவும்.
          </p>
        </motion.div>

        <div className="action-grid">
          {contactActions.map((action, index) => (
            <motion.div
              key={action.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <ActionButton {...action} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ActionButton({ href, icon, label }) {
  const external = href.startsWith("http");
  const iconMap = {
    phone: <FaPhoneAlt />,
    whatsapp: <FaWhatsapp />,
    instagram: <FaInstagram />,
    email: <FaEnvelope />
  };

  return (
    <a
      className="action-button"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="action-icon">{iconMap[icon]}</span>
      <span>{label}</span>
      <FaArrowRight />
    </a>
  );
}

export default Contact;
