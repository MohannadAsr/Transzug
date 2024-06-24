import LangSwitcher from '@components/LangSwitcher';
import { Icon } from '@iconify/react/dist/iconify.js';
import { NavLink, useLocation } from 'react-router-dom';
import Menu from '@iconify-icons/mdi/menu';
import Close from '@iconify-icons/mdi/close';
import { useTranslation } from 'react-i18next';

type propsType = {
  menuValue: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBar(props: propsType) {
  const { menuValue, setShowMenu } = props;
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const NavLinks = [
    { name: t('Home'), path: '/' },
    { name: t('Services'), path: '/services' },
    { name: t('Portfolio'), path: '/portfolio' },
    { name: t('AboutUs'), path: '/about' },
    { name: t('ContactUs'), path: '/contact' },
  ];

  return (
    <div className="  bg-primary shadow-lg sticky top-0 z-[999] ">
      <div className=" container  flex justify-between items-center px-3">
        <div className=" flex flex-col items-center justify-center py-2 ">
          <NavLink to={'/'}>
            <img src="/transzug.svg" className=" w-30" />
          </NavLink>
        </div>
        <div className="  gap-10 items-center justify-center hidden  md:flex text-white">
          {NavLinks.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                className={` cursor-pointer ${
                  pathname.match(item.path) && item.path !== '/'
                    ? 'font-bold'
                    : ''
                } ${item.path === '/' && pathname == '/' ? 'font-bold' : ''}`}
                key={index}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
        <div></div>
        {/* <LangSwitcher /> */}
        <div
          className="md:hidden block"
          onClick={() => {
            setShowMenu(!menuValue);
          }}
        >
          <Icon
            icon={menuValue ? Close : Menu}
            fontSize={30}
            className=" text-white "
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
