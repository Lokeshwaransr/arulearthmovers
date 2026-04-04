export const sectionItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Our Services" },
  { id: "work", label: "Our Work" },
  { id: "contact", label: "Contact" }
];

export const serviceNames = [
  "பில்லர் குழி",
  "பேஸ்மென்ட் மண் நிரப்புதல்",
  "மரம் வேர் அகற்றுதல்",
  "பிளாட் கிளீனிங் & லெவலிங்",
  "வாய்க்கால் & குளம் தூய்மை செய்தல்",
  "பைப்லைன் குழி",
  "தென்னை மரம் குழி",
  "கட்டிடம் இடித்தல்",
  "செப்டிக் டேங்க் குழி"
];

const workImageModules = import.meta.glob("../assets/work/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default"
});

export const workImages = Object.entries(workImageModules)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([path, src], index) => ({
    id: path,
    src,
    title: serviceNames[index] ?? `Work ${index + 1}`
  }));

export const contactActions = [
  {
    href: "tel:9360423350",
    label: "Call Now",
    icon: "phone"
  },
  {
    href: "https://wa.me/918190008077",
    label: "WhatsApp Chat",
    icon: "whatsapp"
  },
  {
    href: "https://instagram.com/arul_earth_movers",
    label: "Instagram",
    icon: "instagram"
  },
  {
    href: "mailto:arulearthmovers005@gmail.com",
    label: "Email",
    icon: "email"
  }
];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut"
    }
  }
};
