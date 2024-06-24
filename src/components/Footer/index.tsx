import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import snapchat from '@iconify-icons/mdi/snapchat';
import facebook from '@iconify-icons/mdi/facebook';

import instagram from '@iconify-icons/mdi/instagram';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className=" bg-primary text-white">
      <div className=" container pt-10 pb-3">
        <div className=" grid  grid-cols-12 gap-5 mx-auto">
          <div className=" col-span-12 lg:col-span-4 mx-auto   ">
            <img src="/transzugname.svg" />
            <hr className=" w-44 my-2" />
            <h2 className=" w-44">Transzug für Umzug & Wohnungsauflösung</h2>
            <div className=" flex gap-3 items-center py-2">
              <div className=" w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary">
                <Icon icon={facebook} fontSize={20} />
              </div>{' '}
              <div className=" w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary">
                <Icon icon={instagram} fontSize={20} />
              </div>
              <div className=" w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary">
                <img src={'/tiktok.svg'} className=" text-xl" />
              </div>
              <div className=" w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary">
                <Icon icon={snapchat} fontSize={20} />
              </div>
            </div>
          </div>
          <div className=" col-span-4 break-words md:col-span-3 px-2 mx-auto">
            <h5 className=" font-bold">Links</h5>
            <div className=" footer-links flex flex-col my-4  gap-5 text-white/60">
              <Link to={'/'} className=" underline">
                {t('Home')}
              </Link>
              <Link to={'/services'} className=" underline">
                {t('Services')}
              </Link>
              <Link to={'/portfolio'} className=" underline">
                {t('Portfolio')}
              </Link>
              <Link to={'/about'} className=" underline">
                {t('AboutUs')}
              </Link>
            </div>
          </div>
          <div className=" col-span-3 break-words md:col-span-3 px-2 mx-auto">
            <h5 className="  font-bold">{t('important')}</h5>
            <div className=" footer-links flex flex-col  my-4 gap-5 text-white/60">
              <a className=" underline" href="datenschutzerkla.pdf">
                {t('privacyPolicy')}
              </a>
              <a href="/impressum.pdf" className=" underline">
                imprison
              </a>
              {/* <a className=" underline">Cookies</a> */}
            </div>
          </div>
          <div className=" col-span-5 break-words md:col-span-2 px-1 mx-auto">
            <h5 className="  font-bold">Contact us</h5>
            <div className="flex flex-col  my-4 gap-3">
              <h5 className="  font-bold font-serif">0176 62014997</h5>
              <a className=" underline" href="mailto:info@transzug.de">
                info@transzug.de
              </a>
              <h5 className=" ">Würzburg</h5>
            </div>
          </div>
        </div>
        <div className=" w-full h-[1px] bg-white/20" />
        <div className=" flex justify-start md:justify-center items-center text-white/70 pt-2 px-2">
          COPYRIGHTS IT-TrendCO
        </div>
      </div>
    </div>
  );
}

export default Footer;
