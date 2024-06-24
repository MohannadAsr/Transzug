import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const servicesDetails = [
  {
    title: 'Umzüge aller Art',
    descriptions: [
      <p>
        Unsere Firma bietet umfassende Dienstleistungen für Umzüge aller Art an.
        Egal ob es sich um einen privaten Umzug in ein neues Zuhause, einen
        Büroumzug oder eine internationale Verlagerung handelt, wir stehen
        unseren Kunden mit professionellem Service zur Seite. Von der Verpackung
        und dem Transport von Möbeln und persönlichen Gegenständen bis zur
        Montage und Demontage von Möbeln - wir kümmern uns um alle Details.
        Unser qualifiziertes Personal, geeignete Fahrzeuge und das notwendige
        Equipment garantieren einen reibungslosen Ablauf Ihres Umzugs. Mit
        unserer Expertise und unserem Engagement sorgen wir dafür, dass Ihr
        Umzug aller Art stressfrei und erfolgreich verläuft. Vertrauen Sie auf
        unsere Erfahrung und lassen Sie uns Ihnen helfen, den nächsten Schritt
        in Ihrem Leben problemlos zu meistern.
      </p>,
    ],
  },
  {
    title: 'Wohnungsauflösung',
    descriptions: [
      <p>
        Unsere Firma bietet professionelle Wohnungsauflösungen an, um unseren
        Kunden bei der effizienten und stressfreien Abwicklung von Umzügen,
        Haushaltsauflösungen oder Entrümpelungen zu unterstützen. Mit unserem
        erfahrenen Team und unserer umfassenden Expertise übernehmen wir die
        komplette Organisation und Durchführung der Wohnungsauflösung.
      </p>,
      <p>
        Wir kümmern uns um die Entsorgung von Möbeln, Elektrogeräten, Hausrat
        und anderen Gegenständen gemäß den gesetzlichen Vorschriften und sorgen
        dafür, dass alles fachgerecht entsorgt oder recycelt wird. Wir bieten
        auch die Reinigung der Räumlichkeiten an, um sicherzustellen, dass die
        Wohnung besenrein übergeben werden kann.
      </p>,
      <p>
        Verlassen Sie sich auf unsere Zuverlässigkeit und Professionalität, um
        Ihre Wohnungsauflösung reibungslos abzuwickeln. Wir stehen Ihnen mit Rat
        und Tat zur Seite, um den Prozess so einfach wie möglich zu gestalten.
      </p>,
    ],
  },
  {
    title: 'Möbelmontage und Küchenservice',
    descriptions: [
      <p>
        Unsere Firma bietet professionelle Möbelmontage an, um unseren Kunden
        bei der Einrichtung ihres Zuhauses oder Büros zu unterstützen. Mit
        unserem erfahrenen Team und unserem umfassenden Fachwissen übernehmen
        wir die fachgerechte Montage von Möbeln aller Art, angefangen von Betten
        und Schränken. Wir stellen sicher, dass alle Möbelstücke sicher und
        stabil montiert werden, um eine langfristige Nutzung zu gewährleisten.
      </p>,
      <p>
        Wir kümmern uns um die Entsorgung von Möbeln, Elektrogeräten, Hausrat
        und anderen Gegenständen gemäß den gesetzlichen Vorschriften und sorgen
        dafür, dass alles fachgerecht entsorgt oder recycelt wird. Wir bieten
        auch die Reinigung der Räumlichkeiten an, um sicherzustellen, dass die
        Wohnung besenrein übergeben werden kann.
      </p>,
      <p>
        Verlassen Sie sich auf unsere Expertise und lassen Sie uns Ihnen helfen,
        Ihre Möbel professionell zu montieren.
      </p>,
    ],
  },
  {
    title: 'Endreinigung',
    descriptions: [
      <p>
        Unsere Firma bietet professionelle Endreinigungen an, um
        sicherzustellen, dass Ihre Räumlichkeiten in einem einwandfreien Zustand
        übergeben werden können. Mit unserem erfahrenen Reinigungspersonal und
        hochwertigen Reinigungsmitteln sorgen wir für eine gründliche und
        zuverlässige Reinigung von Wohnungen, Büros, Geschäften und anderen
        Immobilien
      </p>,
      <p>
        Wir kümmern uns um die Reinigung von Böden, Fenstern, Sanitäranlagen,
        Küchen und allen anderen Oberflächen, um sicherzustellen, dass alles
        sauber und hygienisch ist. Wir arbeiten effizient und sorgfältig, um
        auch hartnäckige Verschmutzungen zu beseitigen und ein optimales
        Ergebnis zu erzielen.
      </p>,
      <p>
        Verlassen Sie sich auf unsere Expertise und lassen Sie uns Ihnen helfen,
        Ihre Räumlichkeiten für die Übergabe oder den Einzug vorzubereiten. Mit
        unserer Endreinigungsdienstleistung können Sie sicher sein, dass alles
        blitzsauber ist.
      </p>,
    ],
  },
  {
    title: 'Kleine Renovierungsarbeit',
    descriptions: [
      <p>
        Unsere Transportfirma bietet professionelle Dienstleistungen im Bereich
        Renovierung an. Egal ob es sich um den Transport von Baumaterialien,
        Möbeln oder anderen Renovierungsgegenständen handelt, wir stehen mit
        unserem Fachwissen und unserer Erfahrung an Ihrer Seite.
      </p>,
      <p>
        Unser Team von erfahrenen Mitarbeitern arbeitet effizient und präzise,
        um sicherzustellen, dass der Transport Ihrer Renovierungsgegenstände
        termingerecht und sicher erfolgt. Wir verfügen über eine Vielzahl von
        Fahrzeugen und Ausrüstung, um Ihre Gegenstände sicher zu transportieren.
      </p>,
      <p>
        Wir legen großen Wert auf Kundenzufriedenheit und arbeiten eng mit Ihnen
        zusammen, um sicherzustellen, dass Ihre Renovierungsprojekte reibungslos
        ablaufen. Von der Abholung bis zur Lieferung sind wir Ihr
        vertrauenswürdiger Partner für den Transport von
        Renovierungsgegenständen.
      </p>,
      <p>
        Kontaktieren Sie uns noch heute, um mehr über unsere Leistungen zu
        erfahren und ein kostenloses Angebot für Ihren nächsten Transportbedarf
        im Rahmen einer Renovierung zu erhalten.
      </p>,
    ],
  },
  {
    title: 'Transporter vermieten inklusiv Fahrer',
    descriptions: [
      <p>
        Unsere Firma bietet professionelle Dienstleistungen im Bereich
        Transportervermietung inklusive Fahrer an. Egal ob es sich um den Umzug
        in ein neues Zuhause, den Transport von Möbeln oder den Logistikbedarf
        für Veranstaltungen handelt, wir stehen mit unserem Fachwissen und
        unserer Erfahrung zur Verfügung.
      </p>,
      <p>
        Unser Team von erfahrenen Fahrern und Logistikexperten arbeitet
        effizient und zuverlässig, um sicherzustellen, dass Ihr Transportbedarf
        termingerecht und professionell abgewickelt wird. Wir verfügen über eine
        Flotte von gut gewarteten Transportern in verschiedenen Größen, um Ihren
        individuellen Anforderungen gerecht zu werden.
      </p>,
      <p>
        Wir legen großen Wert auf Kundenzufriedenheit und arbeiten eng mit Ihnen
        zusammen, um sicherzustellen, dass Ihr Transport reibungslos verläuft.
        Von der Abholung bis zur Lieferung sind wir Ihr vertrauenswürdiger
        Partner für Transportervermietung mit Fahrer.
      </p>,
      <p>
        Kontaktieren Sie uns noch heute, um mehr über unsere Leistungen zu
        erfahren und ein maßgeschneidertes Angebot für Ihren nächsten
        Transportbedarf zu erhalten.
      </p>,
    ],
  },
];

function Services() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  React.useEffect(() => {
    pathname.match('/services')
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : null;
  }, []);

  return (
    <div className=" site-section">
      <div className=" container">
        {/* <h1 className=" text-center text-primary font-bold text-xl md:text-3xl">
          We provide expert removals services
        </h1>
        <h3 className="text-center text-primary text-md md:text-xl py-1">
          Here are just some of the services we can offer
        </h3> */}
        <h3 className="text-center text-primary font-bold text-xl md:text-3xl">
          {t('Services')}
        </h3>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-1  md:gap-6 lg:gap-12 my-9 px-2">
          {servicesDetails.map((item, index) => {
            return (
              <div
                className=" bg-secondary rounded-md p-2 md:p-5 overflow-hidden"
                key={index}
              >
                <div className=" overflow-hidden  ">
                  <img
                    src={`/service${index + 1}.webp`}
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
                    <h4 className=" font-bold text-[12px] lg:text-xl">
                      {item.title}
                    </h4>
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
