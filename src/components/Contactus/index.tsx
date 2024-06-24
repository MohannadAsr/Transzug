import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import phone from '@iconify-icons/mdi/phone';
import mail from '@iconify-icons/mdi/email';
import location from '@iconify-icons/mdi/location';
import { useTranslation } from 'react-i18next';

function ContactUs() {
  const [check, setCheck] = React.useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div className=" site-section">
      <div className=" container">
        <h1 className=" text-center text-primary font-bold text-2xl md:text-3xl italic">
          {t('ContactUs')}
        </h1>
        <div className=" bg-primary/60 py-8 px-5 my-9 rounded-md text-white mx-2">
          {/* <h4>
            “They took all the stress away by organising every step of the
            removal”
          </h4> */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-7 ">
            <div className=" grid grid-cols-2 gap-3">
              <input placeholder={t('Full-name')} />
              <input placeholder={'E-mail'} />
              <div className=" md:col-span-2 col-span-1">
                <input placeholder={t('PhoneNumber')} className="w-full" />
              </div>
              <div className=" md:col-span-2 col-span-1">
                <input placeholder={t('subject')} className="w-full" />
              </div>
              <textarea
                className=" col-span-2 max-h-[150px]"
                placeholder={t('message')}
              />
              <div className=" col-span-2 flex items-center justify-start gap-2">
                <img
                  src={check ? '/check.svg' : ' /checked.svg'}
                  className=" cursor-pointer"
                  onClick={() => setCheck(!check)}
                />
                <a href="/datenschutzerkla.pdf" className=" underline">
                  {t('acceptPrivacy')}{' '}
                </a>
              </div>
              <div className=" col-span-2">
                <button className=" bg-secondary w-full p-3 rounded-lg">
                  {t('submit')}
                </button>
              </div>
            </div>
            <div className=" flex items-start md:mx-auto justify-start md:justify-center flex-col  gap-4 md:gap-10">
              <div className=" flex items-center  justify-start gap-5 ">
                <Icon icon={phone} fontSize={25} />
                <div>
                  <h5>{t('PhoneNumber')}</h5>
                  <h3 className=" font-bold text-lg md:text-xl font-number">
                    0176 62014997
                  </h3>
                </div>
              </div>
              <div className=" flex items-center  justify-start gap-5 ">
                <Icon icon={mail} fontSize={25} />
                <div>
                  <h5>E-mail </h5>
                  <h3 className=" font-bold text-lg md:text-xl">
                    info@transzug.de
                  </h3>
                </div>
              </div>
              <div className=" flex items-center  justify-start gap-5  ">
                <Icon icon={location} fontSize={25} />
                <div>
                  <h5>{t('location')}</h5>
                  <h3 className=" font-bold text-lg md:text-xl">Würzburg</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
