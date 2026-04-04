import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <motion.div
        className="loader-ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
      />
      <p>Loading Arul Earth Movers...</p>
    </div>
  );
}

export default LoadingScreen;
