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
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" text-sm md:text-base absolute md:w-3/4 w-full flex-wrap rounded-t-lg p-4 bg-primary/80 text-white  bottom-0 m-auto flex items-center justify-center gap-5"
      >
        <h4>
          the website use cookies to ensure important security and visitor
          functions.
          <a className=" font-bold underline cursor-pointer">Learn more</a>
        </h4>
        <div className=" flex gap-3 items-center">
          <button className=" bg-dark px-5 py-2 rounded-md">
            Accept cookies
          </button>
          <button className=" bg-transparent border-2 border-white px-5 py-2 rounded-md">
            Reject cookies
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
