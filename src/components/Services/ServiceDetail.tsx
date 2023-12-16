import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import arrowLeft from '@iconify-icons/mdi/arrow-left-bold-box';
import arrowRight from '@iconify-icons/mdi/arrow-right-bold-box';
import { animate, motion } from 'framer-motion';

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goTo = (dir: 'next' | 'prev') => {
    if (dir == 'next' && Number(id) < 6) {
      return navigate(`/services/${Number(id) + 1}`);
    }
    if (dir == 'prev' && Number(id) !== 1) {
      return navigate(`/services/${Number(id) - 1}`);
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      className="  section-blur-overlay  text-white hero-section  py-7 px-4 bg-center bg-no-repeat bg-cover relative   "
      style={{
        backgroundImage: 'url(/heroimg.svg)',
      }}
    >
      <h1 className=" text-center  font-bold text-xl md:text-3xl z-20  relative">
        We provide expert removals services
      </h1>
      <h3 className="text-center  text-md md:text-xl py-1 z-20  relative">
        Here are just some of the services we can offer
      </h3>
      <div className="z-20  relative  w-full rounded-md px-3   md:w-3/4 mx-auto my-1  flex items-center justify-between">
        <Icon
          icon={arrowLeft}
          fontSize={30}
          className={`  text-white/90 ${
            id && Number(id) == 1 ? ' opacity-50' : 'cursor-pointer'
          }`}
          onClick={() => goTo('prev')}
        />

        <Icon
          icon={arrowRight}
          fontSize={30}
          className={`  text-white/90 ${
            id && Number(id) == 6 ? ' opacity-50' : 'cursor-pointer'
          }`}
          onClick={() => goTo('next')}
        />
      </div>
      <div className="z-20  relative bg-primary/60 w-full rounded-md py-6  md:w-3/4 mx-auto my-2 p-4 shadow-lg">
        <div className=" grid grid-cols-12 gap-5">
          <div className="  col-span-12 lg:col-span-7 order-2 lg:order-1">
            <motion.h1
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className=" text-2xl font-bold"
            >
              Expert house removal services
            </motion.h1>
            <motion.article
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" my-6"
            >
              Let <span className=" font-bold"> Transzug </span> remove the
              stress, time and cost from finding reliable home removals
              services.
              <div className=" my-3">
                We'll make your move as easy as possible with a dedicated move
                co-ordinator who will take care of the whole process. It all
                begins with an instant free quote and free basic compensation
                cover up to £50k for fire & theft (in accordance with our
                Ts&Cs). We pride ourselves on offering an efficient, effective
                and affordable service. Whether you're moving to a new flat or a
                country manor, our team of Removal Partners are trained and
                equipped to handle your requirements.
              </div>
              <div className=" my-3">
                We've earned a 5 star rating from more than 100,000 happy house
                removals and we can't wait to give you the same satisfaction.
                Whatever and wherever you're moving, Transzug are here to help.
              </div>
            </motion.article>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" col-span-12 lg:col-span-5  h-full flex items-center order-1 lg:order-2"
          >
            <img src={`/service${id}.png`} className=" h-full object-cover " />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
