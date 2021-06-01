import React from 'react';
import Logo from "../../components/Logo";
import './style.scss'
import DashboardTitle from "../../components/DashboardTitle";
import NavBar from "../../components/NavBar";
import MouseScroller from "../../components/MouseScroller";
import ContactsIndicator from "../../components/ContactsIndicator";

const Dashboard = () => {
  const width = window.innerWidth
  return (
    <div className='dashboard'>
      <div className='dashboard-logo'><Logo/></div>
      <DashboardTitle/>
      <NavBar/>
      {width > 767 && <ContactsIndicator/>}
      {width > 1919 && <MouseScroller/>}
    </div>
  );
};

export default Dashboard;