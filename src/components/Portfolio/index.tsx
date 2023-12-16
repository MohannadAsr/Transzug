import React from 'react';
import arrowLeft from '@iconify-icons/mdi/arrow-left-bold-box';
import arrowRight from '@iconify-icons/mdi/arrow-right-bold-box';
import close from '@iconify-icons/mdi/close';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion, AnimatePresence } from 'framer-motion';

function Portfolio() {
  const [id, setId] = React.useState<number>(1);
  const [dialog, setDialog] = React.useState<boolean>(false);

  const goTo = (dir: 'next' | 'prev') => {
    if (dir == 'next' && id < 8) {
      return setId(id + 1);
    }
    if (dir == 'prev' && id !== 1) {
      return setId(id - 1);
    }
  };

  const handleBodyOverflow = React.useCallback(() => {
    document.body.style.overflow = dialog ? 'hidden' : 'auto';
  }, [dialog]);

  React.useEffect(() => {
    handleBodyOverflow();
  }, [handleBodyOverflow]);

  return (
    <div className=" site-section relative  overflow-hidden">
      <AnimatePresence>
        {dialog && (
          <motion.div
            key={3}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: 30 }}
            className="  z-30 fixed px-2 w-full h-full bg-black/80  top-0  flex flex-col md:flex-row justify-center gap-3 items-center text-white my-5"
          >
            <Icon
              icon={arrowLeft}
              fontSize={40}
              className={` hidden md:block  text-white/90 ${
                id && Number(id) == 1 ? ' opacity-50' : 'cursor-pointer'
              }`}
              onClick={() => goTo('prev')}
            />
            <div className=" bg-primary/60 rounded-md p-2 relative ">
              <div
                onClick={() => setDialog(false)}
                className=" absolute -left-1 -top-1 rounded-md bg-primary cursor-pointer flex items-center justify-center p-1"
              >
                <Icon icon={close} fontSize={30} />
              </div>
              <img src={`/portfolio${id}.png`} className=" mx-auto cover" />
            </div>
            <Icon
              icon={arrowRight}
              fontSize={40}
              className={` hidden md:block  text-white/90 ${
                id && Number(id) == 8 ? ' opacity-50' : 'cursor-pointer'
              }`}
              onClick={() => goTo('next')}
            />
            <div className=" md:hidden flex items-center justify-center gap-4">
              <Icon
                icon={arrowLeft}
                fontSize={40}
                className={`   text-white/90 ${
                  id && Number(id) == 1 ? ' opacity-50' : 'cursor-pointer'
                }`}
                onClick={() => goTo('prev')}
              />
              <Icon
                icon={arrowRight}
                fontSize={40}
                className={`   text-white/90 ${
                  id && Number(id) == 8 ? ' opacity-50' : 'cursor-pointer'
                }`}
                onClick={() => goTo('next')}
              />
            </div>
          </motion.div>
        )}
        <div className=" container">
          <h1 className=" text-center text-primary font-bold text-2xl md:text-3xl italic">
            Our Portfolio
          </h1>
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 my-10 px-3">
            {Array.from({ length: 8 }).map((_item, index) => {
              return (
                <div
                  className={` bg-secondary rounded-md p-2 ${
                    dialog ? ' opacity-30' : ''
                  }`}
                  key={index}
                >
                  <div className=" overflow-hidden">
                    <img
                      src={`/portfolio${index + 1}.png`}
                      className=" object-fit rounded-sm hover:scale-125  cursor-pointer custom-trans"
                      onClick={() => {
                        setDialog(true);
                        setId(index + 1);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" text-center my-6">
            <button className=" px-10 py-2 bg-primary rounded-md text-white">
              See More
            </button>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
