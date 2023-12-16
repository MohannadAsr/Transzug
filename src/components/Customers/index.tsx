import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-fade';
import { AnimatePresence, motion } from 'framer-motion';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Customers() {
  return (
    <div className=" site-section">
      <div className=" container">
        <h1 className=" text-center text-primary font-bold text-2xl md:text-3xl italic">
          What costumers say
        </h1>
        <div className=" hidden lg:grid  grid-cols-5 gap-2 my-10">
          {Array.from({ length: 5 }).map((_item, index) => {
            return (
              <motion.div
                initial={{ y: index % 2 ? 40 : -40 }}
                whileInView={{ y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={` bg-[#80535E] rounded-lg p-4 h-fit ${
                  index % 2 !== 0 ? 'mt-20' : ''
                }`}
                key={index}
              >
                <div className=" border-[1px] border-white text-white gap-4 p-4 flex flex-col items-center rounded-lg">
                  <img src="/caption.svg" />
                  <h1>
                    Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h1>
                  <h5 className=" font-bold">Laila Doe Location</h5>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className=" my-10 lg:hidden block">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {Array.from({ length: 5 }).map((_item, index) => {
              return (
                <SwiperSlide
                  style={{ width: '250px' }}
                  className={` bg-[#80535E]  rounded-lg p-4 h-fit ${
                    index % 2 !== 0 ? 'mt-20' : ''
                  }`}
                  key={index}
                >
                  <div className=" border-[1px] border-white text-white gap-4 p-4 flex flex-col items-center rounded-lg">
                    <img src="/caption.svg" />
                    <h1>
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </h1>
                    <h5 className=" font-bold">Laila Doe Location</h5>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Customers;
