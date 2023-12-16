import NavBar from '@components/NavBar';
import './styles/global.scss';
import Hero from '@components/Hero';
import Services from '@components/Services';
import Portfolio from '@components/Portfolio';
import Customers from '@components/Customers';
import AboutUs from '@components/AboutUs';
import ContactUs from '@components/Contactus';
import Footer from '@components/Footer';
import { Route, Routes } from 'react-router-dom';
import ServiceDetail from '@components/Services/ServiceDetail';
import React from 'react';
import SideMenu from '@components/SideMenu';

function App() {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const handleBodyOverflow = React.useCallback(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'auto';
  }, [showMenu]);

  React.useEffect(() => {
    handleBodyOverflow();
  }, [handleBodyOverflow]);

  return (
    <div>
      <NavBar menuValue={showMenu} setShowMenu={setShowMenu} />
      <SideMenu menuValue={showMenu} setShowMenu={setShowMenu} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Portfolio />
              <AboutUs />
              <Customers />
              <ContactUs />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
