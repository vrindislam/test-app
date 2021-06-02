import React, {useState, useEffect} from 'react';
import Dashboard from "../../containers/Dashboard";
import AboutUs from "../../containers/AboutUs";
import Footer from "../../containers/Footer";
import NavFooter from "../../containers/NavFooter";
import Projects from "../../containers/Projects";
import './style.scss'
import Features from "../../containers/Features";
// import Indicator from "../../components/Indicator";
import Contact from "../../containers/Contact";
import Fullpage from "./FullPage";
import ContactsIndicator from "../../components/ContactsIndicator";

const Main = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const width = window.innerWidth

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className='main'>
      {width > 1919 ?
        <>
          {/*<Indicator scrollPos={scrollPosition}/>*/}
          <ContactsIndicator/>
          <Fullpage/>
        </>
        :
        <>
          <Dashboard/>
          <AboutUs/>
          <Features/>
          <Projects/>
          <Contact/>
          {/*<NavFooter width={width}/>*/}
        </>
      }
    </section>
  );
};

export default Main;