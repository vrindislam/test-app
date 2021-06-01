import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Dashboard from "../../containers/Dashboard";
import AboutUs from "../../containers/AboutUs";
import Features from "../../containers/Features";
import Projects from "../../containers/Projects";
import Contact from "../../containers/Contact";
import NavFooter from "../../containers/NavFooter";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'4F9D506F-1D524EFD-91AB349F-6A37E652'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Dashboard/>
          </div>
          <div className="section">
            <AboutUs/>
          </div>
          <div className="section">
            <Features/>
          </div>
          <div className="section">
            <Projects/>
          </div>
          <div className="section">
            <Contact/>

          </div>
          <div className="section">
            <NavFooter/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Fullpage;