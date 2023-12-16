import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useSwitchLang from '@hooks/useSwitchLang';

function SideMenu({
  setShowMenu,
  menuValue,
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menuValue: boolean;
}) {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const { changeLang } = useSwitchLang();

  const NavLinks = [
    { name: t('Home'), path: '/' },
    { name: t('Services'), path: '/services' },
    { name: t('Portfolio'), path: '/portfolio' },
    { name: t('AboutUs'), path: '/about' },
    { name: t('ContactUs'), path: '/contact' },
  ];
  return (
    <AnimatePresence>
      {menuValue && (
        <motion.div
          initial={{ top: '-100vh' }}
          animate={{ top: 0 }}
          exit={{ top: '100vh' }}
          key={1}
          className=" section-blur-overlay text-white bg-white/20 fixed h-full w-full top-0 left-0 z-50 flex flex-col  justify-center items-start px-5"
        >
          <div className=" relative z-50 flex flex-col justify-center items-start gap-6 text-xl w-3/4 px-3">
            {NavLinks.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" w-full"
                  onClick={() => {
                    setShowMenu((prev) => !prev);
                  }}
                >
                  <NavLink
                    to={item.path}
                    className={` cursor-pointer ${
                      pathname.match(item.path) && item.path !== '/'
                        ? 'font-bold'
                        : ''
                    } ${
                      item.path === '/' && pathname == '/' ? 'font-bold' : ''
                    }`}
                  >
                    {item.name}
                  </NavLink>
                  <hr className=" w-3/4" />
                </div>
              );
            })}
          </div>
          <div className="relative z-50 flex items-center content-start gap-5 my-3 px-6">
            <button
              onClick={changeLang}
              className={` p-2 bg-primary rounded-lg cursor-pointer ${
                i18n.language == 'de' ? 'text-white' : 'text-white/30'
              } `}
            >
              Ger
            </button>
            <button
              onClick={changeLang}
              className={` p-2 bg-primary rounded-lg cursor-pointer ${
                i18n.language == 'en' ? 'text-white' : 'text-white/30'
              } `}
            >
              Eng
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideMenu;
