import { AnimatePresence, motion } from 'framer-motion';

function Hero() {
  return (
    <div
      className=" overflow-hidden hero-section  flex justify-center items-center px-4 bg-center bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: 'url(/heroimg.svg)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.47 }}
        className=" bg-dark py-7 text-white flex flex-col gap-3 rounded-md hero-intro"
      >
        <h1 className="text-center lg:text-5xl text-3xl">Transzug</h1>
        <h2 className=" lg:text-3xl text-xl w-3/4 m-auto text-center">
          für Umzug & Wohnungsauflösung
        </h2>
      </motion.div>
    </div>
  );
}

export default Hero;
