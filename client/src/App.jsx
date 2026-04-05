import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import BackgroundShapes from "./components/BackgroundShapes";
import LoadingScreen from "./components/LoadingScreen";
import {
  contactActions,
  fadeUp,
  sectionItems,
  serviceNames,
  workImages
} from "./components/siteData";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://arulearthmovers.onrender.com";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState(serviceNames);

  useEffect(() => {
    document.title = "Mini Excavator Services in Tamil Nadu";
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadServices = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/services`);

        if (!response.ok) {
          throw new Error(`Failed to load services: ${response.status}`);
        }

        const payload = await response.json();

        if (isMounted && Array.isArray(payload?.data) && payload.data.length > 0) {
          setServices(payload.data);
        }
      } catch (error) {
        console.error("Using local services fallback", error);
      }
    };

    loadServices();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const sections = sectionItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="site-shell">
      <BackgroundShapes />
      <Navbar
        activeSection={activeSection}
        onNavigate={handleScrollTo}
        sectionItems={sectionItems}
      />

      <main className="main-content">
        <Home fadeUp={fadeUp} />
        <Services fadeUp={fadeUp} serviceNames={services} />
        <Work fadeUp={fadeUp} workImages={workImages} />
        <Contact contactActions={contactActions} fadeUp={fadeUp} />
      </main>
    </div>
  );
}

export default App;
