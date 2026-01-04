import { motion } from "framer-motion";
import { FaReact, FaJs, FaFigma } from "react-icons/fa";
import { SiGoogleanalytics, SiOpenai } from "react-icons/si";

export default function TechFloat() {
  const icons = [
    { id: 1, icon: <FaReact size={40} className="text-white opacity-60" /> },
    { id: 2, icon: <FaJs size={40} className="text-white opacity-60" /> },
    { id: 3, icon: <FaFigma size={40} className="text-white opacity-60" /> },
    { id: 4, icon: <SiGoogleanalytics size={40} className="text-white opacity-60" /> },
    { id: 5, icon: <SiOpenai size={40} className="text-white opacity-60" /> },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: -80, opacity: 1 }}
          transition={{
            duration: 3,
            delay: i * 0.6,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className={`absolute ${
            i % 2 === 0 ? "left-10" : "right-10"
          } top-[${20 + i * 15}%]`}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}
