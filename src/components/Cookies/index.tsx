import React from 'react';
import { motion } from 'framer-motion';

function Cookies() {
  const [cookieAccept, setCookieAccept] = React.useState<boolean>(() => {
    return JSON.parse(localStorage.getItem('cookie-accept')) ? true : false;
  });

  const acceptCookie = () => {
    setCookieAccept(true);
    localStorage.setItem('cookie-accept', JSON.stringify(true));
  };

  if (cookieAccept) return <></>;

  return (
    <div
      //   initial={{ y: 60 }}
      //   whileInView={{ y: 0 }}
      //   transition={{ duration: 1 }}
      //   viewport={{ once: true }}
      className="  z-[9999] text-sm md:text-base fixed md:w-3/4 w-full flex-wrap rounded-t-lg p-4 bg-primary/80 text-white left-1/2 -translate-x-1/2  bottom-0 m-auto flex items-center justify-center gap-5"
    >
      <h4>
        the website use cookies to ensure important security and visitor
        functions.
        <a className=" font-bold underline cursor-pointer">Learn more</a>
      </h4>
      <div className=" flex gap-3 items-center">
        <button
          className=" bg-dark px-5 py-2 rounded-md"
          onClick={acceptCookie}
        >
          Accept cookies
        </button>
        <button className=" bg-transparent border-2 border-white px-5 py-2 rounded-md">
          Reject cookies
        </button>
      </div>
    </div>
  );
}

export default Cookies;
