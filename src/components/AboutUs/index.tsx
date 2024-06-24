import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function AboutUs() {
  return (
    <div className=" site-section text-white" id="about">
      <div className=" container">
        <h1 className=" text-center text-primary font-bold text-2xl md:text-3xl italic">
          About us
        </h1>
        <div className=" bg-primary/60 py-8 px-3 my-9 mx-2 rounded-md text-sm md:text-lg ">
          <div className="grid grid-cols-12">
            <div className=" col-span-12 md:col-span-7 flex items-center justify-center ">
              Unsere Firma ist darauf spezialisiert, Menschen bei ihrem Umzug zu
              unterstützen und ihnen bei der Wohnungsauflösung zu helfen. Wir
              bieten professionelle Dienstleistungen an, um den Umzugsprozess so
              reibungslos und stressfrei wie möglich zu gestalten. Unsere
              erfahrenen Mitarbeiter stehen Ihnen bei jedem Schritt zur Seite,
              um sicherzustellen, dass Ihr Umzug reibungslos verläuft. Wir sind
              stolz darauf, unseren Kunden einen erstklassigen Service zu bieten
              und ihnen dabei zu helfen, in ihr neues Zuhause zu ziehen
            </div>
            <div className=" col-span-12 md:col-span-5 h-full flex flex-col justify-between gap-4 p-3 md:p-10 text-[12px]  md:text-[14px]">
              <div className=" flex  justify-between items-center">
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  className="md:w-[150px] md:h-[150px] w-[120px] h-[120px] gradient-border py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center border-[0.5px] border-white"
                >
                  <div>Zuverlässigkeit </div>
                  <div>Pünktlichkeit</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:w-[150px] md:h-[150px] w-[120px] h-[120px] gradient-border py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center"
                >
                  <div>Professionelle </div>
                  <div>Fahrer</div>
                </motion.div>
              </div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=" flex items-center justify-center"
              >
                <img src="/transzug.svg" />
              </motion.div>
              <div className=" flex  justify-between items-center">
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:w-[150px] md:h-[150px] w-[120px] h-[120px] gradient-border py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center"
                >
                  <div>Vielfältige </div>
                  <div>Flotte</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:w-[150px] md:h-[150px] w-[120px] h-[120px] gradient-border py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center"
                >
                  <div>Kundenzufriedenheit </div>
                  <div>Flexibilität</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
