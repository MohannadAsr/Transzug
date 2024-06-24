import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-fade';
import { AnimatePresence, motion } from 'framer-motion';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

const customerSays = [
  '"Der Transport war pünktlich und professionell, ich bin sehr zufrieden mit dem Service."',
  '"Die Fahrer waren freundlich und hilfsbereit, ich kann die Firma nur weiterempfehlen."',
  '"Die Vielfalt der Transporter hat es mir ermöglicht, genau das passende Fahrzeug für meinen Umzug zu finden."',
  '"Der Kundenservice war ausgezeichnet, meine Fragen wurden schnell und kompetent beantwortet.',
];

function Customers() {
  const { t } = useTranslation();
  return (
    <div className=" site-section">
      <div className=" container">
        <h1 className=" text-center text-primary font-bold text-2xl md:text-3xl italic">
          {t('customersSays')}
        </h1>
        <div className=" hidden lg:grid  grid-cols-4 gap-2 my-10   ">
          {customerSays.map((item, index) => {
            return (
              <motion.div
                initial={{ y: index % 2 ? 40 : -40 }}
                whileInView={{ y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={` bg-[#80535E] rounded-lg p-4 h-fit ${
                  index % 2 !== 0 ? 'mt-20' : ''
                } h-[210px]`}
                key={index}
              >
                <div className=" h-full border-[1px] border-white text-white gap-4 p-4 flex flex-col items-center rounded-lg">
                  <img src="/caption.svg" />
                  <h1>{item}</h1>
                  {/* <h5 className=" font-bold">Laila Doe Location</h5> */}
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
            {customerSays.map((item, index) => {
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
                    <h1>{item}</h1>
                    {/* <h5 className=" font-bold">Laila Doe Location</h5> */}
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
