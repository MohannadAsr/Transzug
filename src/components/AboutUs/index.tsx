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
            <div className=" col-span-12 md:col-span-7">
              <div>
                “Very professional and quick to assist with the removal of the
                furniture to our desired location”
              </div>
              <div className=" py-5 md:py-9">
                Take the stress out of moving with
                <span className=" font-bold"> Transzug’s</span> removals
                services. We promise you'll get a high-quality moving company
                for a competitive price. Our Removal Partners span the country
                so we always have local experts operating in your area, meaning
                we can get you moving as quickly as you like. We're comprised of
                experienced removals industry specialists, and can guarantee a
                seamless move for individuals, households and businesses,
                whether the relocation concerns a nearby city or an
                international destination. Each of our customers will have their
                own personal move coordinator. Overseeing the operation, they
                will ensure an efficient and effective service. We can move
                anything anywhere, regardless of its size, value and condition.
                We have professional packers and movers, so if you have delicate
                or difficult items requiring special treatment, we know exactly
                what to do.
              </div>
            </div>
            <div className=" col-span-12 md:col-span-5 h-full flex flex-col justify-between gap-4 p-10">
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
                  className="gradient-border py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center border-[0.5px] border-white"
                >
                  <div>Price </div>
                  <div>Guarantee</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="gradient-border py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center"
                >
                  <div>Customized</div>
                  <div>For You</div>
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
                  className="gradient-border py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center"
                >
                  <div>Price </div>
                  <div>Guarantee</div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: 90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="gradient-border py-7 px-4 bg-primary/50 rounded-md flex justify-center flex-col items-center"
                >
                  <div>Customized</div>
                  <div>For You</div>
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
