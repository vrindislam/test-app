import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Dashboard from "../../containers/Dashboard";
import AboutUs from "../../containers/AboutUs";
import Features from "../../containers/Features";
import Projects from "../../containers/Projects";
import Contact from "../../containers/Contact";
import './overrides.scss'

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'4F9D506F-1D524EFD-91AB349F-6A37E652'}
    scrollingSpeed = {700} /* Options here */
    navigation = "true"
    autoScrolling = "false"
    showActiveTooltip = 'true'
    navigationTooltips = {['Start', 'About Us', 'Features', 'Projects', 'Contact']}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" data-anchor="dashboard1">
            <Dashboard/>
          </div>
          <div className="section" data-anchor="about-us1">
            <AboutUs/>
          </div>
          <div className="section" data-anchor="features1">
            <Features/>
          </div>
          <div className="section" data-anchor="projects1">
            <Projects/>
          </div>
          <div className="section" data-anchor="contact1">
            <Contact/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Fullpage;