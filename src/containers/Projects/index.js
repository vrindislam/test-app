import React from 'react';
import './style.scss';
import img88team from '../../assets/projects-88team-mob.svg';
import imgBeeBongo from '../../assets/projects-beebongo-mob.svg';
import imgBtc from '../../assets/projects-btc-mob.svg';
import imgKings from '../../assets/projects-kings-mob.svg';
import imgQteam from '../../assets/projects-qteam-mob.svg';

const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <div className='projects-heading-container'>
          <h1>Our Projects</h1>
        </div>
      <div className='projects-wrapper'>
        <div className='projects-desctop-image'/>
        <div className='projects-container'>
          <a href="https://88.guru/" target='_blank' rel='noreferrer'><img className='project-link' src={img88team} alt="project-img"/></a>
          <a href="http://bee.bingo/" target='_blank' rel='noreferrer'><img className='project-link' src={imgBeeBongo} alt="project-img"/></a>
          <a href="http://btc.cf/" target='_blank' rel='noreferrer'><img className='project-link' src={imgBtc} alt="project-img"/></a>
          <a href="https://kings.ws/" target='_blank' rel='noreferrer'><img className='project-link' src={imgKings} alt="project-img"/></a>
          <a href="https://quants.team/" target='_blank' rel='noreferrer'><img className='project-link' src={imgQteam} alt="project-img"/></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;