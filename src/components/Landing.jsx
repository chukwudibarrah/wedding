import { motion } from "framer-motion";


export default function Landing() {
  return (
    <section
      id="hero-section"
      className="bg-[url('../../images/hands.jpg')] bg-cover bg-center bg-no-repeat bg-gray-400 bg-blend-multiply h-screen grid items-center"
    >
      <motion.div className="max-w-screen text-center">
        <motion.h1
          animate={{ x: 0 }}
          initial={{ x: "100%" }}
          transition={{ delay: 0.65, duration: 0.65 }}
          className="text-6xl md:text-9xl md:px-60 text-slate-200 font-bold font-windsong leading-[65px]"
        >
          Bride & Groom
        </motion.h1>
        <motion.p
          animate={{ x: 0 }}
          initial={{ x: "100%" }}
          transition={{ delay: 0.75, duration: 0.75 }}
          className="font-merriweather text-slate-300 md:text-xl mt-10"
        >
          07 August 2023
        </motion.p>
      </motion.div>
    </section>
  );
}