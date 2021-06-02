import React from 'react';
import Logo from "../../components/Logo";
import './style.scss'
import DashboardTitle from "../../components/DashboardTitle";
import NavBar from "../../components/NavBar";
import MouseScroller from "../../components/MouseScroller";
import ContactsIndicator from "../../components/ContactsIndicator";

const Dashboard = () => {

  return (
    <div className='dashboard' id='dashboard'>
      <div className='dashboard-logo'><Logo/></div>
      <DashboardTitle/>
      <NavBar/>
      <ContactsIndicator className='hidden'/>
      <MouseScroller/>
    </div>
  );
};

export default Dashboard;