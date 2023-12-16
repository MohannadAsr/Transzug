import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function Services() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    pathname.match('/services')
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : null;
  }, []);

  return (
    <div className=" site-section">
      <div className=" container">
        <h1 className=" text-center text-primary font-bold text-xl md:text-3xl">
          We provide expert removals services
        </h1>
        <h3 className="text-center text-primary text-md md:text-xl py-1">
          Here are just some of the services we can offer
        </h3>
        <div className=" grid grid-cols-2 md:grid-cols-3  gap-6 lg:gap-12 my-9 px-2">
          {Array.from({ length: 6 }).map((_item, index) => {
            return (
              <div className=" bg-secondary rounded-md p-2 md:p-5" key={index}>
                <div className=" overflow-hidden  ">
                  <img
                    src={`/service${index + 1}.png`}
                    className=" object-fit rounded-sm cursor-pointer hover:scale-110 hover:rotate-3 custom-trans "
                    style={{ maxHeight: '200px' }}
                    onClick={() => navigate(`/services/${index + 1}`)}
                  />
                </div>
                <div className=" flex items-center gap-5 py-5">
                  <motion.h5
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    viewport={{ once: true }}
                    className=" text-white lg:text-5xl text-xl font-number"
                  >
                    {(index + 1).toString().padStart(2, '0')}
                  </motion.h5>
                  <motion.div
                    initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className=" text-white"
                  >
                    <h4 className=" font-bold text-xs lg:text-xl">
                      Expert house removal services
                    </h4>
                    <h2 className=" hidden lg:block">
                      Lorem ipsum dolor sit amet.
                    </h2>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
